#!/usr/bin/env python3
"""
Backend API Testing Suite for Mohammed Zaid Ali's Cyberpunk Portfolio Website
Tests all backend functionality including contact form, resume download, and database operations.
"""

import requests
import json
import os
from datetime import datetime
import time

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("❌ Could not get backend URL from frontend/.env")
    exit(1)

API_URL = f"{BASE_URL}/api"
print(f"🔗 Testing backend at: {API_URL}")

class BackendTester:
    def __init__(self):
        self.passed_tests = 0
        self.failed_tests = 0
        self.test_results = []
        
    def log_result(self, test_name, passed, message=""):
        status = "✅ PASS" if passed else "❌ FAIL"
        result = f"{status}: {test_name}"
        if message:
            result += f" - {message}"
        print(result)
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'message': message,
            'timestamp': datetime.now().isoformat()
        })
        
        if passed:
            self.passed_tests += 1
        else:
            self.failed_tests += 1
    
    def test_api_health_check(self):
        """Test GET /api/ endpoint for basic API health"""
        print("\n🔍 Testing API Health Check...")
        try:
            response = requests.get(f"{API_URL}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "Portfolio API is running" in data["message"]:
                    self.log_result("API Health Check", True, f"Status: {response.status_code}, Message: {data['message']}")
                else:
                    self.log_result("API Health Check", False, f"Unexpected response format: {data}")
            else:
                self.log_result("API Health Check", False, f"Status code: {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("API Health Check", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("API Health Check", False, f"Unexpected error: {str(e)}")
    
    def test_contact_form_valid_data(self):
        """Test POST /api/contact with valid data"""
        print("\n📧 Testing Contact Form with Valid Data...")
        
        valid_data = {
            "name": "Mohammed Zaid Ali",
            "email": "zaid.test@example.com",
            "subject": "Portfolio Inquiry - Backend Testing",
            "message": "This is a test message from the backend testing suite. Testing the contact form functionality for the cyberpunk portfolio website."
        }
        
        try:
            response = requests.post(
                f"{API_URL}/contact",
                json=valid_data,
                headers={"Content-Type": "application/json"},
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "message" in data:
                    self.log_result("Contact Form - Valid Data", True, f"Success: {data['message']}")
                else:
                    self.log_result("Contact Form - Valid Data", False, f"Unexpected response format: {data}")
            else:
                self.log_result("Contact Form - Valid Data", False, f"Status code: {response.status_code}, Response: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form - Valid Data", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Contact Form - Valid Data", False, f"Unexpected error: {str(e)}")
    
    def test_contact_form_invalid_email(self):
        """Test POST /api/contact with invalid email format"""
        print("\n📧 Testing Contact Form with Invalid Email...")
        
        invalid_data = {
            "name": "Test User",
            "email": "invalid-email-format",
            "subject": "Test Subject",
            "message": "Test message with invalid email"
        }
        
        try:
            response = requests.post(
                f"{API_URL}/contact",
                json=invalid_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_result("Contact Form - Invalid Email", True, "Correctly rejected invalid email format")
            else:
                self.log_result("Contact Form - Invalid Email", False, f"Expected 422, got {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form - Invalid Email", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Contact Form - Invalid Email", False, f"Unexpected error: {str(e)}")
    
    def test_contact_form_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        print("\n📧 Testing Contact Form with Missing Fields...")
        
        incomplete_data = {
            "name": "Test User",
            "email": "test@example.com"
            # Missing subject and message
        }
        
        try:
            response = requests.post(
                f"{API_URL}/contact",
                json=incomplete_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_result("Contact Form - Missing Fields", True, "Correctly rejected incomplete data")
            else:
                self.log_result("Contact Form - Missing Fields", False, f"Expected 422, got {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form - Missing Fields", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Contact Form - Missing Fields", False, f"Unexpected error: {str(e)}")
    
    def test_contact_form_long_inputs(self):
        """Test POST /api/contact with overly long inputs"""
        print("\n📧 Testing Contact Form with Long Inputs...")
        
        long_data = {
            "name": "A" * 150,  # Exceeds 100 char limit
            "email": "test@example.com",
            "subject": "B" * 250,  # Exceeds 200 char limit
            "message": "C" * 2500  # Exceeds 2000 char limit
        }
        
        try:
            response = requests.post(
                f"{API_URL}/contact",
                json=long_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_result("Contact Form - Long Inputs", True, "Correctly rejected overly long inputs")
            else:
                self.log_result("Contact Form - Long Inputs", False, f"Expected 422, got {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form - Long Inputs", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Contact Form - Long Inputs", False, f"Unexpected error: {str(e)}")
    
    def test_resume_download(self):
        """Test GET /api/resume endpoint"""
        print("\n📄 Testing Resume Download...")
        
        try:
            response = requests.get(f"{API_URL}/resume", timeout=10)
            
            if response.status_code == 200:
                # Check content type
                content_type = response.headers.get('content-type', '')
                if 'application/pdf' in content_type:
                    # Check if we got actual PDF content
                    if response.content.startswith(b'%PDF'):
                        self.log_result("Resume Download", True, f"PDF downloaded successfully, size: {len(response.content)} bytes")
                    else:
                        self.log_result("Resume Download", False, "Response is not a valid PDF file")
                else:
                    self.log_result("Resume Download", False, f"Wrong content type: {content_type}")
            elif response.status_code == 404:
                self.log_result("Resume Download", False, "Resume file not found")
            else:
                self.log_result("Resume Download", False, f"Status code: {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Resume Download", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Resume Download", False, f"Unexpected error: {str(e)}")
    
    def test_contacts_retrieval(self):
        """Test GET /api/contacts endpoint"""
        print("\n📋 Testing Contacts Retrieval...")
        
        try:
            response = requests.get(f"{API_URL}/contacts", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "contacts" in data and isinstance(data["contacts"], list):
                    self.log_result("Contacts Retrieval", True, f"Retrieved {len(data['contacts'])} contacts")
                else:
                    self.log_result("Contacts Retrieval", False, f"Unexpected response format: {data}")
            else:
                self.log_result("Contacts Retrieval", False, f"Status code: {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contacts Retrieval", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Contacts Retrieval", False, f"Unexpected error: {str(e)}")
    
    def test_status_endpoints(self):
        """Test POST /api/status and GET /api/status endpoints"""
        print("\n🔄 Testing Status Endpoints...")
        
        # Test POST /api/status
        status_data = {
            "client_name": "Backend Test Suite"
        }
        
        try:
            # Create status check
            post_response = requests.post(
                f"{API_URL}/status",
                json=status_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if post_response.status_code == 200:
                post_data = post_response.json()
                if "id" in post_data and "client_name" in post_data:
                    self.log_result("Status Creation", True, f"Created status with ID: {post_data['id']}")
                    
                    # Test GET /api/status
                    get_response = requests.get(f"{API_URL}/status", timeout=10)
                    
                    if get_response.status_code == 200:
                        get_data = get_response.json()
                        if isinstance(get_data, list):
                            self.log_result("Status Retrieval", True, f"Retrieved {len(get_data)} status checks")
                        else:
                            self.log_result("Status Retrieval", False, f"Expected list, got: {type(get_data)}")
                    else:
                        self.log_result("Status Retrieval", False, f"Status code: {get_response.status_code}")
                else:
                    self.log_result("Status Creation", False, f"Unexpected response format: {post_data}")
            else:
                self.log_result("Status Creation", False, f"Status code: {post_response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Status Endpoints", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Status Endpoints", False, f"Unexpected error: {str(e)}")
    
    def test_cors_headers(self):
        """Test CORS headers are properly set"""
        print("\n🌐 Testing CORS Headers...")
        
        try:
            response = requests.options(f"{API_URL}/", timeout=10)
            
            cors_headers = {
                'access-control-allow-origin': response.headers.get('access-control-allow-origin'),
                'access-control-allow-methods': response.headers.get('access-control-allow-methods'),
                'access-control-allow-headers': response.headers.get('access-control-allow-headers')
            }
            
            if cors_headers['access-control-allow-origin']:
                self.log_result("CORS Headers", True, f"CORS properly configured: {cors_headers}")
            else:
                self.log_result("CORS Headers", False, "CORS headers not found")
                
        except requests.exceptions.RequestException as e:
            self.log_result("CORS Headers", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("CORS Headers", False, f"Unexpected error: {str(e)}")
    
    def test_malformed_requests(self):
        """Test API endpoints with malformed requests"""
        print("\n🚫 Testing Malformed Requests...")
        
        # Test with invalid JSON
        try:
            response = requests.post(
                f"{API_URL}/contact",
                data="invalid json data",
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code in [400, 422]:
                self.log_result("Malformed Request Handling", True, f"Correctly handled malformed JSON (status: {response.status_code})")
            else:
                self.log_result("Malformed Request Handling", False, f"Unexpected status code: {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Malformed Request Handling", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_result("Malformed Request Handling", False, f"Unexpected error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend API Testing Suite for Mohammed Zaid Ali's Portfolio")
        print("=" * 70)
        
        # Run all tests
        self.test_api_health_check()
        self.test_contact_form_valid_data()
        self.test_contact_form_invalid_email()
        self.test_contact_form_missing_fields()
        self.test_contact_form_long_inputs()
        self.test_resume_download()
        self.test_contacts_retrieval()
        self.test_status_endpoints()
        self.test_cors_headers()
        self.test_malformed_requests()
        
        # Print summary
        print("\n" + "=" * 70)
        print("🏁 TESTING SUMMARY")
        print("=" * 70)
        print(f"✅ Passed: {self.passed_tests}")
        print(f"❌ Failed: {self.failed_tests}")
        print(f"📊 Total: {self.passed_tests + self.failed_tests}")
        
        if self.failed_tests == 0:
            print("\n🎉 ALL TESTS PASSED! Backend is working correctly.")
        else:
            print(f"\n⚠️  {self.failed_tests} test(s) failed. Check the details above.")
        
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Save results to file
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            'timestamp': datetime.now().isoformat(),
            'backend_url': API_URL,
            'passed_tests': tester.passed_tests,
            'failed_tests': tester.failed_tests,
            'results': tester.test_results
        }, f, indent=2)
    
    print(f"\n📝 Detailed results saved to: /app/backend_test_results.json")
    
    # Exit with appropriate code
    exit(0 if success else 1)