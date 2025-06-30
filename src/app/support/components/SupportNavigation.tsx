import { Target, Settings, Smartphone } from 'lucide-react';

export default function SupportNavigation() {
  return (
    <>
      {/* Page Introduction */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Support Questions</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our most commonly asked support questions are listed below:
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Jump to Section</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#moisture-sensor"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-100 transition-all duration-200"
          >
            <Target size={20} className="text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Moisture Sensor</h4>
              <p className="text-sm text-gray-600">5 Questions</p>
            </div>
          </a>
          
          <a
            href="#drying-control"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-100 transition-all duration-200"
          >
            <Settings size={20} className="text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Drying Control</h4>
              <p className="text-sm text-gray-600">6 Questions</p>
            </div>
          </a>
          
          <a
            href="#remote-access"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-100 transition-all duration-200"
          >
            <Smartphone size={20} className="text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Remote Access</h4>
              <p className="text-sm text-gray-600">3 Questions</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}