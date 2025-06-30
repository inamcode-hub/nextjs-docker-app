'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  inquiryType: string;
}

interface FormStatus {
  type: 'success' | 'error' | 'loading' | null;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.' 
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          inquiryType: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status Message */}
      {status.type && (
        <div className={`p-4 rounded-xl border flex items-center gap-3 ${
          status.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : status.type === 'error'
            ? 'bg-red-50 border-red-200 text-red-800'
            : 'bg-blue-50 border-blue-200 text-blue-800'
        }`}>
          {status.type === 'success' && <CheckCircle size={20} />}
          {status.type === 'error' && <AlertCircle size={20} />}
          {status.type === 'loading' && <Loader2 size={20} className="animate-spin" />}
          <span className="text-sm font-medium">{status.message}</span>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="your.email@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
          Company / Organization
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Your company name"
        />
      </div>

      {/* Inquiry Type and Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select inquiry type</option>
            <option value="sales">Sales Inquiry</option>
            <option value="technical-support">Technical Support</option>
            <option value="dealer-application">Dealer Application</option>
            <option value="product-information">Product Information</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="careers">Careers & Employment</option>
            <option value="general">General Question</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Brief subject of your inquiry"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-vertical"
          placeholder="Please provide details about your inquiry, including any specific requirements or questions you may have..."
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:from-primary-dark hover:to-primary hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status.type === 'loading' ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        <div className="text-sm text-gray-500 flex items-center">
          <span>* Required fields</span>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;