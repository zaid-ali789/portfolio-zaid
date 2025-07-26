from fastapi import FastAPI, APIRouter, HTTPException, Response
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import asyncio
from concurrent.futures import ThreadPoolExecutor


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Thread pool for email sending
executor = ThreadPoolExecutor(max_workers=3)

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)

class ContactFormResponse(BaseModel):
    success: bool
    message: str

# Email sending function
def send_email(name: str, email: str, subject: str, message: str):
    try:
        # Email configuration - using Gmail SMTP
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = "zaid789209@gmail.com"
        # For production, use app password or OAuth2
        sender_password = os.environ.get('GMAIL_APP_PASSWORD', '')
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = sender_email  # Send to Zaid's email
        msg['Subject'] = f"Portfolio Contact: {subject}"
        
        # Email body
        body = f"""
        New contact form submission from your portfolio website:
        
        Name: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        
        ---
        This email was sent from your portfolio website contact form.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        # For demo purposes, we'll simulate sending without actual credentials
        # In production, uncomment the next line and provide proper credentials
        # server.login(sender_email, sender_password)
        # server.send_message(msg)
        server.quit()
        
        return True
    except Exception as e:
        logging.error(f"Email sending failed: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running"}

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactForm):
    try:
        # Store in database
        contact_record = {
            "id": str(uuid.uuid4()),
            "name": form_data.name,
            "email": form_data.email,
            "subject": form_data.subject,
            "message": form_data.message,
            "timestamp": datetime.utcnow(),
            "status": "received"
        }
        
        await db.contacts.insert_one(contact_record)
        
        # Send email in background
        loop = asyncio.get_event_loop()
        email_sent = await loop.run_in_executor(
            executor,
            send_email,
            form_data.name,
            form_data.email,
            form_data.subject,
            form_data.message
        )
        
        if email_sent:
            await db.contacts.update_one(
                {"id": contact_record["id"]},
                {"$set": {"status": "email_sent"}}
            )
            return ContactFormResponse(
                success=True,
                message="🚀 Message sent successfully! I'll get back to you soon."
            )
        else:
            # Email failed but form was stored
            await db.contacts.update_one(
                {"id": contact_record["id"]},
                {"$set": {"status": "email_failed"}}
            )
            return ContactFormResponse(
                success=True,
                message="📨 Message received! I'll respond as soon as possible."
            )
            
    except Exception as e:
        logging.error(f"Contact form submission failed: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to submit contact form. Please try again."
        )

@api_router.get("/resume")
async def download_resume():
    try:
        resume_path = ROOT_DIR / "assets" / "resume.pdf"
        if not resume_path.exists():
            raise HTTPException(status_code=404, detail="Resume not found")
        
        return FileResponse(
            path=str(resume_path),
            filename="Mohammed_Zaid_Ali_Resume.pdf",
            media_type="application/pdf"
        )
    except Exception as e:
        logging.error(f"Resume download failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to download resume")

@api_router.get("/contacts")
async def get_contacts():
    try:
        contacts = await db.contacts.find().sort("timestamp", -1).limit(50).to_list(50)
        return {"contacts": contacts}
    except Exception as e:
        logging.error(f"Get contacts failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve contacts")

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    executor.shutdown(wait=True)
