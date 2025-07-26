# API Contracts for Mohammed Zaid Ali's Portfolio

## Frontend-Backend Integration Protocol

### 1. Contact Form API
**Endpoint:** `POST /api/contact`
**Purpose:** Send contact form data to zaid789209@gmail.com

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message"
}
```

### 2. Resume Download API
**Endpoint:** `GET /api/resume`
**Purpose:** Serve the resume PDF file

**Response:** PDF file download

### 3. Current Mock Data to Replace
**File:** `/app/frontend/src/mock/mockData.js`
- `mockFormSubmission.submitContactForm()` → Replace with actual API call
- `mockFormSubmission.downloadResume()` → Replace with actual download

### 4. Frontend Integration Changes
**Files to Update:**
- `/app/frontend/src/components/Contact.jsx` - Replace mock submission with real API
- `/app/frontend/src/components/Hero.jsx` - Replace mock resume download with real API
- `/app/frontend/src/components/Navbar.jsx` - Replace mock resume download with real API

### 5. Backend Implementation
**Email Service:** Using nodemailer with Gmail SMTP
**File Upload:** Store resume.pdf in /app/backend/assets/
**Validation:** Email format, required fields, rate limiting

### 6. Environment Variables
```
GMAIL_USER=zaid789209@gmail.com
GMAIL_APP_PASSWORD=<to_be_provided>
```

### 7. Mobile Responsiveness
**Breakpoints:**
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

**Key Components to Optimize:**
- Hero section typing animation
- About section layout
- Skills grid responsiveness
- Projects cards layout
- Contact form layout
- Navigation menu mobile behavior

### 8. Error Handling
- Network errors
- Server errors
- Validation errors
- File not found errors

### 9. Success Flows
- Form submission success with toast notification
- Resume download success
- Mobile navigation success
- All animations working smoothly on mobile

### 10. Testing Requirements
- Contact form submission
- Resume download
- Mobile responsiveness across devices
- Cross-browser compatibility
- Email delivery confirmation