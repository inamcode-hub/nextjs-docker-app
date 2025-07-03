'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, DollarSign, CheckCircle, Smartphone, Monitor, Activity, BarChart3, Users, Star, Phone, Mail, MapPin, Gauge, Clock, Target, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import LiveMonitoringCards from '@/app/about/LiveMonitoringCards';
import DMobileInterface from '@/app/products/dm-mobile/DMobileInterface';
import { customerTestimonials } from '@/lib/customerExperiencesData';

export default function Home() {
  const [currentStat, setCurrentStat] = useState(0);
  const [yearsSaving, setYearsSaving] = useState(1);
  const [bushelsPerYear, setBushelsPerYear] = useState(50000);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Rotating stats for the hero section
  const heroStats = [
    { number: "40+", label: "Years Leading the Industry", icon: <Shield className="w-8 h-8" /> },
    { number: "50,000+", label: "Farmers Trust Us", icon: <Users className="w-8 h-8" /> },
    { number: "$2.3M+", label: "Saved in Energy Costs", icon: <DollarSign className="w-8 h-8" /> },
    { number: "99.8%", label: "Accuracy Guaranteed", icon: <Target className="w-8 h-8" /> }
  ];

  // Rotate stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % heroStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroStats.length]);

  // Calculate savings for farmers
  const calculateSavings = () => {
    const energySavingsPerBushel = 0.12; // $0.12 per bushel in energy savings
    const qualityBonusPerBushel = 0.08; // $0.08 per bushel in quality bonus
    const totalSavingsPerBushel = energySavingsPerBushel + qualityBonusPerBushel;
    const annualSavings = bushelsPerYear * totalSavingsPerBushel;
    const totalSavings = annualSavings * yearsSaving;
    return { annualSavings, totalSavings };
  };

  const { annualSavings, totalSavings } = calculateSavings();

  // Scroll functions for testimonials
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const farmerProblems = [
    {
      problem: "Over-drying costs you money",
      solution: "Our sensors stop drying at the exact right moisture",
      icon: <DollarSign className="w-6 h-6" />,
      savings: "Save $0.12 per bushel in energy costs"
    },
    {
      problem: "Under-dried grain gets docked",
      solution: "Real-time monitoring prevents moisture penalties",
      icon: <Shield className="w-6 h-6" />,
      savings: "Avoid $0.05-0.10 per bushel dock fees"
    },
    {
      problem: "Can't watch the dryer 24/7",
      solution: "Mobile alerts let you monitor from anywhere",
      icon: <Smartphone className="w-6 h-6" />,
      savings: "Sleep better knowing your grain is safe"
    },
    {
      problem: "Guessing when grain is done",
      solution: "Precise sensors tell you exactly when to stop",
      icon: <Gauge className="w-6 h-6" />,
      savings: "Consistent 14.5% moisture every time"
    }
  ];

  // Use all customer testimonials from the data file

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-primary/20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Trusted Since 1983</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Stop Losing Money on 
                <span className="text-primary"> Every Bushel</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                Farmers using Dryer Master save <strong className="text-green-600">$0.20 per bushel</strong> by hitting perfect moisture every time. 
                No more over-drying. No more dock fees. Just profitable grain.
              </p>

              {/* Rotating Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    {heroStats[currentStat].icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {heroStats[currentStat].number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {heroStats[currentStat].label}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-dark transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  Calculate My Savings
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/products"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  See How It Works
                  <Monitor className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Live Demo Cards */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Demo</h3>
                <p className="text-gray-600">See real-time moisture monitoring in action</p>
              </div>
              <LiveMonitoringCards />
              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  LIVE DATA - Your dryer could be this precise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Farmer Problems/Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Every Farmer Faces These Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We built Dryer Master to solve the real issues that cost you money every harvest
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {farmerProblems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 text-red-600">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.problem}</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary mb-4"></div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">{item.solution}</h4>
                    <p className="text-green-600 font-medium">{item.savings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12 border border-green-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Calculate Your Savings
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  See how much money Dryer Master could save your operation. Most farmers see their investment pay back in the first season.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bushels per year
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      step="10000"
                      value={bushelsPerYear}
                      onChange={(e) => setBushelsPerYear(Number(e.target.value))}
                      className="w-full slider"
                    />
                    <div className="text-center mt-2 text-2xl font-bold text-green-700">
                      {bushelsPerYear.toLocaleString()} bushels
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of operation
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={yearsSaving}
                      onChange={(e) => setYearsSaving(Number(e.target.value))}
                      className="w-full slider"
                    />
                    <div className="text-center mt-2 text-2xl font-bold text-green-700">
                      {yearsSaving} {yearsSaving === 1 ? 'year' : 'years'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Your Potential Savings
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Annual energy savings:</span>
                    <span className="font-bold text-green-600 text-lg">
                      ${annualSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Quality bonus value:</span>
                    <span className="font-bold text-green-600 text-lg">
                      ${(bushelsPerYear * 0.08).toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t-4 border-green-400 my-4"></div>
                  <div className="flex justify-between items-center py-4 bg-green-100 rounded-lg">
                    <span className="text-gray-900 font-bold text-lg">Total {yearsSaving}-year savings:</span>
                    <span className="font-bold text-green-700 text-2xl">
                      ${totalSavings.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Get My Custom Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DM510 Controller Showcase */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-200 rounded-full px-4 py-2 mb-4">
              <Monitor className="w-5 h-5 text-blue-700" />
              <span className="text-sm font-semibold text-blue-700">FLAGSHIP PRODUCT</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              DM510 Controller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The smart dryer controller that thinks like an experienced operator, but never gets tired or makes mistakes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Learns Your Dryer</h3>
                </div>
                <p className="text-gray-600">
                  Automatically adapts to your specific dryer, grain types, and drying conditions. Gets smarter every bushel.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Hits 14.5% Every Time</h3>
                </div>
                <p className="text-gray-600">
                  Precision control keeps your grain within 0.1% of target moisture. No more guessing, no more dock fees.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Tracks Everything</h3>
                </div>
                <p className="text-gray-600">
                  Detailed reports show your drying efficiency, energy usage, and cost savings. Prove ROI to your banker.
                </p>
              </div>

              <Link
                href="/products/dm510-controller"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                See DM510 in Action
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              {/* Main Product Showcase */}
              <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                <div className="relative z-10">
                  {/* Product Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
                      <Monitor className="w-6 h-6" />
                      <span className="font-bold">DM510 CONTROLLER</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Smart Dryer Automation</h3>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">The brain that controls your entire drying operation with precision and intelligence</p>
                  </div>
                  
                  {/* Product Image with Tech Frame */}
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-inner">
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <img 
                          src="/products/dm-510/dm510-controller-product-photo.jpg" 
                          alt="DM510 Controller" 
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                    {/* Tech Corner Indicators */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-500"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-500"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-500"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blue-500"></div>
                  </div>
                  
                  {/* Key Features Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold mb-1">±0.1%</div>
                      <div className="text-xs opacity-90">Precision</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4 text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-xs opacity-90">Operation</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-4 text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold mb-1">AUTO</div>
                      <div className="text-xs opacity-90">Control</div>
                    </div>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">System Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Learning</span>
                    </div>
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-200/30 rounded-full blur-2xl translate-y-16 -translate-x-16"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-200/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-4 shadow-xl transform rotate-12">
                <div className="text-center">
                  <Monitor className="w-8 h-8 mx-auto mb-1" />
                  <div className="text-xs font-bold">FLAGSHIP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DM Mobile Showcase */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
              <Smartphone className="w-6 h-6" />
              <span className="font-bold">REMOTE MONITORING</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Monitor From Anywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check your dryer from the combine, your house, or anywhere with cell service. Get alerts before problems cost you money.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Real-Time Alerts</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 font-medium">Active Monitoring</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get instant text alerts when moisture goes off target, temperature spikes, or the dryer needs attention.
                </p>
                <div className="mt-4 flex items-center gap-2 text-blue-600">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">SMS</span>
                  </div>
                  <span className="text-sm font-medium">Instant notifications</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Sleep Better</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-blue-600 font-medium">24/7 Peace of Mind</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  No more midnight dryer checks. Get notified only when you need to take action.
                </p>
                <div className="mt-4 flex items-center gap-2 text-green-600">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">24/7</span>
                  </div>
                  <span className="text-sm font-medium">Continuous monitoring</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Historical Data</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-purple-600 font-medium">Analytics Ready</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  View detailed drying history, energy usage, and performance trends to optimize your operation.
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-600">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">DATA</span>
                  </div>
                  <span className="text-sm font-medium">Historical reports</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-xl">
                <Link
                  href="/products/dm-mobile"
                  className="text-white font-bold text-lg hover:text-blue-100 transition-colors duration-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-6 h-6" />
                    <span>Try DM Mobile Demo</span>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Mobile Interface Container */}
              <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-4 py-2 mb-4">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold">LIVE DEMO</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">DM Mobile Interface</h3>
                  <p className="text-gray-600">Interactive mobile experience</p>
                </div>
                
                <div className="flex justify-center">
                  <DMobileInterface />
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-lg font-bold text-blue-600">iOS</div>
                    <div className="text-xs text-gray-600">Compatible</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-lg font-bold text-green-600">Android</div>
                    <div className="text-xs text-gray-600">Compatible</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-lg font-bold text-purple-600">Web</div>
                    <div className="text-xs text-gray-600">Compatible</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Testimonials */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
              <Users className="w-6 h-6" />
              <span className="font-bold">REAL CUSTOMER EXPERIENCES</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              40+ Years of Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real farmers sharing real results from using Dryer Master across North America
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-green-100">
                <div className="text-2xl font-bold text-green-600">50,000+</div>
                <div className="text-sm text-gray-600">Happy Farmers</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-orange-100">
                <div className="text-2xl font-bold text-orange-600">{customerTestimonials.length}</div>
                <div className="text-sm text-gray-600">Customer Stories</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Scrollable Testimonials */}
          <div className="relative mb-12">
            {/* Navigation Arrows for Desktop */}
            <button 
              onClick={scrollLeft}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-green-50 transition-colors duration-200 border border-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={scrollRight}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-green-50 transition-colors duration-200 border border-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            <div 
              ref={scrollRef}
              className="overflow-x-auto pb-4 scroll-smooth px-4 lg:px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              <div className="flex gap-6 w-max">
                {customerTestimonials.map((customer, index) => (
                  <Link 
                    key={customer.id} 
                    href={`/customers/experiences/${customer.slug}`}
                    className="block w-80 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  >
                    {/* Header with Avatar and View Link */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{customer.name}</div>
                          <div className="text-gray-600 text-sm">{customer.location}</div>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                          <span>View Story</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                      "{customer.quote}"
                    </blockquote>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Operation</div>
                          <div className="font-medium text-green-600">{customer.crops} - {customer.volume}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Since</div>
                          <div className="font-medium text-primary">{customer.since}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Equipment Badge */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {customer.equipment}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-600 text-sm font-medium">
                          Read full story →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Enhanced Navigation Indicators */}
            <div className="flex justify-center mt-6">
              <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1 max-w-32 overflow-hidden">
                    {customerTestimonials.slice(0, 10).map((_, index) => (
                      <div key={index} className="w-2 h-2 bg-green-300 rounded-full"></div>
                    ))}
                    {customerTestimonials.length > 10 && (
                      <span className="text-xs text-gray-500 ml-1">+{customerTestimonials.length - 10}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 font-medium hidden sm:block">
                    Scroll to explore {customerTestimonials.length} stories • Click to read full details
                  </div>
                  <div className="text-sm text-gray-600 font-medium sm:hidden">
                    Swipe through {customerTestimonials.length} stories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action for More Stories */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-4">
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold">SUCCESS STORIES</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Want to Read More Success Stories?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover detailed customer experiences, installation photos, and in-depth interviews with farmers who've transformed their operations with Dryer Master.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 mb-6">
              <Link
                href="/customers/experiences"
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Read All Customer Stories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Share Your Story</span>
              </Link>
            </div>
            
            <div className="text-center text-gray-500 text-sm">
              <p>Join farmers from Michigan, Minnesota, Indiana, Ontario and across North America</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Farmer CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Stop Losing Money on Every Bushel?
              </h2>
              <p className="text-primary-100 mb-6 leading-relaxed">
                Join 50,000+ farmers who trust Dryer Master to protect their grain and their profits. 
                Get a custom quote and see exactly how much you could save.
              </p>
              
              <div className="flex flex-col gap-3 mb-6">
                <Link
                  href="/contact"
                  className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-dark transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call (519) 725-4700
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Quote
                </Link>
              </div>

              <div className="text-primary-200 text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Kitchener-Waterloo, Ontario • Since 1983</span>
                </div>
                <p>Free consultation • No obligation • Same-day response</p>
              </div>
            </div>

            {/* Dealer CTA Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-semibold">DEALER OPPORTUNITY</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Become an Authorized Dealer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Join our growing network of trusted dealers and expand your business with DryerMaster's innovative agricultural solutions.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-xs font-medium text-gray-700">Quick Application</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-xs font-medium text-gray-700">Exclusive Territory</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-xs font-medium text-gray-700">Ongoing Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/dealers"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/dealers"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
