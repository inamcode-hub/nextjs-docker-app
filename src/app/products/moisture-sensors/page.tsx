import { CheckCircle, Download, Eye, Settings, Wheat, Factory, Coffee, DollarSign, Gauge, Shield, Wrench, FileText, ExternalLink } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import GlobalStatsSection from '@/components/GlobalStatsSection';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Real-Time Moisture Sensors | In-Line Capacitance-Based Sensors | Dryer Master',
  description: 'Advanced real-time moisture sensors for grain drying, food processing, and industrial applications. Capacitance-based technology with temperature compensation for accurate inline moisture monitoring.',
  keywords: 'moisture sensors, real-time monitoring, capacitance sensors, grain moisture, inline sensors, temperature compensation, food grade sensors, stainless steel sensors',
  openGraph: {
    title: 'Real-Time Moisture Sensors | Dryer Master',
    description: 'Advanced real-time moisture sensors for grain drying, food processing, and industrial applications.',
    images: ['/sensors/2300-sensor-1.png'],
  },
};

export default function MoistureSensorsPage() {
  const heroStats = [
    { label: "Response Time", value: "Real-Time", icon: <Gauge className="w-6 h-6 text-white" /> },
    { label: "Construction", value: "Stainless Steel", icon: <Shield className="w-6 h-6 text-white" /> },
    { label: "Food Grade", value: "Certified", icon: <CheckCircle className="w-6 h-6 text-white" /> },
    { label: "Industries Served", value: "15+", icon: <Factory className="w-6 h-6 text-white" /> }
  ];

  const sensorModels = [
    {
      id: "2220",
      name: "2220 Series",
      subtitle: "Standard Configuration",
      description: "Our flagship moisture sensor featuring capacitance-based technology with temperature stabilized electronics and product temperature compensation. These sensors respond to the total bulk moisture within the product and provide the best available in-line readings.",
      features: [
        "Capacitance-based measurement",
        "Temperature stabilized electronics",
        "Product temperature compensation",
        "Stainless steel construction",
        "Food grade certified",
        "OEM versions available"
      ],
      applications: ["Grain drying", "Food processing", "Industrial applications"],
      pdfLink: "/manuals/sensors/real-time-moisture-sensor.pdf"
    },
    {
      id: "2300",
      name: "2300 Series", 
      subtitle: "Intrinsically Safe Version",
      description: "Designed for hazardous environments, the 2300 series provides the same accurate moisture measurement with intrinsically safe certification.",
      features: [
        "Intrinsically safe certified",
        "Explosion-proof design",
        "Same accuracy as 2220 series",
        "Hazardous area approved",
        "Robust construction",
        "OEM versions available"
      ],
      applications: ["Ethanol facilities", "Chemical processing", "Hazardous environments"],
      pdfLink: "/manuals/sensors/real-time-moisture-sensor.pdf"
    }
  ];

  const industries = [
    {
      name: "Whole Grains",
      description: "Corn, wheat, rice, soybeans and other cereal grains",
      icon: Wheat,
      examples: ["Corn drying", "Wheat processing", "Rice milling", "Soybean handling"]
    },
    {
      name: "Coffee Processing",
      description: "Raw, roasted, and processed coffee beans",
      icon: Coffee,
      examples: ["Green coffee drying", "Roasted bean cooling", "Ground coffee processing"]
    },
    {
      name: "Meals & Flour",
      description: "Cornmeal, soymeal, distillers grain, and flour",
      icon: Settings,
      examples: ["Cornmeal production", "Soymeal processing", "DDGS monitoring", "Flour milling"]
    },
    {
      name: "Manufactured Pellets",
      description: "Pet food, animal feeds, fish feed, and wood pellets",
      icon: Factory,
      examples: ["Pet food manufacturing", "Animal feed production", "Fish feed processing", "Wood pellet production"]
    }
  ];

  const advantages = [
    {
      title: "Cost-Effective Alternative",
      description: "When compared to alternate technologies, Dryer Master sensors provide exceptional value, making installations economical in previously unfeasible locations.",
      icon: DollarSign
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time moisture information eliminates blind spots experienced with periodic manual sampling, giving operators a complete process picture.",
      icon: Eye
    },
    {
      title: "Easy Installation",
      description: "Straightforward installation process with minimal disruption to existing systems. Maintenance and calibration are simple and user-friendly.",
      icon: Wrench
    },
    {
      title: "Temperature Compensation",
      description: "Advanced temperature stabilized electronics with product temperature compensation ensure accurate readings across varying conditions.",
      icon: Gauge
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard>
          <GlobalHeroCardBadge 
            icon={<Settings size={20} className="text-secondary-1" />}
          >
            MOISTURE SENSORS
          </GlobalHeroCardBadge>
          
          <GlobalHeroCardTitle>
            Real-Time Moisture Sensors
          </GlobalHeroCardTitle>
          
          <GlobalHeroCardDescription>
            Dryer Master provides in-line real-time moisture information using fin style moisture sensors that measure the moisture of the product as it passes by the sensor. Our capacitance-based sensors eliminate the "blind spots" experienced with periodic manual sampling, giving operators continuous, accurate moisture monitoring for complete process control.
          </GlobalHeroCardDescription>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/manuals/sensors/real-time-moisture-sensor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Technical Specs
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

      {/* Technology Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Capacitance Technology
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Dryer Master provides in-line real-time moisture information using fin style moisture sensors that measure the moisture of the product as it passes by the sensor.
                </p>
                <p>
                  These sensors are capacitance-based devices that respond to the total bulk moisture within the product and use temperature stabilized electronics and product temperature compensation to give you the best available in-line readings.
                </p>
                <p>
                  Constructed of stainless steel, the sensors are food grade and flexible enough to meet your most demanding applications. When compared to alternate technologies, Dryer Master sensors make installations economical in locations where they may not have been economical in the past. Installation is generally quite straightforward, as is maintenance and calibration.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {advantages.slice(0, 2).map((advantage, index) => (
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
                  src="/products/moisture-sensors/real-time-in-line-moisture-sensor-product-photo.jpg"
                  alt="In-Line Moisture Sensor Installation"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm text-gray-900">Food Grade Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Images Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our moisture sensors in action across various installations and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/products/moisture-sensors/2300 Sensor-1.png"
                alt="2300 Series Moisture Sensor"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">2300 Series Sensor</h3>
              <p className="text-sm text-gray-600">Intrinsically safe moisture sensor for hazardous environments</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/products/moisture-sensors/DM2020_Sensor_3cc.png"
                alt="DM2020 Moisture Sensor"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">DM2020 Sensor</h3>
              <p className="text-sm text-gray-600">Compact design for space-constrained installations</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/products/moisture-sensors/bypasschute_D01-small.png"
                alt="Bypass Chute Installation"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Bypass Chute System</h3>
              <p className="text-sm text-gray-600">Optional rotary feed chute for consistent material flow</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/products/moisture-sensors/real-time-in-line-moisture-sensor-product-photo.jpg"
                alt="In-Line Moisture Sensor"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">In-Line Installation</h3>
              <p className="text-sm text-gray-600">Real-time monitoring during product flow</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/customers/experiences"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
          >
            <Eye className="w-5 h-5" />
            View More Customer Stories
          </Link>
        </div>
      </section>

      {/* Sensor Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sensor Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our standard or intrinsically safe sensor configurations to meet your specific application requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {sensorModels.map((sensor) => (
            <div key={sensor.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-b border-primary-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{sensor.name}</h3>
                    <p className="text-primary font-semibold">{sensor.subtitle}</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{sensor.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {sensor.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Typical Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {sensor.applications.map((app, index) => (
                      <span key={index} className="bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={sensor.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-semibold text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-4 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 font-semibold text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Industry Segments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In addition to the whole grains industry, our sensors serve diverse applications across multiple industries with cost-effective solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{industry.description}</p>
              <div className="space-y-1">
                {industry.examples.map((example, idx) => (
                  <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Equipment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optional Equipment - Rotary Feed Chutes</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                To simplify and standardize installation, Dryer Master offers moisture sensor chutes that come with a rotary feed to provide a consistent metered flow past the sensor.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Viewing Window & Sampling Port</h4>
                    <p className="text-gray-600 text-sm">Manual sampling incorporated in design for verification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Configurations</h4>
                    <p className="text-gray-600 text-sm">Bypass or inline versions with 115V or 230V motors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Material Options</h4>
                    <p className="text-gray-600 text-sm">Available in painted mild steel or stainless steel</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="/manuals/sensors/rotary-feed-chutes-2019.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 border-2 border-primary-300">
                <Image
                  src="/products/moisture-sensors/bypasschute_D01-small.png"
                  alt="Rotary Feed Chute System"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm text-gray-900">Easy Installation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dryer Master Sensors?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sensors provide cost-effective, reliable moisture monitoring solutions that make installations economical where they may not have been in the past.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.slice(2).map((advantage, index) => (
            <div key={index + 2} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement Real-Time Moisture Monitoring?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Our sensors are available individually or as part of a complete Dryer Master monitoring or control solution.
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
              href="/manuals/sensors/real-time-moisture-sensor.pdf"
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