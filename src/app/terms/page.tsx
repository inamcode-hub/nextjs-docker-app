import { generateMetadata as genMeta } from "@/lib/metadata";
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export const metadata = genMeta({
  title: "Terms of Service - DryerMaster Technologies",
  description: "Terms of service and conditions for using DryerMaster website and services. Learn about our service terms, limitations, and user responsibilities.",
  keywords: ["terms of service", "website terms", "service conditions", "user agreement", "legal terms"],
  canonical: "/terms",
});

export default function Terms() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of service and conditions for DryerMaster Technologies",
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
        <div className="relative bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-3xl p-8 md:p-16 mb-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto overflow-hidden">
          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Scale size={20} className="text-white" />
              <span className="text-sm font-semibold">Legal Terms</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Terms of <span className="text-gray-300">Service</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Last Updated */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <div className="flex items-center gap-2 text-blue-800">
              <FileText size={20} />
              <span className="font-semibold">Last Updated: December 2024</span>
            </div>
          </div>

          <div className="space-y-8">
            
            {/* Acceptance of Terms */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the DryerMaster Technologies Inc. website (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Permission is granted to temporarily download one copy of the materials on DryerMaster&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by DryerMaster at any time.
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle size={24} className="text-amber-600 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">3. Disclaimer</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  The materials on DryerMaster&apos;s website are provided on an &apos;as is&apos; basis. DryerMaster makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  Further, DryerMaster does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </section>

            {/* Limitations */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall DryerMaster Technologies Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DryerMaster&apos;s website, even if DryerMaster or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            {/* User Conduct */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. User Conduct</h2>
              <div className="space-y-4 text-gray-600">
                <p>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Harassing or causing distress or inconvenience to any other user</li>
                  <li>Transmitting obscene or offensive content</li>
                  <li>Disrupting the normal flow of dialogue within our website</li>
                  <li>Attempting to gain unauthorized access to secure areas of the website</li>
                  <li>Using the website for any commercial or business purposes without our express written consent</li>
                </ul>
              </div>
            </section>

            {/* Product Information */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Product Information</h2>
              <p className="text-gray-600 leading-relaxed">
                DryerMaster attempts to be as accurate as possible in product descriptions and specifications. However, we do not warrant that product descriptions, specifications, or other content is accurate, complete, reliable, current, or error-free. All products are subject to availability and may be discontinued without notice. Product specifications may change without notice.
              </p>
            </section>

            {/* Privacy */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <Shield size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">7. Privacy</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices. Our privacy policy is incorporated by reference into these terms of service.
              </p>
              <div className="mt-4">
                <a 
                  href="/privacy" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  <Shield size={16} />
                  View Privacy Policy
                </a>
              </div>
            </section>

            {/* Modifications */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Revisions and Errata</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials appearing on DryerMaster&apos;s website could include technical, typographical, or photographic errors. DryerMaster does not warrant that any of the materials on its website are accurate, complete, or current. DryerMaster may make changes to the materials contained on its website at any time without notice. However, DryerMaster does not make any commitment to update the materials.
              </p>
            </section>

            {/* Governing Law */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Ontario, Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
              <div className="space-y-2 text-gray-700">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> info@dryermaster.com</p>
                  <p><strong>Phone:</strong> 1-519-725-4700</p>
                  <p><strong>Toll Free:</strong> 1-800-265-2757</p>
                  <p><strong>Address:</strong> 115 Ardelt Ave., Building #2, Kitchener, ON, Canada N2C 2E1</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}