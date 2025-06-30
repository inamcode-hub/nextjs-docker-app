import { Settings } from 'lucide-react';

export default function SupportHero() {
  return (
    <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 mb-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto overflow-hidden">
      <div className="relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
          <Settings size={20} className="text-white" />
          <span className="text-sm font-semibold">Support Centre</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Technical <span className="text-green-200">Support</span>
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Get comprehensive help with installation, troubleshooting, and technical questions for all DryerMaster products.
        </p>
      </div>
    </div>
  );
}