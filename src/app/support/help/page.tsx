import { generateMetadata as genMeta } from "@/lib/metadata";
import SupportHero from '../components/SupportHero';
import SupportContact from '../components/SupportContact';
import SupportNavigation from '../components/SupportNavigation';
import MoistureSensorSection from '../components/MoistureSensorSection';
import DryingControlSection from '../components/DryingControlSection';
import RemoteAccessSection from '../components/RemoteAccessSection';
import SupportResources from '../components/SupportResources';

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
        <SupportHero />

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