'use client';

import { CheckCircle, Download, Smartphone, Monitor, Wifi, Globe, BarChart3, Shield, ExternalLink, Target, Zap, Bell } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import GlobalStatsSection from '@/components/GlobalStatsSection';
import Image from 'next/image';
import Link from 'next/link';
import DMobileInterface from './DMobileInterface';

export default function DMobilePage() {
  const heroStats = [
    { label: "Access Method", value: "Web Browser", icon: <Globe className="w-6 h-6 text-white" /> },
    { label: "Connection", value: "Internet", icon: <Wifi className="w-6 h-6 text-white" /> },
    { label: "Real-Time Data", value: "Live Updates", icon: <Zap className="w-6 h-6 text-white" /> },
    { label: "Compatibility", value: "All Devices", icon: <Smartphone className="w-6 h-6 text-white" /> }
  ];

  const monitoringFeatures = [
    {
      title: "Real-Time Monitoring",
      description: "Monitor inlet and outlet moistures, grain temperatures, drying air temperature, discharge rate, and moisture setpoint from anywhere with internet access.",
      icon: Monitor
    },
    {
      title: "Historical Data & Graphing",
      description: "Access comprehensive historical data with interactive graphs and download capability in spreadsheet format for detailed analysis and record keeping.",
      icon: BarChart3
    },
    {
      title: "Alarm Management",
      description: "Receive instant text alerts for system alarms and monitor alarm status remotely to ensure continuous operation and prevent issues.",
      icon: Bell
    },
    {
      title: "Remote Control",
      description: "Adjust discharge rates in Manual mode, change operational modes (Local, Manual, Auto), and modify moisture setpoints from your mobile device or computer.",
      icon: Target
    }
  ];

  const advantages = [
    {
      title: "No App Required",
      description: "Access DM Mobile through any web browser at my.dryermaster.com without downloading or installing dedicated applications.",
      icon: Globe
    },
    {
      title: "Universal Access",
      description: "Monitor your dryer from the combine, your home, office, or anywhere with internet connectivity for complete operational flexibility.",
      icon: Wifi
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard>
          <GlobalHeroCardBadge 
            icon={<Smartphone size={20} className="text-secondary-1" />}
          >
            REMOTE ACCESS
          </GlobalHeroCardBadge>
          
          <GlobalHeroCardTitle>
            DM Mobile Remote Access
          </GlobalHeroCardTitle>
          
          <GlobalHeroCardDescription>
            DM Mobile provides complete remote monitoring and control of your DM510 grain dryer system from anywhere with internet access. Monitor real-time data, receive alerts, and control your dryer using any web browser on your smartphone, tablet, or computer - no special app required.
          </GlobalHeroCardDescription>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://my.dryermaster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Try Demo Access
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Get Access
            </Link>
          </div>
        </GlobalHeroCard>
      </div>

      {/* Stats Section */}
      <GlobalStatsSection stats={heroStats} />

      {/* Product Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Remote Control
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  DM Mobile extends the power of your DM510 controller beyond the dryer site, giving you complete monitoring and control capabilities from anywhere with internet access.
                </p>
                <p>
                  Using any web browser, access real-time data, historical information, and control functions through an intuitive interface designed for smartphones, tablets, and computers.
                </p>
                <p>
                  The first year of DM Mobile access is included with your DM510 system, with annual subscriptions available for continued service.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                    <advantage.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{advantage.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 border-2 border-primary-300">
                <div className="aspect-square bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-secondary-700" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm text-gray-900">Browser Based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mobile Interface */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive DM Mobile Interface</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the DM Mobile interface with live data simulation. Scroll through the mobile interface to see real-time monitoring, alarms, charts, and control options.
          </p>
        </div>

        <div className="flex justify-center">
          <DMobileInterface />
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Remote Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DM Mobile provides complete remote access to all critical dryer monitoring and control functions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {monitoringFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 lg:p-12 border border-secondary-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Easy Setup & Access</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                DM Mobile requires a simple wired internet connection to your DM510 controller through a router or wireless access point. No complex setup or configuration required.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Simple Internet Connection</h4>
                    <p className="text-gray-600 text-sm">Connect via router or wireless access point for instant remote access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">First Year Included</h4>
                    <p className="text-gray-600 text-sm">DM Mobile access included with DM510 system purchase</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Demo Available</h4>
                    <p className="text-gray-600 text-sm">Try DM Mobile with username and password "demo" at my.dryermaster.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://my.dryermaster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <Globe className="w-5 h-5" />
                  Access Demo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm border border-white/40">
                <div className="aspect-square bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-xl flex items-center justify-center">
                  <Globe className="w-24 h-24 text-secondary-700" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                <Wifi className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DM Mobile?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the freedom and peace of mind that comes with complete remote monitoring and control of your grain drying operation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Anywhere Access</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor your dryer from the combine, your home, office, or anywhere with internet connectivity for complete operational flexibility.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Alerts</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive immediate text alerts for system alarms, ensuring you're always informed of your dryer's status and can respond quickly to any issues.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Access comprehensive historical data with interactive graphs and downloadable spreadsheets for detailed analysis and record keeping.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Complete Remote Control?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Experience the convenience and peace of mind that DM Mobile provides. Contact our team to add remote access to your DM510 system or try our demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Get DM Mobile Access
            </Link>
            <a
              href="https://my.dryermaster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Try Demo Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
