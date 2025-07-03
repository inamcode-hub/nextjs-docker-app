'use client';

import { CheckCircle, Download, Activity, Smartphone, Monitor, Gauge, Shield, Wrench, ExternalLink, Target, BarChart3, Zap, Settings, Wifi, Database } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import GlobalStatsSection from '@/components/GlobalStatsSection';
import Image from 'next/image';
import Link from 'next/link';

export default function MoistureMonitorProPage() {
  const heroStats = [
    { label: "Display", value: "Color Touch Screen", icon: <Monitor className="w-6 h-6 text-white" /> },
    { label: "Data Storage", value: "Micro-SD Card", icon: <Database className="w-6 h-6 text-white" /> },
    { label: "Remote Access", value: "Built-in Web Server", icon: <Wifi className="w-6 h-6 text-white" /> },
    { label: "Configuration", value: "1 or 2 Sensors", icon: <Gauge className="w-6 h-6 text-white" /> }
  ];

  const keyFeatures = [
    {
      title: "Color Touch Screen Display",
      description: "Easy-to-read color display provides real-time moisture and temperature readings with intuitive touch controls for all settings and calibration functions.",
      icon: Monitor
    },
    {
      title: "Built-in Web Server",
      description: "Access real-time data and historical information remotely using any smartphone, tablet, or computer through the built-in web server - no special app required.",
      icon: Wifi
    },
    {
      title: "Data Logging & Export",
      description: "Comprehensive data storage on micro-SD card with easy USB download capability. Export historical data in .csv format for detailed analysis and record keeping.",
      icon: Database
    },
    {
      title: "Flexible Sensor Configuration",
      description: "Compatible with one or two moisture sensors depending on your monitoring needs. Easy sensor calibration with optional illuminated calibration push button.",
      icon: Settings
    }
  ];

  const systemComponents = [
    {
      name: "Stainless Steel Moisture Sensor",
      description: "High-precision fin-type capacitance sensor for accurate moisture measurement",
      icon: Gauge,
      specs: ["Food grade stainless steel construction", "Temperature compensation", "Easy calibration", "Long-term stability"]
    },
    {
      name: "Color Touch Screen Display", 
      description: "User-friendly interface for real-time monitoring and system control",
      icon: Monitor,
      specs: ["Intuitive touch controls", "Real-time data display", "Easy configuration", "Status indicators"]
    },
    {
      name: "Data Storage System",
      description: "Comprehensive data logging with multiple export options",
      icon: Database,
      specs: ["Micro-SD card storage", "USB port for downloads", "CSV format export", "Historical data tracking"]
    },
    {
      name: "Optional Equipment",
      description: "Enhance your system with additional components",
      icon: Wrench,
      specs: ["Rotary feed chutes (bypass or inline)", "Illuminated calibration button", "Remote alarm outputs", "Process event outputs"]
    }
  ];

  const advantages = [
    {
      title: "Cost-Effective Solution",
      description: "Complete moisture monitoring system without the need for expensive PLC equipment. Simple installation and operation reduces overall system costs.",
      icon: Target
    },
    {
      title: "Remote Access Ready",
      description: "Built-in web server provides instant access to real-time and historical data from any smartphone or computer with network connectivity.",
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard>
          <GlobalHeroCardBadge 
            icon={<Activity size={20} className="text-secondary-1" />}
          >
            MOISTURE MONITORING
          </GlobalHeroCardBadge>
          
          <GlobalHeroCardTitle>
            Moisture Monitor Pro
          </GlobalHeroCardTitle>
          
          <GlobalHeroCardDescription>
            The Moisture Monitor Pro (MMP) is a comprehensive moisture monitoring solution featuring a color touch screen display, built-in web server for smartphone access, and flexible sensor configuration. Perfect for applications requiring accurate moisture monitoring with data logging capabilities and remote access functionality.
          </GlobalHeroCardDescription>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/manuals/mmp/product-manual.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Manual
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Request Quote
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
                Complete Moisture Monitoring Solution
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Moisture Monitor Pro provides real-time moisture and temperature monitoring with an intuitive color touch screen display and built-in web server for remote access.
                </p>
                <p>
                  Designed for applications where accurate moisture monitoring is critical, the MMP offers comprehensive data logging capabilities with easy export functionality and flexible sensor configuration options.
                </p>
                <p>
                  With no PLC required, this cost-effective solution provides professional-grade moisture monitoring with the convenience of smartphone access and historical data tracking.
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
                <Image
                  src="/products/mmp/moisture monitor pro mmp.jpg"
                  alt="Moisture Monitor Pro System"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm text-gray-900">Touch Screen Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">System Components</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Moisture Monitor Pro includes all necessary components for comprehensive moisture monitoring with optional accessories for enhanced functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {systemComponents.map((component, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <component.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{component.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{component.description}</p>
                  <div className="space-y-2">
                    {component.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 lg:p-12 border border-secondary-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm border border-white/40">
                <Image
                  src="/products/mmp/moisture Monitor Pro how it work.png"
                  alt="How Moisture Monitor Pro Works"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                <Activity className="w-6 h-6 text-secondary" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                The Moisture Monitor Pro uses advanced capacitance technology to provide accurate, real-time moisture and temperature measurements with comprehensive data logging and remote access capabilities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-Time Monitoring</h4>
                    <p className="text-gray-600 text-sm">Continuous moisture and temperature measurement with instant display updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Data Logging</h4>
                    <p className="text-gray-600 text-sm">Automatic storage of historical data on micro-SD card with CSV export capability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Remote Access</h4>
                    <p className="text-gray-600 text-sm">Built-in web server enables smartphone and computer access from anywhere</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/products/moisture-sensors"
                  className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <Gauge className="w-5 h-5" />
                  View Moisture Sensors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features & Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced moisture monitoring technology with user-friendly operation and comprehensive data management capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {keyFeatures.map((feature, index) => (
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

      {/* Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Moisture Monitor Pro is ideal for various applications requiring accurate moisture monitoring with data logging and remote access capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Control</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor product moisture levels in manufacturing processes to ensure consistent quality and meet specifications.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Process Monitoring</h3>
            <p className="text-gray-600 leading-relaxed">
              Real-time monitoring of moisture levels in various processing applications with comprehensive data logging for analysis.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Monitoring</h3>
            <p className="text-gray-600 leading-relaxed">
              Applications requiring remote access to moisture data and historical information via smartphone or computer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Moisture Monitoring?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact our team to learn how the Moisture Monitor Pro can provide accurate moisture monitoring with the convenience of remote access and comprehensive data logging for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Request Quote
            </Link>
            <a
              href="/manuals/mmp/product-manual.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Manual
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
