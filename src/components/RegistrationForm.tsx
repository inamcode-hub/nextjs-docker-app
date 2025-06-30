'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, MapPin, Building, Calendar, Hash } from 'lucide-react';

interface RegistrationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  
  // Product Information
  productModel: string;
  serialNumber: string;
  purchaseDate: string;
  dealerName: string;
  
  // Installation Details
  installationDate: string;
  farmLocation: string;
  primaryCrop: string;
  
  // Shipping Information
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  sameAsBilling: boolean;
  
  // Billing Information
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  federalId: string;
  
  // Preferences
  warrantyExtension: boolean;
  communicationPreferences: string[];
  marketingOptIn: boolean;
}

interface FormStatus {
  type: 'success' | 'error' | 'loading' | null;
  message: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    productModel: '',
    serialNumber: '',
    purchaseDate: '',
    dealerName: '',
    installationDate: '',
    farmLocation: '',
    primaryCrop: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    sameAsBilling: false,
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    federalId: '',
    warrantyExtension: true,
    communicationPreferences: [],
    marketingOptIn: false
  });

  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxArrayChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      communicationPreferences: checked
        ? [...prev.communicationPreferences, value]
        : prev.communicationPreferences.filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Registering your product...' });

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your product has been registered successfully. You will receive a confirmation email shortly.' 
        });
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          productModel: '',
          serialNumber: '',
          purchaseDate: '',
          dealerName: '',
          installationDate: '',
          farmLocation: '',
          primaryCrop: '',
          shippingAddress: '',
          shippingCity: '',
          shippingState: '',
          shippingZip: '',
          sameAsBilling: false,
          billingAddress: '',
          billingCity: '',
          billingState: '',
          billingZip: '',
          federalId: '',
          warrantyExtension: true,
          communicationPreferences: [],
          marketingOptIn: false
        });
      } else {
        throw new Error('Failed to register product');
      }
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error registering your product. Please try again or contact us directly.' 
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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

      {/* Personal Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">1</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
        </div>
        
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

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company / Farm Name *
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Your company or farm name"
            />
          </div>
        </div>
      </div>

      {/* Product Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">2</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Product Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="productModel" className="block text-sm font-semibold text-gray-700 mb-2">
              Product Model *
            </label>
            <select
              id="productModel"
              name="productModel"
              value={formData.productModel}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select your product</option>
              <option value="DM510">DM510 Controller</option>
              <option value="DM100">DM100 Controller</option>
              <option value="moisture-sensors">Moisture Sensors</option>
              <option value="dm-mobile">DM Mobile App</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div>
            <label htmlFor="serialNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              Serial Number *
            </label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                id="serialNumber"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Enter serial number"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="purchaseDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Purchase Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="date"
                id="purchaseDate"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div>
            <label htmlFor="dealerName" className="block text-sm font-semibold text-gray-700 mb-2">
              Dealer Name
            </label>
            <input
              type="text"
              id="dealerName"
              name="dealerName"
              value={formData.dealerName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Where did you purchase this product?"
            />
          </div>
        </div>
      </div>

      {/* Installation Details Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">3</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Installation Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="installationDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Installation Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="date"
                id="installationDate"
                name="installationDate"
                value={formData.installationDate}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div>
            <label htmlFor="primaryCrop" className="block text-sm font-semibold text-gray-700 mb-2">
              Primary Crop
            </label>
            <select
              id="primaryCrop"
              name="primaryCrop"
              value={formData.primaryCrop}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select primary crop</option>
              <option value="corn">Corn</option>
              <option value="soybeans">Soybeans</option>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="cotton">Cotton</option>
              <option value="canola">Canola</option>
              <option value="sunflower">Sunflower</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="farmLocation" className="block text-sm font-semibold text-gray-700 mb-2">
            Farm Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              id="farmLocation"
              name="farmLocation"
              value={formData.farmLocation}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="City, State"
            />
          </div>
        </div>
      </div>

      {/* Billing Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">4</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Billing Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="billingAddress" className="block text-sm font-semibold text-gray-700 mb-2">
              Billing Address *
            </label>
            <input
              type="text"
              id="billingAddress"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Street address"
            />
          </div>
          <div>
            <label htmlFor="billingCity" className="block text-sm font-semibold text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              id="billingCity"
              name="billingCity"
              value={formData.billingCity}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="City"
            />
          </div>
          <div>
            <label htmlFor="billingState" className="block text-sm font-semibold text-gray-700 mb-2">
              State *
            </label>
            <input
              type="text"
              id="billingState"
              name="billingState"
              value={formData.billingState}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="State"
            />
          </div>
          <div>
            <label htmlFor="billingZip" className="block text-sm font-semibold text-gray-700 mb-2">
              ZIP Code *
            </label>
            <input
              type="text"
              id="billingZip"
              name="billingZip"
              value={formData.billingZip}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="ZIP Code"
            />
          </div>
          <div>
            <label htmlFor="federalId" className="block text-sm font-semibold text-gray-700 mb-2">
              Federal ID (US Only)
            </label>
            <input
              type="text"
              id="federalId"
              name="federalId"
              value={formData.federalId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Federal Tax ID"
            />
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-dark to-secondary-dark rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">5</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
            <input
              type="checkbox"
              id="warrantyExtension"
              name="warrantyExtension"
              checked={formData.warrantyExtension}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <div>
              <label htmlFor="warrantyExtension" className="text-sm font-semibold text-green-800">
                Extend Warranty to 2 Years (Recommended)
              </label>
              <p className="text-xs text-green-700 mt-1">
                Extend your product warranty from 1 to 2 years at no additional cost. This includes parts and labor coverage.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Communication Preferences
            </label>
            <div className="space-y-2">
              {[
                { value: 'email', label: 'Email Updates' },
                { value: 'sms', label: 'SMS Notifications' },
                { value: 'phone', label: 'Phone Calls' },
                { value: 'mail', label: 'Direct Mail' }
              ].map((option) => (
                <div key={option.value} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`comm-${option.value}`}
                    checked={formData.communicationPreferences.includes(option.value)}
                    onChange={(e) => handleCheckboxArrayChange(option.value, e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor={`comm-${option.value}`} className="text-sm text-gray-700">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="marketingOptIn"
              name="marketingOptIn"
              checked={formData.marketingOptIn}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="marketingOptIn" className="text-sm text-gray-700">
              I would like to receive marketing communications about new products, promotions, and industry insights
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
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
          {status.type === 'loading' ? 'Registering...' : 'Register Product'}
        </button>
        <div className="text-sm text-gray-500 flex items-center">
          <span>* Required fields</span>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;