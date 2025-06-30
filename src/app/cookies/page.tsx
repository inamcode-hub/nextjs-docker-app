import { generateMetadata as genMeta } from "@/lib/metadata";
import { Cookie, Settings, Shield, Info, BarChart3, Globe } from 'lucide-react';

export const metadata = genMeta({
  title: "Cookie Policy - DryerMaster Technologies",
  description: "Learn about how DryerMaster uses cookies and similar technologies on our website. Understand your choices and control your cookie preferences.",
  keywords: ["cookie policy", "cookies", "website tracking", "privacy", "analytics", "preferences"],
  canonical: "/cookies",
});

export default function Cookies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy",
    "description": "Cookie policy and preferences for DryerMaster Technologies website",
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
        <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl p-8 md:p-16 mb-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto overflow-hidden">
          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Cookie size={20} className="text-white" />
              <span className="text-sm font-semibold">Cookie Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cookie <span className="text-orange-200">Policy</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Learn how we use cookies and similar technologies to improve your browsing experience.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Last Updated */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
            <div className="flex items-center gap-2 text-orange-800">
              <Info size={20} />
              <span className="font-semibold">Last Updated: December 2024</span>
            </div>
          </div>

          <div className="space-y-8">
            
            {/* What Are Cookies */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <Cookie size={24} className="text-orange-600 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">What Are Cookies?</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to site owners.
                </p>
                <p>
                  Cookies allow us to recognize your device and store some information about your preferences or past actions to improve your experience on our website.
                </p>
              </div>
            </section>

            {/* Types of Cookies */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border border-red-200 rounded-xl p-6 bg-red-50">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-red-800">Essential Cookies</h3>
                  </div>
                  <p className="text-red-700 mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation and access to secure areas.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Form functionality</li>
                    <li>Basic site navigation</li>
                  </ul>
                  <div className="mt-3 text-sm text-red-600 font-medium">
                    ✓ Always Active - Cannot be disabled
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
                  <div className="flex items-start gap-3 mb-3">
                    <BarChart3 size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-blue-800">Analytics Cookies</h3>
                  </div>
                  <p className="text-blue-700 mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-blue-700 text-sm">
                    <li>Page views and traffic analysis</li>
                    <li>Popular content identification</li>
                    <li>Website performance monitoring</li>
                    <li>User behavior patterns</li>
                  </ul>
                  <div className="mt-3 text-sm text-blue-600 font-medium">
                    ⚙️ Optional - You can opt out
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-green-200 rounded-xl p-6 bg-green-50">
                  <div className="flex items-start gap-3 mb-3">
                    <Settings size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-green-800">Functional Cookies</h3>
                  </div>
                  <p className="text-green-700 mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-green-700 text-sm">
                    <li>Language preferences</li>
                    <li>Region selection</li>
                    <li>Form data retention</li>
                    <li>Accessibility settings</li>
                  </ul>
                  <div className="mt-3 text-sm text-green-600 font-medium">
                    ⚙️ Optional - You can opt out
                  </div>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <Globe size={24} className="text-purple-600 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">Third-Party Services</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may use third-party services that set their own cookies. These services help us provide better functionality and understand how our website is used.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Third-party services we may use:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior insights</li>
                    <li><strong>YouTube:</strong> Video content embedding for training materials</li>
                    <li><strong>Contact Forms:</strong> Form processing and spam protection</li>
                  </ul>
                </div>
                <p className="text-sm">
                  Each third-party service has its own privacy policy and cookie practices. We recommend reviewing their policies for more information.
                </p>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Desktop Browsers</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Chrome: Settings → Privacy → Cookies</li>
                        <li>• Firefox: Options → Privacy → Cookies</li>
                        <li>• Safari: Preferences → Privacy → Cookies</li>
                        <li>• Edge: Settings → Privacy → Cookies</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Mobile Browsers</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• iOS Safari: Settings → Safari → Privacy</li>
                        <li>• Android Chrome: Settings → Site settings</li>
                        <li>• Samsung Internet: Settings → Privacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Info size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-amber-800 font-medium mb-1">Important Note</p>
                      <p className="text-amber-700 text-sm">
                        Disabling cookies may affect the functionality of our website. Some features may not work properly without cookies enabled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookie Retention</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Different types of cookies are stored for different lengths of time:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                    <div className="font-semibold text-red-800 mb-2">Session Cookies</div>
                    <div className="text-sm text-red-600">Deleted when you close your browser</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
                    <div className="font-semibold text-blue-800 mb-2">Persistent Cookies</div>
                    <div className="text-sm text-blue-600">Stored for up to 2 years</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
                    <div className="font-semibold text-green-800 mb-2">Preference Cookies</div>
                    <div className="text-sm text-green-600">Stored for up to 1 year</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Updates</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
              <p className="text-gray-600">
                We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Questions About Cookies?</h2>
              <div className="space-y-2 text-gray-700">
                <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> info@dryermaster.com</p>
                  <p><strong>Phone:</strong> 1-519-725-4700</p>
                  <p><strong>Toll Free:</strong> 1-800-265-2757</p>
                  <p><strong>Address:</strong> 115 Ardelt Ave., Building #2, Kitchener, ON, Canada N2C 2E1</p>
                </div>
                <div className="mt-6">
                  <a 
                    href="/privacy" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
                  >
                    <Shield size={16} />
                    View Privacy Policy
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}