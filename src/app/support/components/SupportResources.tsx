import { Settings, Monitor, MessageSquare } from 'lucide-react';

export default function SupportResources() {
  return (
    <section className="bg-gray-50 rounded-xl border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/support/manuals"
          className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
        >
          <Settings size={24} className="text-primary mb-3" />
          <h3 className="font-semibold text-gray-800 mb-2">Product Manuals</h3>
          <p className="text-gray-600 text-sm">Download comprehensive manuals and documentation</p>
        </a>
        
        <a
          href="/support/videos"
          className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
        >
          <Monitor size={24} className="text-primary mb-3" />
          <h3 className="font-semibold text-gray-800 mb-2">Training Videos</h3>
          <p className="text-gray-600 text-sm">Watch step-by-step installation and operation guides</p>
        </a>
        
        <a
          href="/contact"
          className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
        >
          <MessageSquare size={24} className="text-primary mb-3" />
          <h3 className="font-semibold text-gray-800 mb-2">Contact Support</h3>
          <p className="text-gray-600 text-sm">Get direct assistance from our technical team</p>
        </a>
      </div>
    </section>
  );
}