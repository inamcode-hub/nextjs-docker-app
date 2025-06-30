import { generateMetadata as genMeta } from "@/lib/metadata";
import { Accessibility, Eye, Keyboard, Volume2, MousePointer, Monitor, Users, Mail } from 'lucide-react';

export const metadata = genMeta({
  title: "Accessibility Statement - DryerMaster Technologies",
  description: "DryerMaster is committed to making our website accessible to all users. Learn about our accessibility features, standards compliance, and how to get assistance.",
  keywords: ["accessibility", "ADA compliance", "web accessibility", "WCAG", "assistive technology", "inclusive design"],
  canonical: "/accessibility",
});

export default function AccessibilityPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Accessibility Statement",
    "description": "Accessibility commitment and features for DryerMaster Technologies website",
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
        <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 mb-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto overflow-hidden">
          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Accessibility size={20} className="text-white" />
              <span className="text-sm font-semibold">Accessibility</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Accessibility <span className="text-green-200">Statement</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We&apos;re committed to making our website accessible and inclusive for all users, regardless of ability or technology.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Commitment Statement */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Users size={24} className="text-blue-600 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                DryerMaster Technologies Inc. is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>
              <p>
                We believe that technology should be inclusive and accessible to all users, including those who rely on assistive technologies such as screen readers, keyboard navigation, voice recognition software, and other accessibility tools.
              </p>
            </div>
          </section>

          <div className="space-y-8">
            
            {/* Standards Compliance */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Accessibility Standards</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">WCAG 2.1 Guidelines</h3>
                  <p className="text-blue-700 mb-4">
                    Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines explain how to make web content more accessible for people with disabilities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-lg p-3 mb-2">
                        <Eye size={24} className="mx-auto" />
                      </div>
                      <div className="text-sm font-semibold text-blue-800">Perceivable</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-lg p-3 mb-2">
                        <MousePointer size={24} className="mx-auto" />
                      </div>
                      <div className="text-sm font-semibold text-blue-800">Operable</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-lg p-3 mb-2">
                        <Monitor size={24} className="mx-auto" />
                      </div>
                      <div className="text-sm font-semibold text-blue-800">Understandable</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-lg p-3 mb-2">
                        <Users size={24} className="mx-auto" />
                      </div>
                      <div className="text-sm font-semibold text-blue-800">Robust</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility Features */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Keyboard Navigation */}
                <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
                  <div className="flex items-center gap-3 mb-4">
                    <Keyboard size={24} className="text-purple-600" />
                    <h3 className="text-lg font-bold text-purple-800">Keyboard Navigation</h3>
                  </div>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• Full keyboard accessibility for all interactive elements</li>
                    <li>• Logical tab order throughout the website</li>
                    <li>• Visible focus indicators</li>
                    <li>• Skip navigation links</li>
                  </ul>
                </div>

                {/* Screen Reader Support */}
                <div className="border border-green-200 rounded-xl p-6 bg-green-50">
                  <div className="flex items-center gap-3 mb-4">
                    <Volume2 size={24} className="text-green-600" />
                    <h3 className="text-lg font-bold text-green-800">Screen Reader Support</h3>
                  </div>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Descriptive alt text for images</li>
                    <li>• Proper heading structure</li>
                    <li>• ARIA labels and descriptions</li>
                    <li>• Semantic HTML markup</li>
                  </ul>
                </div>

                {/* Visual Design */}
                <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye size={24} className="text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-800">Visual Design</h3>
                  </div>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• High contrast color schemes</li>
                    <li>• Scalable text up to 200%</li>
                    <li>• Clear visual hierarchy</li>
                    <li>• Non-reliance on color alone for information</li>
                  </ul>
                </div>

                {/* Interactive Elements */}
                <div className="border border-orange-200 rounded-xl p-6 bg-orange-50">
                  <div className="flex items-center gap-3 mb-4">
                    <MousePointer size={24} className="text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-800">Interactive Elements</h3>
                  </div>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• Large click targets (minimum 44px)</li>
                    <li>• Clear form labels and instructions</li>
                    <li>• Error identification and suggestions</li>
                    <li>• Consistent navigation patterns</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Assistive Technologies */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Supported Assistive Technologies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our website is designed to be compatible with common assistive technologies, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Screen Readers</h3>
                    <ul className="text-sm space-y-1">
                      <li>• NVDA (Windows)</li>
                      <li>• JAWS (Windows)</li>
                      <li>• VoiceOver (macOS/iOS)</li>
                      <li>• TalkBack (Android)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Other Tools</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Voice recognition software</li>
                      <li>• Switch navigation</li>
                      <li>• Eye-tracking devices</li>
                      <li>• Magnification software</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Ongoing Efforts */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Accessibility Efforts</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We continuously work to improve the accessibility of our website through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Regular accessibility audits and testing</li>
                  <li>User testing with assistive technology users</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>Implementation of user feedback and suggestions</li>
                  <li>Staying current with accessibility standards and guidelines</li>
                  <li>Third-party accessibility consultations</li>
                </ul>
              </div>
            </section>

            {/* Known Issues */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Known Issues & Limitations</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  While we strive for full accessibility, we acknowledge that some areas may still need improvement:
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <ul className="space-y-2 text-amber-800">
                    <li>• Some third-party embedded content (such as videos) may have limited accessibility features</li>
                    <li>• Complex interactive elements are continuously being improved</li>
                    <li>• Legacy content is being gradually updated to meet current standards</li>
                  </ul>
                </div>
                <p className="text-sm">
                  We are actively working to address these issues and welcome your feedback to help us prioritize improvements.
                </p>
              </div>
            </section>

            {/* Feedback and Contact */}
            <section className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <Mail size={24} className="text-primary mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-primary">Accessibility Feedback</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please let us know:
                </p>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Methods:</h3>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> info@dryermaster.com</p>
                    <p><strong>Phone:</strong> 1-519-725-4700</p>
                    <p><strong>Toll Free:</strong> 1-800-265-2757</p>
                    <p><strong>Address:</strong> 115 Ardelt Ave., Building #2, Kitchener, ON, Canada N2C 2E1</p>
                  </div>
                </div>
                <p className="text-sm">
                  We aim to respond to accessibility feedback within 2 business days and will work with you to provide the information or assistance you need.
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-600">
                <strong>This accessibility statement was last updated:</strong> December 2024
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We review and update this statement regularly to reflect our ongoing accessibility efforts.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}