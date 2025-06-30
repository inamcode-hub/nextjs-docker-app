import { generateMetadata as genMeta } from "@/lib/metadata";
import VideoGallery from "@/components/VideoGallery";
import { Video, Play, GraduationCap, Users } from 'lucide-react';

export const metadata = genMeta({
  title: "DryerMaster Video Library - Training & Product Videos",
  description: "Watch comprehensive training videos, product demonstrations, and installation guides for all DryerMaster systems including DM510, DM100, DM Mobile, and Moisture Sensors.",
  keywords: ["dryer master videos", "training videos", "product demonstrations", "installation guides", "DM510 training", "moisture sensor calibration", "grain drying tutorials"],
  canonical: "/support/videos",
});

export default function Videos() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "DryerMaster Training Videos",
    "description": "Comprehensive video library for DryerMaster agricultural drying systems",
    "publisher": {
      "@type": "Organization",
      "name": "DryerMaster Technologies Inc."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen py-8">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary rounded-3xl p-8 md:p-16 mb-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Video size={20} className="text-secondary-1" />
              <span className="text-sm font-semibold">Video Library</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Training & <span className="text-secondary-1">Product Videos</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Master your DryerMaster systems with our comprehensive video tutorials, product demonstrations, and training materials.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">13</h3>
              <p className="text-gray-600 font-medium">Training Videos</p>
              <p className="text-sm text-gray-500 mt-1">Step-by-step tutorials</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Play size={24} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">5</h3>
              <p className="text-gray-600 font-medium">Product Categories</p>
              <p className="text-sm text-gray-500 mt-1">All DryerMaster systems</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">40+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
              <p className="text-sm text-gray-500 mt-1">Industry expertise</p>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <VideoGallery />

        {/* YouTube Channel CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 p-12 text-white">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Play size={32} className="text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                  Watch on YouTube
                </h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6 max-w-2xl">
                  All DryerMaster training videos are available on our official YouTube channel. Subscribe for the latest updates and new training content.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Play size={14} />
                    <span>Full Video Library</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Video size={14} />
                    <span>HD Quality</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Users size={14} />
                    <span>Subscribe for Updates</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a 
                  href="https://www.youtube.com/channel/UCenJ1moMte_eeuIr_k6a6uA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white text-red-600 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  <Play size={16} />
                  Visit YouTube Channel
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border-2 border-white text-white bg-transparent rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                  <Video size={16} />
                  Request Training
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 p-12 text-white">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Video size={32} className="text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                  Need Additional Training?
                </h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6 max-w-2xl">
                  Our team provides personalized training sessions and can create custom videos for your specific needs. Contact us for one-on-one support.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Play size={14} />
                    <span>Custom Training</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Users size={14} />
                    <span>One-on-One Support</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <GraduationCap size={14} />
                    <span>Certification Programs</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white text-secondary rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  <Video size={16} />
                  Request Training
                </a>
                <a 
                  href="/support" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border-2 border-white text-white bg-transparent rounded-xl hover:bg-white hover:text-secondary transition-all duration-300"
                >
                  <Users size={16} />
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}