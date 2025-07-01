import { generateMetadata as genMeta } from "@/lib/metadata";
import VideoGallery from "@/components/VideoGallery";
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
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
        <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
          <GlobalHeroCard>
            <GlobalHeroCardBadge 
              icon={<Video size={20} className="text-secondary-1" />}
            >
              Video Library
            </GlobalHeroCardBadge>
            <GlobalHeroCardTitle highlightText="Product Videos">
              Training &
            </GlobalHeroCardTitle>
            <GlobalHeroCardDescription>
              Master your DryerMaster systems with our comprehensive video tutorials, product demonstrations, and training materials.
            </GlobalHeroCardDescription>
          </GlobalHeroCard>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">13</div>
              <div className="text-sm text-gray-600">Training Videos</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
              <div className="text-sm text-gray-600">Product Categories</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">40+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">HD</div>
              <div className="text-sm text-gray-600">Quality Videos</div>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <VideoGallery />

        {/* YouTube Channel CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
          <div className="bg-gradient-to-br from-white via-gray-50 to-red-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
            <div className="flex flex-col lg:flex-row items-center gap-12 p-12">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                  <Play size={36} className="text-white ml-1" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Video size={16} />
                  <span>Official YouTube Channel</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 leading-tight">
                  Watch on <span className="text-red-600">YouTube</span>
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 mb-6 max-w-2xl">
                  All DryerMaster training videos are available on our official YouTube channel. Subscribe for the latest updates and new training content.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 rounded-full px-4 py-2 border border-gray-200">
                    <Play size={14} className="text-red-500" />
                    <span className="font-medium">Full Video Library</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 rounded-full px-4 py-2 border border-gray-200">
                    <Video size={14} className="text-red-500" />
                    <span className="font-medium">HD Quality</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 rounded-full px-4 py-2 border border-gray-200">
                    <Users size={14} className="text-red-500" />
                    <span className="font-medium">Subscribe for Updates</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a 
                  href="https://www.youtube.com/channel/UCenJ1moMte_eeuIr_k6a6uA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Play size={16} />
                  Visit YouTube Channel
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border-2 border-gray-300 text-gray-700 bg-white rounded-xl hover:border-red-500 hover:text-red-600 hover:scale-105 transition-all duration-300 shadow-md"
                >
                  <Video size={16} />
                  Request Training
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Need Additional Training?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team provides personalized training sessions and can create custom videos for your specific needs. Contact us for one-on-one support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Play size={14} />
                <span>Custom Training</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Users size={14} />
                <span>One-on-One Support</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <GraduationCap size={14} />
                <span>Certification Programs</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Video size={16} />
                Request Training
              </a>
              <a
                href="/support"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Users size={16} />
                Get Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}