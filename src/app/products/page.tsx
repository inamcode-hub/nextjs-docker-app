'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GlobalHeroCard, 
  GlobalHeroCardBadge, 
  GlobalHeroCardTitle, 
  GlobalHeroCardDescription 
} from '@/components/GlobalHeroCard';
import { 
  Activity, 
  Cpu, 
  Smartphone, 
  BarChart3, 
  Gauge,
  Settings,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield
} from 'lucide-react';

const products = [
  {
    id: 'moisture-sensors',
    name: 'Real-Time Moisture Sensors',
    description: 'Advanced real-time grain moisture monitoring with unmatched accuracy and reliability',
    icon: <Activity className="w-8 h-8" />,
    href: '/products/moisture-sensors',
    features: ['Real-time monitoring', 'High accuracy', 'Durable construction'],
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'Most Popular'
  },
  {
    id: 'dm510-controller',
    name: 'Dryer Master 510 Controller',
    description: 'Industry-leading grain dryer controller with advanced automation capabilities',
    icon: <Cpu className="w-8 h-8" />,
    href: '/products/dm510-controller',
    features: ['Advanced automation', 'Energy efficient', 'Easy integration'],
    gradient: 'from-purple-500 to-pink-500',
    badge: 'Premium'
  },
  {
    id: 'dm510-embedded',
    name: 'DM510 Embedded Solution',
    description: 'Seamlessly integrated control system for OEM manufacturers',
    icon: <Settings className="w-8 h-8" />,
    href: '/products/dm510-embedded',
    features: ['OEM ready', 'Customizable', 'Compact design'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'dm-mobile',
    name: 'DM Mobile',
    description: 'Remote monitoring and control from anywhere with your mobile device',
    icon: <Smartphone className="w-8 h-8" />,
    href: '/products/dm-mobile',
    features: ['Remote access', 'Real-time alerts', 'Multi-site support'],
    gradient: 'from-green-500 to-teal-500',
    badge: 'New'
  },
  {
    id: 'moisture-monitor-pro',
    name: 'Moisture Monitor Pro',
    description: 'Professional-grade moisture monitoring with advanced analytics',
    icon: <BarChart3 className="w-8 h-8" />,
    href: '/products/moisture-monitor-pro',
    features: ['Advanced analytics', 'Data logging', 'Reporting tools'],
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'dm100',
    name: 'Dryer Master DM100',
    description: 'Entry-level controller with essential features for efficient grain drying',
    icon: <Gauge className="w-8 h-8" />,
    href: '/products/dm100',
    features: ['Easy to use', 'Reliable', 'Cost-effective'],
    gradient: 'from-gray-600 to-gray-800',
    badge: 'Value'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-12">
        <GlobalHeroCard className="shadow-2xl">
          <GlobalHeroCardBadge icon={<Zap className="w-5 h-5" />}>
            Industry-Leading Solutions
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle highlightText="Products">
            Our Complete Range of Grain Drying
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            From advanced moisture sensors to sophisticated control systems, discover the perfect 
            solution for your grain drying needs. Trusted by farmers and operations worldwide.
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Reliability</h3>
            <p className="text-gray-600">
              Over 30 years of innovation in grain drying technology with thousands of satisfied customers
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Efficient</h3>
            <p className="text-gray-600">
              Save up to 30% on energy costs with our intelligent control systems and optimization
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Integration</h3>
            <p className="text-gray-600">
              Compatible with all major dryer brands and seamlessly integrates with existing systems
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect product for your specific needs and scale of operation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={product.href}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {product.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors">
                  Learn More 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-primary via-primary-dark to-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our experts are here to help you find the perfect solution for your grain drying needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/dealer-locator" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center"
            >
              Find a Dealer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}