# Contact Form Implementation Documentation

## Overview
This document explains how the DryerMaster contact form system works and what needs to be implemented for full email functionality.

## Current Implementation

### Files Created/Modified
- `/src/components/ContactForm.tsx` - React contact form component
- `/src/app/contact/page.tsx` - Contact page with form and company information
- `/src/app/api/contact/route.ts` - API endpoint for form handling

### Form Fields
The contact form collects the following information:

**Required Fields:**
- First Name
- Last Name
- Email Address
- Inquiry Type (dropdown)
- Subject
- Message

**Optional Fields:**
- Phone Number
- Company/Organization

### Inquiry Types Available
1. Sales Inquiry
2. Technical Support
3. Dealer Application
4. Product Information
5. Partnership Opportunity
6. Careers & Employment
7. General Question

## Current Functionality

### What Works Now
1. **Form Validation**: Client-side and server-side validation
2. **Data Collection**: All form data is collected and validated
3. **API Endpoint**: `/api/contact` receives and processes form submissions
4. **Error Handling**: Proper error states and user feedback
5. **Success States**: Form shows success message after submission
6. **Form Reset**: Clears form after successful submission
7. **Console Logging**: Form data is logged to server console for testing

### What Needs Implementation
The following features need to be added for full functionality:

## To-Do: Email Integration

### 1. Email Service Setup
Choose and configure an email service provider:

**Option A: Nodemailer with SMTP**
```bash
npm install nodemailer @types/nodemailer
```

**Option B: Email Service APIs**
- SendGrid
- Mailgun
- AWS SES
- Resend

### 2. Environment Variables
Add to `.env.local`:
```env
# Email Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@dryermaster.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@dryermaster.com
TO_EMAIL=info@dryermaster.com

# Or for service APIs
SENDGRID_API_KEY=your-api-key
```

### 3. Email Templates
Create email templates for:

**A. Internal Notification Email (to DryerMaster)**
- Subject: "New Contact Form Submission - [Inquiry Type]"
- Contains all form data
- Formatted for easy reading
- Includes inquiry type for routing

**B. Auto-Reply Email (to Customer)**
- Subject: "Thank you for contacting DryerMaster"
- Confirmation of receipt
- Expected response time
- Contact information
- Professional signature

### 4. Department Routing
Based on inquiry type, route emails to appropriate departments:

```javascript
const emailRouting = {
  'sales': 'sales@dryermaster.com',
  'technical-support': 'support@dryermaster.com',
  'dealer-application': 'dealers@dryermaster.com',
  'product-information': 'info@dryermaster.com',
  'partnership': 'partnerships@dryermaster.com',
  'careers': 'hr@dryermaster.com',
  'general': 'info@dryermaster.com'
};
```

### 5. Database Storage (Optional)
Consider storing form submissions in a database:
- Contact history
- Follow-up tracking
- Analytics
- Lead management

## Implementation Steps

### Phase 1: Basic Email Functionality
1. Install email service dependencies
2. Configure environment variables
3. Update `/src/app/api/contact/route.ts` with email sending
4. Create basic email templates
5. Test email delivery

### Phase 2: Enhanced Features
1. Implement department routing
2. Add auto-reply emails
3. Create professional email templates
4. Add email logging/tracking

### Phase 3: Advanced Features (Optional)
1. Database integration
2. Admin dashboard for viewing submissions
3. Email analytics
4. CRM integration

## Code Structure

### Current API Endpoint Structure
```typescript
// /src/app/api/contact/route.ts
export async function POST(request: NextRequest) {
  // 1. Parse form data
  // 2. Validate required fields
  // 3. Validate email format
  // 4. TODO: Send emails
  // 5. TODO: Store in database (optional)
  // 6. Return response
}
```

### Recommended Email Implementation
```typescript
// Add to /src/app/api/contact/route.ts
import nodemailer from 'nodemailer';

// Configure transporter
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send internal notification
await transporter.sendMail({
  from: process.env.FROM_EMAIL,
  to: getRoutingEmail(formData.inquiryType),
  subject: `New Contact Form - ${formData.inquiryType}`,
  html: generateInternalEmailTemplate(formData),
});

// Send auto-reply
await transporter.sendMail({
  from: process.env.FROM_EMAIL,
  to: formData.email,
  subject: 'Thank you for contacting DryerMaster',
  html: generateAutoReplyTemplate(formData),
});
```

## Testing

### Current Testing
- Form validation works
- API endpoint receives data
- Success/error states display correctly
- Console logging shows form submissions

### Email Testing Checklist
- [ ] Emails deliver to correct addresses
- [ ] Auto-reply emails work
- [ ] Email formatting is professional
- [ ] All inquiry types route correctly
- [ ] Error handling for email failures
- [ ] Spam filter testing

## Security Considerations

### Current Security
- Input validation on client and server
- Email format validation
- Required field validation

### Additional Security Needed
- Rate limiting for form submissions
- CAPTCHA integration (if spam becomes an issue)
- Input sanitization for email content
- Environment variable security

## DryerMaster Contact Information
The form uses the real contact information:

- **Company**: DryerMaster Technologies Inc.
- **Address**: 115 Ardelt Ave., Building #2, Kitchener, ON, Canada N2C 2E1
- **Phone**: 1.519.725.4700
- **Toll Free**: 1.800.265.2757
- **Email**: info@dryermaster.com
- **Business Hours**: 8:00 AM - 5:00 PM EST
- **Phone Support**: 8:00 AM - 10:00 PM EST

## Notes for Implementation

1. **Priority**: Email functionality is the most important next step
2. **Testing**: Use a staging environment for email testing
3. **Backup**: Consider multiple email delivery methods
4. **Monitoring**: Add logging for email delivery success/failure
5. **Templates**: Keep email templates professional and on-brand

## Contact for Development
When ready to implement email functionality, refer to this documentation and update the API endpoint accordingly. The front-end form is complete and ready to work with the enhanced backend.