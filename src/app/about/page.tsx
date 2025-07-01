import { generateMetadata as genMeta } from "@/lib/metadata";
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import ServerStatsSection from '@/components/ServerStatsSection';
import { Building2, Target, Calendar, Award, MapPin, Users, TrendingUp, CheckCircle } from 'lucide-react';
import LiveMonitoringCards from './LiveMonitoringCards';

export const metadata = genMeta({
  title: "About Dryer Master - Leading Grain Drying Technology Since 1983",
  description: "Learn about Dryer Master's 40+ years of innovation in grain drying control systems. Located in Kitchener-Waterloo, Ontario, serving customers worldwide with smart moisture monitoring solutions.",
  keywords: ["about dryer master", "grain drying technology", "moisture control systems", "agricultural innovation", "Kitchener-Waterloo", "grain industry leader"],
  canonical: "/about",
});

export default function About() {

  const recentEvents = [
    { year: "2021", event: "Dryer Master introduces its Moisture Monitor Pro and DM100 products." },
    { year: "2020", event: "Dryer Master debuts a model of its moisture sensor designed for intrinsically safe environments." },
    { year: "2019", event: "Several new customers adopt the DM510EC drying control system for integration into their offerings." },
    { year: "2018", event: "Dryer Master successfully achieves ISO 9001:2015 certification." },
    { year: "2018", event: "Dryer Master adds a second model of its outlet moisture sensor chute with rotary feed." },
    { year: "2017", event: "Dryer Master introduces an outlet moisture sensor chute with a rotary feed." },
    { year: "2016", event: "Dryer Master introduces major enhancements to its DM Mobile remote access software." },
    { year: "2015", event: "Dryer Moisture Systems selected as a finalist for the 2015 Ontario Export Awards." },
    { year: "2015", event: "Dryer Master debuts DM-Mobile, giving dryer operators real time drying control on their smart phone, tablet or PC." },
    { year: "2014", event: "Record year for Dryer Master as new dryer buyers love the integrated approach." },
    { year: "2013", event: "Dryer Master delivers record number of systems into the grain industry, both in North American and international markets." },
    { year: "2012", event: "A record year for Dryer Master as dryer manufacturers increasingly see the benefits of offering Dryer Master on new dryer sales." },
    { year: "2011", event: "Dryer Master introduces a new OEM solution that integrates smoothly with Neco dryers." },
    { year: "2011", event: "Dryer Master introduces stand alone moisture monitoring solutions for real time moisture information." },
    { year: "2010", event: "Dryer Master selected as sole supplier providing moisture control solutions to new elevators in China under their 5 year plan." },
    { year: "2010", event: "Wolf Seltner, one of the original developers of Dryer Master, takes over as President and CEO." }
  ];

  const stats = [
    { number: "40+", label: "Years of Innovation", icon: Calendar },
    { number: "50,000+", label: "Farms Served", icon: Users },
    { number: "1983", label: "Founded", icon: Building2 },
    { number: "Global", label: "Reach", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <GlobalHeroCard>
          <GlobalHeroCardBadge 
            icon={<Building2 size={20} className="text-secondary-1" />}
          >
            Since 1983
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle highlightText="Dryer Master">
            About
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            Leading the grain drying industry with innovative moisture monitoring and control solutions for over 40 years.
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </div>

      {/* Stats Section */}
      <ServerStatsSection stats={stats} />

      {/* Location & Company Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <MapPin size={24} />
                Our Location
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Dryer Master is based in <strong>Kitchener-Waterloo, Ontario</strong> - right where Canada&apos;s corn belt meets Canada&apos;s Technology Hub.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our head office is just minutes away from both Canada&apos;s largest year-round Farmer&apos;s Market and one of Canada&apos;s top engineering universities, putting us at the heart of agricultural innovation.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                <MapPin size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features - Live Monitoring Dashboard Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Real-Time Monitoring System</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Live dashboard showing actual dryer performance with our advanced moisture monitoring technology.
          </p>
        </div>
        
        <LiveMonitoringCards />

        {/* Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#5cb85c' }}></div>
              <div className="text-sm font-medium text-gray-700">Inlet Sensor: Active</div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Continuous real-time monitoring</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#428bca' }}></div>
              <div className="text-sm font-medium text-gray-700">Outlet Control: Optimal</div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Within target range ±0.1%</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#f0ad4e' }}></div>
              <div className="text-sm font-medium text-gray-700">Auto Discharge: Running</div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Predictive algorithm engaged</div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">What We Do</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              At Dryer Master we deliver <strong>smart tools to simplify and improve process management</strong>.
            </p>
            
            <p>
              More than 30 years ago a research and development team got together to solve a major problem in the grain industry. Farmers and elevators were losing grain and money from over and under drying their grain. The challenge was to find a way to help dryer operators dry more grain closer to their target moisture.
            </p>
            
            <p>
              The solution that emerged had two parts. First, to get a better understanding of what was going on in the dryer, the team developed <strong>rugged, dependable in-line moisture sensors</strong> to provide continuous real-time moisture information. These sensors were then placed in the product flow - one at the inlet to the dryer and one at the outlet.
            </p>
            
            <p>
              This valuable information made it possible to build computer models of what was happening in the dryer and then to continually update these models as conditions changed.
            </p>
            
            <div className="bg-gradient-to-br from-primary-1 to-secondary-1 p-6 rounded-xl border border-primary/10">
              <p className="font-semibold text-primary mb-2">Industry Leadership Since 1983</p>
              <p>
                When these two technologies were combined, Dryer Master was able to introduce its first drying control systems to the North American grain industry in <strong>1983</strong>. Since then, our experience has allowed us to continually enhance and improve these technologies.
              </p>
            </div>
            
            <p>
              Today Dryer Master is the <strong>industry leader for moisture monitoring and control</strong> within the ag industry and has expanded the application of its technology into a range of other industries including pet food, coffee, and engineered wood products.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-green-800 font-medium">Consistent Product Quality</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <CheckCircle size={20} className="text-blue-600" />
                <span className="text-blue-800 font-medium">Reduced Energy Costs</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <CheckCircle size={20} className="text-amber-600" />
                <span className="text-amber-800 font-medium">Peace of Mind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Recent Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key milestones and innovations that have shaped our journey and the grain drying industry.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>
          
          <div className="space-y-8">
            {recentEvents.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{event.year}</span>
                </div>
                
                {/* Event content */}
                <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-secondary mb-2">{event.year}</div>
                      <p className="text-gray-700 leading-relaxed">{event.event}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Learn More?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us to discover how Dryer Master&apos;s innovative solutions can improve your grain drying operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Building2 size={16} />
              Contact Us
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Target size={16} />
              View Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}