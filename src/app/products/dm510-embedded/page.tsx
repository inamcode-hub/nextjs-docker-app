'use client';

import { CheckCircle, Download, Cpu, Settings, Building2, Smartphone, Monitor, Gauge, Shield, Wrench, ExternalLink, Target, BarChart3, Zap } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import GlobalStatsSection from '@/components/GlobalStatsSection';
import Image from 'next/image';
import Link from 'next/link';

export default function DM510EmbeddedPage() {
  const heroStats = [
    { label: "Communication", value: "Modbus RTU", icon: <Zap className="w-6 h-6 text-white" /> },
    { label: "Integration", value: "Seamless", icon: <Settings className="w-6 h-6 text-white" /> },
    { label: "Target Market", value: "Manufacturers", icon: <Building2 className="w-6 h-6 text-white" /> },
    { label: "Performance", value: "DM510 Grade", icon: <Shield className="w-6 h-6 text-white" /> }
  ];

  const keyFeatures = [
    {
      title: "Modbus RTU Communication",
      description: "Integrates seamlessly with existing dryer systems using industry-standard Modbus RTU serial communication protocol for reliable data exchange.",
      icon: Zap
    },
    {
      title: "Custom Interface Integration",
      description: "Allows dryer manufacturers to create unique operator interfaces tailored to their customers' specific needs while maintaining Dryer Master's proven control algorithms.",
      icon: Monitor
    },
    {
      title: "Complete Hardware Solution",
      description: "Includes inlet and outlet moisture sensors, hardware module with motherboard, 24V power supply, and Dryer Master grain drying control software in one integrated package.",
      icon: Cpu
    },
    {
      title: "Cost-Effective Manufacturing",
      description: "Provides manufacturers with a cost-effective solution to offer advanced moisture monitoring and control without developing proprietary systems from scratch.",
      icon: Target
    }
  ];

  const systemComponents = [
    {
      name: "Inlet Moisture Sensor",
      description: "Real-time monitoring of incoming grain moisture content",
      icon: Gauge,
      specs: ["Capacitance-based technology", "Temperature compensation", "Stainless steel construction", "Food grade certified"]
    },
    {
      name: "Outlet Moisture Sensor", 
      description: "Continuous measurement of dried grain moisture levels",
      icon: Target,
      specs: ["High accuracy readings", "Temperature stabilized", "Durable construction", "Easy calibration"]
    },
    {
      name: "Hardware Module",
      description: "Complete control system with motherboard and power supply",
      icon: Cpu,
      specs: ["24V power supply included", "Compact design", "Industrial grade components", "Modbus RTU interface"]
    },
    {
      name: "Control Software",
      description: "Proven Dryer Master grain drying control algorithms",
      icon: Settings,
      specs: ["Real-time processing", "Adaptive control logic", "Multi-grain support", "Performance optimization"]
    }
  ];

  const advantages = [
    {
      title: "Trusted Technology",
      description: "Leverage Dryer Master's proven moisture monitoring and control technology that has been field-tested across thousands of installations worldwide.",
      icon: Shield
    },
    {
      title: "Seamless Integration",
      description: "Integrates directly into dryer manufacturer's existing user interface and control systems without requiring extensive modifications to current designs.",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard>
          <GlobalHeroCardBadge 
            icon={<Building2 size={20} className="text-secondary-1" />}
          >
            EMBEDDED SOLUTION
          </GlobalHeroCardBadge>
          
          <GlobalHeroCardTitle>
            DM510 Embedded Solution
          </GlobalHeroCardTitle>
          
          <GlobalHeroCardDescription>
            Dryer Master's embedded solution (DM510ec) is ideal for grain dryer manufacturers looking to provide real-time moisture monitoring and grain drying control technologies. This integrated solution allows manufacturers to offer trusted Dryer Master control while creating unique operator interfaces tailored to their customers' specific needs.
          </GlobalHeroCardDescription>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/manuals/dm510/embedded-solution-specs.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Specifications
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Contact Sales
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
                One Stop Integrated Panel
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The DM510ec embedded solution provides grain dryer manufacturers with a complete, integrated moisture monitoring and control system that seamlessly integrates into existing dryer designs.
                </p>
                <p>
                  Using industry-standard Modbus RTU serial communication protocol, the system communicates directly with your dryer panel PLC or HMI, providing real-time moisture data and control outputs.
                </p>
                <p>
                  This cost-effective solution enables manufacturers to offer advanced moisture control capabilities without the complexity and expense of developing proprietary systems from scratch.
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
                  src="/products/dm-510/DM510ec_11.png"
                  alt="DM510 Embedded Solution System"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm text-gray-900">Manufacturer Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete System Components</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The DM510ec includes all necessary hardware and software components for seamless integration into your dryer manufacturing process.
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

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features & Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for grain dryer manufacturers seeking to integrate advanced moisture control technology into their equipment lines.
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

      {/* Integration Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 lg:p-12 border border-secondary-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless Integration</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                The DM510ec communicates via Modbus RTU serial communication protocol, making it easy to integrate with your existing dryer panel PLC or HMI systems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Industry Standard Protocol</h4>
                    <p className="text-gray-600 text-sm">Modbus RTU ensures reliable communication with most industrial control systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Custom Interface Support</h4>
                    <p className="text-gray-600 text-sm">Create unique operator interfaces while leveraging proven Dryer Master algorithms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Same Performance</h4>
                    <p className="text-gray-600 text-sm">Delivers identical performance to standalone DM510 controller systems</p>
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

            <div className="relative">
              <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm border border-white/40">
                <div className="aspect-square bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-xl flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-secondary-700" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Grain Dryer Manufacturers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The DM510ec is specifically designed for equipment manufacturers looking to offer advanced moisture control as a value-added feature.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Equipment Manufacturers</h3>
            <p className="text-gray-600 leading-relaxed">
              Grain dryer manufacturers seeking to offer advanced moisture control technology as an integrated feature in their equipment lines.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Value-Added Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Provide customers with proven moisture monitoring and control capabilities without the cost and complexity of developing proprietary systems.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Create unique operator interfaces tailored to specific customer needs while maintaining the reliability of Dryer Master's proven algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Integrate Advanced Moisture Control?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact our team to discuss how the DM510 Embedded Solution can enhance your grain dryer manufacturing capabilities with proven moisture monitoring and control technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Contact Our Team
            </Link>
            <a
              href="/manuals/dm510/embedded-solution-specs.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Specifications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
