import { generateMetadata as genMeta } from "@/lib/metadata";
import { Shield, Award, CheckCircle, FileText, Info } from 'lucide-react';

export const metadata = genMeta({
  title: "Privacy Policy - DryerMaster Technologies",
  description: "DryerMaster's commitment to protecting your privacy and personal information. Learn about our data practices and quality standards.",
  keywords: ["privacy policy", "data protection", "personal information", "quality standards", "ISO 9001"],
  canonical: "/privacy",
});

export default function Privacy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy policy and quality standards for DryerMaster Technologies",
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
              <Shield size={20} className="text-white" />
              <span className="text-sm font-semibold">Privacy & Quality</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Privacy <span className="text-blue-200">Policy</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our commitment to protecting your privacy and maintaining the highest quality standards.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Last Updated */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <div className="flex items-center gap-2 text-blue-800">
              <FileText size={20} />
              <span className="font-semibold">Last Updated: June 16, 2013</span>
            </div>
          </div>

          <div className="space-y-8">
            
            {/* Privacy Commitment */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <Shield size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">Our Privacy Commitment</h2>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-medium">
                  DryerMaster respects your privacy and our site visitors&apos; information. We do not share, sell, or rent any of the information collected to any third parties and do not intend to do so in the future.
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  If you request or submit information to us by sending an Email via info@dryermaster.com or by filling out a &quot;contact&quot; form, we may save your Email address as well as any other information you provide. This information may be used to contact you in the future by mail, Email, or phone to convey information about our solutions or services that we feel may benefit you. Your Email and other information will not be sold to any third party.
                </p>
              </div>
            </section>

            {/* Third-Party Information */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Collected by Others</h2>
              <p className="text-gray-600 leading-relaxed">
                This notice addresses only DryerMaster&apos;s website policy, and does not apply to sites that users access via links from our site. DryerMaster is not responsible for the information collecting policies of other sites, for the practices employed by websites linked to or from our website, or for the information or content contained therein. Often, links to other websites are provided solely on the basis that they may contain useful information for our visitors. Users are advised to review the privacy policy of other websites.
              </p>
            </section>

            {/* Data Management */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Managing Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-lg font-semibold text-gray-800">Updating, Correcting, and Deleting Personal Information</h3>
                <p className="leading-relaxed">
                  If you would like to have your personal information removed from our records, please send an Email to info@dryermaster.com with &quot;Remove personal information&quot; in the subject line.
                </p>
              </div>
            </section>

            {/* Legal Disclosure */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Disclosure</h2>
              <p className="text-gray-600 leading-relaxed">
                DryerMaster may disclose information when legally compelled to do so: when we, in good faith, believe that the law requires us to do so or for the protection of our legal rights.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Updates</h2>
              <p className="text-gray-600 leading-relaxed">
                Please note that DryerMaster reviews its privacy practices from time-to-time (i.e. to track technology and/or legal changes), and that these practices are subject to change. To ensure continuing familiarity with the most current version of our privacy policy, please bookmark and periodically review this page.
              </p>
            </section>

            {/* Quality Standards */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <Award size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">Quality Standards</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  DryerMaster prides itself on providing industry-leading real-time moisture monitoring devices with exceptional customer service. Our commitment to quality spans every aspect of our operations.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">ISO 9001:2015 Certification</h3>
                  <p className="text-blue-700">
                    Our Quality Management System is based on ISO 9001:2015 standards, demonstrating our management&apos;s commitment to continual improvement of DryerMaster products and processes.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle size={18} className="text-green-600" />
                    <span className="text-green-800 text-sm font-medium">Real-time monitoring technology</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle size={18} className="text-green-600" />
                    <span className="text-green-800 text-sm font-medium">Continual product improvement</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle size={18} className="text-green-600" />
                    <span className="text-green-800 text-sm font-medium">Exceptional customer service</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle size={18} className="text-green-600" />
                    <span className="text-green-800 text-sm font-medium">Reliable product development</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
              <div className="space-y-2 text-gray-700">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> info@dryermaster.com</p>
                  <p><strong>Phone:</strong> 1-519-725-4700</p>
                  <p><strong>Toll Free:</strong> 1-800-265-2757</p>
                  <p><strong>Address:</strong> 115 Ardelt Ave., Building #2, Kitchener, ON, Canada N2C 2E1</p>
                </div>
              </div>
            </section>

            {/* Legal Notice */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-2">
                <Info size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-800 font-medium mb-1">Legal Notice</p>
                  <p className="text-amber-700 text-sm">
                    This policy statement is made in the name of DryerMaster and is effective as of June 16, 2013. This statement does not create an agreement between DryerMaster and users, and as such, does not create any legal rights for any party.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}