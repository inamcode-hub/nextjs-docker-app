import RegistrationForm from '@/components/RegistrationForm';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { Shield, Award } from 'lucide-react';

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard className="mb-12">
          <GlobalHeroCardBadge icon={<Shield size={16} />}>
            Product Registration
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle>
            Register Your Dryer Master Product
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            Register your equipment for extended warranty coverage, priority support, and important product updates.
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Product Registration Form</h2>
                <p className="text-white">Complete all required fields to register your product</p>
              </div>
              <div className="p-6 lg:p-8">
                <RegistrationForm />
              </div>
            </div>
          </div>
          {/* Benefits Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Warranty</h3>
              <p className="text-sm text-gray-600">Extend your product warranty from 1 to 2 years at no additional cost.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-sm text-gray-600">Get priority access to technical support and faster resolution times.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Updates</h3>
              <p className="text-sm text-gray-600">Receive important safety notices, firmware updates, and product recalls.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}