import { generateMetadata as genMeta } from "@/lib/metadata";
import SupportContact from '../components/SupportContact';
import SupportNavigation from '../components/SupportNavigation';
import MoistureSensorSection from '../components/MoistureSensorSection';
import DryingControlSection from '../components/DryingControlSection';
import RemoteAccessSection from '../components/RemoteAccessSection';
import SupportResources from '../components/SupportResources';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { Settings } from 'lucide-react';

export const metadata = genMeta({
  title: "Support Centre - DryerMaster Technologies",
  description: "Get comprehensive technical support for DryerMaster products including troubleshooting guides, remote access help, and sensor calibration.",
  keywords: ["technical support", "troubleshooting", "moisture sensor", "DM510", "DM100", "remote access", "calibration"],
  canonical: "/support/help",
});

export default function Support() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Support Centre",
    "description": "Technical support and troubleshooting for DryerMaster grain drying equipment",
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
      
      <div id="top" className="min-h-screen py-8">
        {/* Hero Section */}
        <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
          <GlobalHeroCard>
            <GlobalHeroCardBadge 
              icon={<Settings size={20} className="text-secondary-1" />}
            >
              Support Centre
            </GlobalHeroCardBadge>
            <GlobalHeroCardTitle highlightText="Support">
              Technical
            </GlobalHeroCardTitle>
            <GlobalHeroCardDescription>
              Get comprehensive help with installation, troubleshooting, and technical questions for all DryerMaster products.
            </GlobalHeroCardDescription>
          </GlobalHeroCard>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Support Contact */}
          <SupportContact />

          {/* Navigation and Introduction */}
          <SupportNavigation />

          {/* Troubleshooting Sections */}
          <div className="space-y-8">
            <MoistureSensorSection />
            <DryingControlSection />
            <RemoteAccessSection />
            <SupportResources />
          </div>
        </div>

      </div>
    </>
  );
}