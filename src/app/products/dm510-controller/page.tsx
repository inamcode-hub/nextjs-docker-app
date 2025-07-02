'use client';

import { useState } from 'react';
import { CheckCircle, Download, Settings, Smartphone, Monitor, Cpu, Gauge, Shield, ExternalLink, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import GlobalStatsSection from '@/components/GlobalStatsSection';
import Image from 'next/image';
import Link from 'next/link';

export default function DM510ControllerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      category: "Remote Access & Control",
      questions: [
        {
          q: "Can I use the DM510 to see/control my grain drying on my smartphone?",
          a: "Yes, by connecting the DM510 to an internet router, you can view drying in any web browser. No app required. You can view live data, historical information, and real-time graphs."
        }
      ]
    },
    {
      category: "Compatibility & Installation",
      questions: [
        {
          q: "Will it work on my grain dryer?",
          a: "The DM510 works on almost all continuous flow grain dryers (screen, mixed flow, farm, tower dryers). It is not designed for in-bin or batch dryers."
        },
        {
          q: "If something were to go wrong with the DM510 can I still run my dryer as I used to?",
          a: "Definitely. By switching to local mode, the grain dryer can be run exactly as it was before the DM510 was added."
        }
      ]
    },
    {
      category: "Operation & Control",
      questions: [
        {
          q: "Can I use it to dry more than corn?",
          a: "Yes, the DM510 is preconfigured to be used on up to 8 different products (corn, wheat, soybeans, etc.)."
        },
        {
          q: "Does it control the drying temperature?",
          a: "No. The DM510 only controls discharge rate. It monitors drying air temperature but does not control temperature."
        },
        {
          q: "Will all my grain come out at the moisture setpoint?",
          a: "No. Physics prevents all grain from exiting at exactly the same moisture. The DM510 tries to reduce variation and center moisture around the setpoint."
        }
      ]
    },
    {
      category: "Calibration & Sensors",
      questions: [
        {
          q: "How do I calibrate the outlet moisture sensor?",
          a: "Push the calibration button, which flashes green for 30 seconds. Take a manual sample, test it, and enter the results on the DM510 panel."
        },
        {
          q: "Can I put the outlet sensor in the bottom of an auger?",
          a: "No. Dryer Master sensors need vertical installation in compacted grain flowing at less than 1 inch per second."
        }
      ]
    },
    {
      category: "Purchasing & Support",
      questions: [
        {
          q: "Where can I buy a DM510?",
          a: "Directly from Dryer Master or through authorized dealers. Use their dealer locator or call 1-800-265-2757."
        }
      ]
    }
  ];

  const heroStats = [
    { label: "Control Method", value: "Automated", icon: <Cpu className="w-6 h-6 text-white" /> },
    { label: "Remote Access", value: "DM Mobile", icon: <Smartphone className="w-6 h-6 text-white" /> },
    { label: "Grain Types", value: "8 Configurable", icon: <Gauge className="w-6 h-6 text-white" /> },
    { label: "Dryer Types", value: "Continuous Flow", icon: <Shield className="w-6 h-6 text-white" /> }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard>
          <GlobalHeroCardBadge icon={<Cpu size={20} className="text-secondary-1" />}>
            DRYER CONTROLLER
          </GlobalHeroCardBadge>
          
          <GlobalHeroCardTitle>
            Dryer Master 510 Controller
          </GlobalHeroCardTitle>
          
          <GlobalHeroCardDescription>
            The industry-leading moisture control system for continuous flow grain dryers. The DM510 eliminates guesswork in grain drying by providing real-time moisture and temperature information with advanced automatic control that adapts to changing conditions.
          </GlobalHeroCardDescription>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/manuals/dm510/operations-manual-2023.pdf"
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
              Get Quote
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
                Industry-Leading Control System
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Dryer Master 510 Controller is designed to be installed on new or existing continuous flow grain dryers to provide advanced moisture control and monitoring capabilities.
                </p>
                <p>
                  The system controls the discharge rate, not the drying temperature, allowing it to work with your existing dryer setup while providing superior moisture control accuracy.
                </p>
                <p>
                  By building a dynamic model of your specific dryer's performance, the DM510 adapts to changing conditions and provides consistent, reliable drying results.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Cost-Effective Investment</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">When compared to labor costs and grain quality losses, the DM510 provides exceptional value, making automation economical where it may not have been feasible in the past.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                  <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Eliminates Guesswork</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Real-time moisture information eliminates blind spots experienced with periodic manual sampling, giving operators a complete process picture.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 border-2 border-primary-300">
                <Image
                  src="/products/dm-510/dm510-controller-product-photo.jpg"
                  alt="DM510 Controller System"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm text-gray-900">Industry Proven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">3 Key Advantages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how the DM510 Controller transforms your grain drying operation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Real Time Moisture Information</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              You get continuous real time product moisture and temperature information from the inlet and the outlet to the dryer. Now you can see the moisture without having to go out and take a sample.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Remote Access</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              With DM MOBILE®, Dryer Master's advanced remote access feature, you can monitor and make changes to your drying from your smartphone or computer. The DM510 panel can be located at a convenient indoor location that lets you keep an eye on your drying without having to go out to the dryer.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Advanced Control</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              The DM510 uses the moisture information to build a model of how your dryer is drying. As conditions change throughout the day, the Dryer Master continuously calculates and automatically adjusts to use the best discharge rate, optimizing performance and freeing the operator from continual monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Complete System Package */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete System Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for complete dryer automation and monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Control Panel */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Control Panel</h3>
              <p className="text-sm text-gray-600 mb-3">Indoor installation with intuitive interface</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• Touch screen interface</div>
                <div>• Real-time data display</div>
                <div>• Alarm management</div>
              </div>
            </div>

            {/* Moisture Sensors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-3 border-2 border-primary-300">
                <Image
                  src="/products/moisture-sensors/2300 Sensor-1.png"
                  alt="Moisture Sensors"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Moisture Sensors</h3>
              <p className="text-sm text-gray-600 mb-3">Inlet and outlet fin type sensors</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• Temperature compensation</div>
                <div>• Stainless steel construction</div>
                <div>• Food grade certified</div>
              </div>
            </div>

            {/* Rotary Feed Chute */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-3 border-2 border-primary-300">
                <Image
                  src="/products/moisture-sensors/bypasschute_D01-small.png"
                  alt="Rotary Feed Chute"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Rotary Feed Chute</h3>
              <p className="text-sm text-gray-600 mb-3">Consistent metered product flow</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• Viewing window</div>
                <div>• Sampling port</div>
                <div>• 115V/230V options</div>
              </div>
            </div>

            {/* DM Mobile */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">DM Mobile®</h3>
              <p className="text-sm text-gray-600 mb-3">Remote access capabilities</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• Web browser access</div>
                <div>• Live data monitoring</div>
                <div>• No app required</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              <CheckCircle className="w-5 h-5" />
              All components included in complete system
            </div>
          </div>
        </div>
      </section>

      {/* Dryer Compatibility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dryer Compatibility</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The DM510 Controller is compatible with most continuous flow grain dryers and can be installed on new or existing systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Compatible Dryer Types
            </h3>
            <div className="space-y-3">
              {["Continuous flow grain dryers", "Tower dryers", "Mixed flow dryers", "Cross flow dryers", "Concurrent flow dryers"].map((dryer, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{dryer}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6 text-primary" />
              Key Requirements
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Continuous Flow Design</h4>
                  <p className="text-sm text-gray-600">Not suitable for in-bin or batch dryers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Discharge Control</h4>
                  <p className="text-sm text-gray-600">Must have adjustable discharge rate capability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sensor Installation</h4>
                  <p className="text-sm text-gray-600">Adequate space for inlet and outlet sensor placement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about the DM510 Controller
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 px-6 py-4 border-b border-primary-200">
                <h3 className="text-lg font-bold text-primary">{category.category}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openFaq === globalIndex;
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleFaq(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Have more questions? Our technical support team is ready to help at <strong>1-800-265-2757</strong>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Dryer Control?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact our team to discuss how the DM510 Controller can improve your grain drying operation with advanced automation and remote monitoring capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Get Quote
            </Link>
            <a
              href="/manuals/dm510/operations-manual-2023.pdf"
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