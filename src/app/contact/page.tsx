import { generateMetadata as genMeta } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";
import { Phone, Smartphone, Mail, MapPin, Clock, Users, Star, Globe, MessageCircle } from 'lucide-react';

export const metadata = genMeta({
  title: "Contact DryerMaster - Sales & Technical Support",
  description: "Contact DryerMaster Technologies for sales inquiries, technical support, and product information. Located in Kitchener, ON. Call 1-800-265-2757 or email info@dryermaster.com",
  keywords: ["contact dryer master", "technical support", "sales inquiry", "customer service", "agricultural support", "kitchener ontario"],
  canonical: "/contact",
});

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "DryerMaster Technologies Inc.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "115 Ardelt Ave., Building #2",
        "addressLocality": "Kitchener",
        "addressRegion": "ON",
        "postalCode": "N2C 2E1",
        "addressCountry": "CA"
      },
      "telephone": "1-519-725-4700",
      "email": "info@dryermaster.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "1-800-265-2757",
          "email": "info@dryermaster.com"
        },
        {
          "@type": "ContactPoint",
          "contactType": "technical support",
          "telephone": "1-519-725-4700",
          "email": "info@dryermaster.com"
        }
      ]
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
              <MessageCircle size={20} className="text-secondary-1" />
              <span className="text-sm font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Contact <span className="text-secondary-1">DryerMaster</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Whether you need technical support, product information, or want to become a dealer, our team is here to help you succeed.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>
                <div className="p-6 lg:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Main Contact Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Phone size={20} />
                    Contact Information
                  </h3>
                  <p className="text-white/90 text-sm">Ready to help you succeed</p>
                </div>
                <div className="p-6 space-y-4">
                  
                  {/* Phone */}
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">Phone</div>
                      <a href="tel:1-519-725-4700" className="text-blue-700 font-semibold hover:underline">
                        1.519.725.4700
                      </a>
                    </div>
                  </div>

                  {/* Toll Free */}
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Smartphone size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-green-600 font-medium uppercase tracking-wide">Toll Free</div>
                      <a href="tel:1-800-265-2757" className="text-green-700 font-semibold hover:underline">
                        1.800.265.2757
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-purple-600 font-medium uppercase tracking-wide">Email</div>
                      <a href="mailto:info@dryermaster.com" className="text-purple-700 font-semibold hover:underline">
                        info@dryermaster.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <MapPin size={20} />
                    Visit Our Office
                  </h3>
                  <p className="text-white/90 text-sm">Located in Kitchener, Ontario</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-gray-800 mb-2">DryerMaster Technologies Inc.</div>
                    <div className="text-gray-600 space-y-1">
                      <div>115 Ardelt Ave., Building #2</div>
                      <div>Kitchener, ON, Canada</div>
                      <div>N2C 2E1</div>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=115+Ardelt+Ave+Building+2+Kitchener+ON+N2C+2E1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-sm font-semibold hover:bg-secondary-dark transition-colors duration-300"
                  >
                    <Globe size={14} />
                    View on Maps
                  </a>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Clock size={20} />
                    Business Hours
                  </h3>
                  <p className="text-white/90 text-sm">When we&apos;re available</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-800">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-800">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Phone size={16} />
                      <span className="text-sm font-semibold">Phone Support: 8:00 AM - 10:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Careers Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Users size={20} />
                    Join Our Team
                  </h3>
                  <p className="text-white/90 text-sm">Build your career with us</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Be part of a growing company that&apos;s revolutionizing agricultural technology. We offer competitive benefits, growth opportunities, and a collaborative work environment.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Competitive salary & benefits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Professional development</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Innovative work environment</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-3">Interested in working with us?</p>
                    <p className="text-sm font-semibold text-primary">Select &quot;Careers &amp; Employment&quot; in the contact form above</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-primary-1 to-secondary-1 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Star size={18} />
                  Why Choose DryerMaster?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Farms Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">40+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Reliability</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}