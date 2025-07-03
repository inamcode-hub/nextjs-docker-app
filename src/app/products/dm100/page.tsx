'use client';

import { CheckCircle, Download, Activity, Smartphone, Monitor, Gauge, Shield, Wrench, ExternalLink, Target, BarChart3, Zap, Settings, Wifi, Database, Clock } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import GlobalStatsSection from '@/components/GlobalStatsSection';
import Image from 'next/image';
import Link from 'next/link';

export default function DM100Page() {
  const heroStats = [
    { label: "Display", value: "Color Touch Screen", icon: <Monitor className="w-6 h-6 text-white" /> },
    { label: "Control Type", value: "Basic Automatic", icon: <Settings className="w-6 h-6 text-white" /> },
    { label: "Data Storage", value: "Micro-SD Card", icon: <Database className="w-6 h-6 text-white" /> },
    { label: "Remote Access", value: "Built-in Web Server", icon: <Wifi className="w-6 h-6 text-white" /> }
  ];

  const keyFeatures = [
    {
      title: "Real-Time Moisture Monitoring",
      description: "Continuous monitoring of grain moisture at the dryer exit with stainless steel fin-type sensor providing accurate, real-time measurements for optimal drying control.",
      icon: Gauge
    },
    {
      title: "Basic Automatic Control",
      description: "State logic machine with configurable triggers for automatic moisture control through speed switching and discharge rate adjustments based on operator-defined targets.",
      icon: Settings
    },
    {
      title: "Color Touch Screen Interface",
      description: "User-friendly color display panel with intuitive touch controls for easy operation, data viewing, and system configuration with clear visual feedback.",
      icon: Monitor
    },
    {
      title: "Data Logging & Remote Access",
      description: "Comprehensive data storage on micro-SD card with USB download capability and built-in web server for smartphone access to process data and historical information.",
      icon: Wifi
    }
  ];

  const systemComponents = [
    {
      name: "Stainless Steel Moisture Sensor",
      description: "Fin-type capacitance sensor for precise moisture measurement at dryer exit",
      icon: Gauge,
      specs: ["Food grade stainless steel construction", "Temperature compensation", "Real-time measurement", "Long-term stability"]
    },
    {
      name: "Color Touch Screen Display", 
      description: "Intuitive control panel for system operation and data visualization",
      icon: Monitor,
      specs: ["Touch screen controls", "Real-time data display", "Process status indicators", "Easy configuration interface"]
    },
    {
      name: "Micro PLC System",
      description: "Compact control system with state logic machine functionality",
      icon: Settings,
      specs: ["Configurable triggers", "Speed switching control", "Variable frequency drive interface", "Automatic discharge rate adjustment"]
    },
    {
      name: "Data Management System",
      description: "Comprehensive data storage and export capabilities",
      icon: Database,
      specs: ["Micro-SD card storage", "USB port for downloads", "CSV format export", "Built-in web server access"]
    }
  ];

  const advantages = [
    {
      title: "Hands-On Control Solution",
      description: "Designed for operators who prefer active involvement in the drying process with configurable parameters and real-time adjustments for optimal results.",
      icon: Target
    },
    {
      title: "Cost-Effective Automation",
      description: "Basic automatic control functionality provides essential moisture monitoring and control capabilities at an affordable price point for smaller operations.",
      icon: Shield
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
            MOISTURE CONTROL
          </GlobalHeroCardBadge>
          
          <GlobalHeroCardTitle>
            DM100 Moisture Monitor
          </GlobalHeroCardTitle>
          
          <GlobalHeroCardDescription>
            The DM100 is a real-time moisture monitoring and basic control solution designed for measuring product moisture at the exit of a grain dryer. Featuring a color touch screen display, micro PLC control, and built-in web server, the DM100 provides essential moisture control functionality for operators seeking hands-on involvement in the drying process.
          </GlobalHeroCardDescription>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/manuals/dm100/product-manual.pdf"
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
                Real-Time Moisture Monitoring & Control
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The DM100 provides real-time moisture measurement at the dryer exit with basic automatic control functionality through a state logic machine with configurable triggers.
                </p>
                <p>
                  Designed for operators who prefer hands-on involvement in the drying process, the DM100 offers essential moisture monitoring with operator-defined targets and adjustable discharge rate speeds.
                </p>
                <p>
                  Best results are achieved with stable inlet moistures and shorter dryer residence times, making it ideal for operations requiring periodic parameter adjustments.
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
                  src="/products/dm-100/DM100.png"
                  alt="DM100 Moisture Monitor System"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm text-gray-900">Basic Automatic Control</span>
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
            The DM100 includes all essential components for real-time moisture monitoring and basic automatic control at the dryer exit.
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

      {/* Web Interface Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 lg:p-12 border border-secondary-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm border border-white/40">
                <Image
                  src="/products/dm-100/dm100-web pic.png"
                  alt="DM100 Web Interface"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                <Smartphone className="w-6 h-6 text-secondary" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Built-in Web Server</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Access your DM100 system data remotely through the built-in web server using any smartphone, tablet, or computer with internet connectivity.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-Time Data Access</h4>
                    <p className="text-gray-600 text-sm">View moisture levels, product temperature, and discharge rates from anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Process History</h4>
                    <p className="text-gray-600 text-sm">Access historical data and process information for analysis and record keeping</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alarm Monitoring</h4>
                    <p className="text-gray-600 text-sm">Remote alarm status monitoring and process event notifications</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/products/dm510-controller"
                  className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <Monitor className="w-5 h-5" />
                  View DM510 Controller
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
            Essential moisture monitoring and control functionality designed for hands-on operators seeking cost-effective automation.
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

      {/* Performance Recommendations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimal Performance Conditions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The DM100 delivers best results under specific operating conditions and with proper operator involvement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Stable Inlet Moisture</h3>
            <p className="text-gray-600 leading-relaxed">
              Best performance achieved with consistent inlet moisture levels, providing reliable baseline conditions for accurate control.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Shorter Residence Times</h3>
            <p className="text-gray-600 leading-relaxed">
              Most effective with dryers having shorter grain residence times, allowing for quicker response to moisture control adjustments.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Operator Adjustments</h3>
            <p className="text-gray-600 leading-relaxed">
              Requires periodic operator parameter adjustments for optimal performance, ideal for hands-on operators who prefer active involvement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Essential Moisture Control?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact our team to learn how the DM100 can provide cost-effective moisture monitoring and basic automatic control for your grain drying operation.
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
              href="/manuals/dm100/product-manual.pdf"
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