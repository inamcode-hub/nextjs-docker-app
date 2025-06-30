import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message || !formData.inquiryType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // For now, we'll just log the form data
    // Later you can add email sending functionality here
    console.log('Contact form submission:', {
      ...formData,
      submittedAt: new Date().toISOString()
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send email to the appropriate department
    // 3. Send confirmation email to user
    
    // For now, return success
    return NextResponse.json(
      { 
        message: 'Form submitted successfully',
        data: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          inquiryType: formData.inquiryType
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}