import { generateMetadata as genMeta } from "@/lib/metadata";
import { FileText, Settings, Monitor, Target, Book } from 'lucide-react';
import ManualsClient from './ManualsClient';

export const metadata = genMeta({
  title: "Product Manuals - DryerMaster Technologies",
  description: "Download comprehensive manuals and documentation for all DryerMaster products including DM510, DM100, Moisture Monitor Pro, and sensors.",
  keywords: ["manuals", "documentation", "DM510", "DM100", "moisture monitor", "user guide", "installation guide"],
  canonical: "/support/manuals",
});

interface Manual {
  title: string;
  description: string;
  downloadUrl: string;
  category: string;
  icon: React.ReactNode;
  size?: string;
}

const manualsData: Manual[] = [
  // DM510 Manuals
  {
    title: "DM510 User's Guide",
    description: "Complete operations manual for the DM510 Computerized Grain Drying Control System.",
    downloadUrl: "/manuals/dm510/operations-manual-2023.pdf",
    category: "DM510",
    icon: <Book size={24} className="text-blue-600" />,
    size: "3.0 MB"
  },
  {
    title: "DM510 Installation Guide", 
    description: "Step-by-step installation instructions for the DM510 system.",
    downloadUrl: "/manuals/dm510/installation-manual-2023.pdf",
    category: "DM510",
    icon: <Settings size={24} className="text-blue-600" />,
    size: "3.1 MB"
  },
  {
    title: "DM510 Commissioning Guide",
    description: "Comprehensive commissioning procedures for optimal DM510 setup.",
    downloadUrl: "/manuals/dm510/commissioning-guide-2023.pdf",
    category: "DM510", 
    icon: <Settings size={24} className="text-blue-600" />,
    size: "1.3 MB"
  },
  {
    title: "DM510 Quick Guide",
    description: "Quick reference guide for DM510 operation and troubleshooting.",
    downloadUrl: "/manuals/dm510/quick-guide.pdf",
    category: "DM510",
    icon: <FileText size={24} className="text-blue-600" />,
    size: "159 KB"
  },
  {
    title: "DM510 - What You Should Also Know",
    description: "Additional important information and best practices for DM510 users.",
    downloadUrl: "/manuals/dm510/what-you-should-know-2019.pdf",
    category: "DM510",
    icon: <Book size={24} className="text-blue-600" />,
    size: "124 KB"
  },
  
  // Other Product Manuals
  {
    title: "DM100 Product Manual",
    description: "Complete manual for the DM100 grain drying control system.",
    downloadUrl: "/manuals/dm100/dm100-manual-2020.pdf",
    category: "DM100",
    icon: <Monitor size={24} className="text-purple-600" />,
    size: "3.4 MB"
  },
  {
    title: "Moisture Monitor Pro Manual",
    description: "User manual for the Moisture Monitor Pro (MMP) system.",
    downloadUrl: "/manuals/moisture-monitor-pro/moisture-monitor-pro-3.5.pdf",
    category: "Moisture Monitor Pro",
    icon: <Monitor size={24} className="text-orange-600" />,
    size: "2.8 MB"
  },
  
  // Sensor Information
  {
    title: "Real Time Moisture Sensor",
    description: "Technical specifications and installation guide for moisture sensors.",
    downloadUrl: "/manuals/sensors/real-time-moisture-sensor.pdf",
    category: "Sensors",
    icon: <Target size={24} className="text-teal-600" />,
    size: "2.5 MB"
  },
  {
    title: "Rotary Feed Chute Manual",
    description: "Installation and operation guide for rotary feed chutes.",
    downloadUrl: "/manuals/sensors/rotary-feed-chutes-2019.pdf",
    category: "Sensors",
    icon: <Target size={24} className="text-teal-600" />,
    size: "3.0 MB"
  },
];

const categories = ["All", "DM510", "DM100", "Moisture Monitor Pro", "Sensors"];

export default function Manuals() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Product Manuals",
    "description": "Download comprehensive manuals and documentation for DryerMaster products",
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
        <div className="relative bg-gradient-to-br from-blue-600 via-green-600 to-teal-600 rounded-3xl p-8 md:p-16 mb-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto overflow-hidden">
          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <FileText size={20} className="text-white" />
              <span className="text-sm font-semibold">Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Product <span className="text-blue-200">Manuals</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Download comprehensive manuals and documentation for all DryerMaster products.
            </p>
          </div>
        </div>

        <ManualsClient manualsData={manualsData} categories={categories} />
      </div>
    </>
  );
}