import { Phone, Mail } from 'lucide-react';

export default function SupportContact() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Technical Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <Phone size={32} className="mx-auto text-primary mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">North America (Toll Free)</h3>
          <a href="tel:1-888-318-0009" className="text-xl font-bold text-primary hover:text-primary-dark">
            1-888-318-0009
          </a>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <Phone size={32} className="mx-auto text-primary mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">Other Locations</h3>
          <a href="tel:519-725-4700" className="text-xl font-bold text-primary hover:text-primary-dark">
            519-725-4700
          </a>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <Mail size={32} className="mx-auto text-primary mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
          <a href="mailto:info@dryermaster.com" className="text-lg font-bold text-primary hover:text-primary-dark">
            info@dryermaster.com
          </a>
        </div>
      </div>
    </div>
  );
}