import { generateMetadata as genMeta } from "@/lib/metadata";
import { Phone, Mail, Settings, Target, Smartphone, Wifi, MessageSquare, AlertTriangle, CheckCircle, Clock, Monitor, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionAccordion, AccordionItem } from '@/components/SupportAccordion';

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
        <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 mb-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto overflow-hidden">
          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Settings size={20} className="text-white" />
              <span className="text-sm font-semibold">Support Centre</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Technical <span className="text-green-200">Support</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get comprehensive help with installation, troubleshooting, and technical questions for all DryerMaster products.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Support Contact */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Technical Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <Phone size={32} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">North America (Toll Free)</h3>
                <a href="tel:1-888-318-0009" className="text-xl font-bold text-primary hover:text-primary-dark">
                  1-888-318-0009
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <Phone size={32} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Other Locations</h3>
                <a href="tel:519-725-4700" className="text-xl font-bold text-primary hover:text-primary-dark">
                  519-725-4700
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <Mail size={32} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
                <a href="mailto:info@dryermaster.com" className="text-lg font-bold text-primary hover:text-primary-dark">
                  info@dryermaster.com
                </a>
              </div>
            </div>
          </div>

          {/* Page Introduction */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Support Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most commonly asked support questions are listed below:
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Jump to Section</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="#moisture-sensor"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-100 transition-all duration-200"
              >
                <Target size={20} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Moisture Sensor</h4>
                  <p className="text-sm text-gray-600">5 Questions</p>
                </div>
              </a>
              
              <a
                href="#drying-control"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-100 transition-all duration-200"
              >
                <Settings size={20} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Drying Control</h4>
                  <p className="text-sm text-gray-600">6 Questions</p>
                </div>
              </a>
              
              <a
                href="#remote-access"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-100 transition-all duration-200"
              >
                <Smartphone size={20} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Remote Access</h4>
                  <p className="text-sm text-gray-600">3 Questions</p>
                </div>
              </a>
            </div>
          </div>

          {/* Troubleshooting Sections */}
          <div className="space-y-8">
            
            {/* Moisture Sensor Issues */}
            <SectionAccordion
              id="moisture-sensor"
              title="Moisture Sensor Related"
              icon={<Target size={24} />}
              defaultOpen={true}
            >
              <AccordionItem
                id="sensor-empty"
                question="The sensor is reading \"Empty\"."
              >
                <p className="text-gray-600 leading-relaxed">
                  Ensure that there is in fact product next to the sensor, and that the sensor is fully covered. It does happen that things can get hung up above or on the sensor resulting in the sensor being not fully covered by grain. In these cases the sensor can read empty, or give an unusually low moisture reading. If it is a brand new sensor, make sure that the &quot;remove after installation&quot; jumper on the circuit board has been removed.
                </p>
              </AccordionItem>

              <AccordionItem
                id="sensor-voltage-full"
                question="The sensor voltage is reading full scale."
              >
                <p className="text-gray-600 leading-relaxed">
                  New sensors are shipped with a shorting jumper to protect the sensor. After installation this jumper needs to be removed. There is a yellow tag attached to the jumper that says &quot;remove after installation&quot;. If the jumper is not removed the sensor voltage will read full scale on the diagnostics screen (although the DM510 main screen will display an &quot;empty&quot; message).
                </p>
              </AccordionItem>

              <AccordionItem
                id="temperature-frozen"
                question="The product temperature reads \"Frozen\"."
              >
                <p className="text-gray-600 leading-relaxed">
                  There is likely a problem with the temperature sensor on the sensor. Contact the Support Center for more information.
                </p>
              </AccordionItem>

              <AccordionItem
                id="outlet-calibration"
                question="What is the proper calibration procedure for the outlet sensor?"
              >
                <p className="text-gray-600 leading-relaxed mb-4">
                  The outlet sensor calibration procedure is a critical step to ensure accurate moisture readings. Follow these exact steps:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Ensure that product is flowing past the sensor</li>
                    <li>Press the green calibration button on the DM510 (it will flash for 30 seconds)</li>
                    <li>During this 30 second period, take a gradual sample of the grain into a bucket</li>
                    <li>Test 3-5 manual samples from your bucket using your moisture tester</li>
                    <li>Calculate the average reading from your manual moisture tests</li>
                    <li>Enter this average reading on the DM510 when prompted</li>
                    <li>The DM510 will calculate the required adjustment automatically</li>
                    <li>Press Enter to complete the calibration process</li>
                  </ol>
                </div>
              </AccordionItem>

              <AccordionItem
                id="inlet-calibration"
                question="How do I calibrate the inlet sensor?"
              >
                <p className="text-gray-600 leading-relaxed mb-4">
                  We know that for most sites it may be very difficult to get a good test moisture sample of the inlet grain. As a result the DM510 uses the change in the inlet moisture for its calculations. If you are within 1.5% or so of your estimated inlet moisture reading then you do not need to calibrate.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    To calibrate, press the calibrate button, select &quot;Inlet&quot;, and follow the screen instructions. Remember the maximum change from any calibration entry is 0.5%. If you are in AUTO you will want to calibrate the inlet gradually as the DM510 will look on a calibration as a real moisture change and react accordingly.
                  </p>
                </div>
              </AccordionItem>
            </SectionAccordion>

            {/* Drying Control Issues */}
            <section id="drying-control" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden scroll-mt-24">
              <div className="bg-gray-50 border-b border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <Settings size={24} className="text-primary" />
                  <h2 className="text-xl font-bold text-gray-800">Drying Control related</h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div id="ready-meaning" className="border-b border-gray-200 pb-6 scroll-mt-24">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">What does READY mean?</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      The Ready light goes on when three conditions have been met:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <ol className="list-decimal list-inside text-gray-700 space-y-1">
                        <li>There are no alarms.</li>
                        <li>The outlet moisture is within 2.0% of the setpoint.</li>
                        <li>The predicted moisture is within 2.0% of the actual outlet moisture.</li>
                      </ol>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      You can only go into AUTO when the Ready light is on. Before going to AUTO you should always verify that the suggested rate displayed on the screen is reasonable. If is not yet reasonable, you should wait until you feel it is reasonable before switching to Auto mode.
                    </p>
                  </div>
                
                <div className="bg-white rounded-2xl border border-blue-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">The DM510 is not going READY</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        On initial startup the DM510 may take up to three dryer loads to go Ready. Under normal day to day operating conditions it will go Ready much faster than this.
                      </p>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="text-gray-700 text-sm">
                          Check which of the three conditions to go Ready have not yet been met. For example, make sure that there are no Alarms. If the outlet moisture is too far from the setpoint try to bring it into range by adjusting the dryer discharge rate. If the predicted moisture is too far from the actual moisture, observe whether it is getting closer over time. If not, contact the Support Center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl border border-orange-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Target size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">What is the suggested rate?</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        When the DM510 is Ready for Automatic it will provide a &quot;suggested rate&quot; on the screen. This is the approximate rate at which the DM510 would run if you switched to Automatic control. The actual rate may be a bit different, and once in Automatic, the rate will continue to adjust.
                      </p>
                      <div className="bg-orange-50 rounded-xl p-4">
                        <p className="text-gray-700 text-sm">
                          If you want to see the suggested rate before the DM510 is Ready, press the Support key, then 1) Diagnostics, and then the Up Arrow twice. The displayed suggested rate will continue to change as the DM510 gets more information about how your dryer is drying.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl border border-purple-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Settings size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">What is AUTO FIRST LOAD?</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        When you start up for the day the DM510 does not have good current information about what is in the dryer. It does not know what has happened to that grain since you last turned off the dryer. So, for the first dryer load, the DM510 keeps its drying model from the previous drying session and uses this to determine the appropriate discharge rate. Once the first new grain for the day reaches the outlet of the dryer the DM510 again has good current information, and so start to use this information to update its drying model. At this point the AUTO FIRST LOAD message disappears.
                      </p>
                      <div className="bg-purple-50 rounded-xl p-4">
                        <p className="text-gray-700 text-sm">
                          In general, if your drying conditions are similar to the previous day, then AUTO FIRST LOAD model should still be accurate. However, if your drying conditions (temperature/humidity/wind) have changed significantly, then you would be advised to wait for a dryer load before switching to Automatic. As always, check that the &quot;suggested rate&quot; is reasonable before going into Automatic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl border border-indigo-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Monitor size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">How do I see the predicted moisture?</h3>
                      <div className="bg-indigo-50 rounded-xl p-4">
                        <p className="text-gray-700 text-sm">
                          On the DM510 panel, press the MODE key, and then #4 for Controller status. The DM510 is always predicting the moisture exiting the dryer and then comparing it to its estimate. The predicted moisture is the current estmate of the grain leaving the dryer. If it is different than the actual moisture the DM510 adjusts its model to try to bring its predictions into line with the actual readings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl border border-teal-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Settings size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">How do I set the maximum and minimum speeds for Automatic control?</h3>
                      <div className="bg-teal-50 rounded-xl p-4">
                        <p className="text-gray-700 text-sm">
                          On the DM510 panel, press the SETTINGS key. Then #1 for Supervisor Setup. The password is 123 then Enter. Press #1 for Control Limits. You can enter the maximum and minimum speeds you want to let the DM510 use in Automatic mode.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </section>

            {/* Remote Access Support */}
            <section id="remote-access" className="bg-gradient-to-br from-white to-green-50/30 rounded-3xl border border-green-200 shadow-xl overflow-hidden scroll-mt-24">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Smartphone size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Remote Access related</h2>
                    <p className="text-green-100">Mobile app setup and connectivity troubleshooting</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid gap-6">
                  <div id="not-connected" className="bg-white rounded-2xl border border-red-200 p-6 hover:shadow-lg transition-all duration-300 group scroll-mt-24">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Wifi size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">The my.dryermaster.com web page says &quot;not connected&quot;</h3>
                      <div className="bg-red-50 rounded-xl p-4">
                        <p className="text-gray-700 text-sm">
                          This indicates that there is no current connection between your DM510 and the cloud server. Your DM510 should connect automatically every few minutes. If you continue to see &quot;Not Connected&quot; after 5 minutes please contact the Support Center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl border border-yellow-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">I am not getting texts on alarms</h3>
                      <p className="text-gray-600 mb-3">
                        To receive alarm text messages you need to ensure that:
                      </p>
                      <div className="bg-yellow-50 rounded-xl p-4">
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Your phone number includes the country code (1 for North America)</li>
                          <li>You have set an appropriate alarm text time delay</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div id="mobile-app" className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 scroll-mt-24">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Smartphone size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">How to add DM Mobile as an App on your phone</h3>
                      <p className="text-gray-600 text-sm">Step-by-step installation guide for Android and iPhone devices</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                          <Smartphone size={16} className="text-white" />
                        </div>
                        <h4 className="font-bold text-green-800 text-lg">Android</h4>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-green-100">
                        <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                          <li>Ensure that you have no other Chrome pages open.</li>
                          <li>Open one single Chrome page.</li>
                          <li>Type &quot;my.dryermaster.com&quot; on the address bar (no &quot;www&quot;). Hit enter.</li>
                          <li>When the web page opens, click on the menu buttons on the top right-hand corner. The menu buttons look like three little dots on the top right corner of the screen.</li>
                          <li>The drop down menu will display.</li>
                          <li>Click on &apos;Add to Home Screen&apos;.</li>
                          <li>A pop up box will show up that says &quot;Add to Home Screen - Dryer Master Mobile&quot; Click on Add.</li>
                          <li>This will take you back to the main screen of your phone.</li>
                          <li>Locate the new DM Mobile App icon and click on it.</li>
                          <li>This will open the DM Mobile web page for you.</li>
                          <li>Enter your username and password that were provided with your DM510 manuals.</li>
                          <li>When you hit submit, there will be a pop-up box that asks if you&apos;d like &quot;Chrome to save the password&quot;. Click on &quot;yes&quot;.</li>
                          <li>Now you should be logged in to your dashboard.</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Smartphone size={16} className="text-white" />
                        </div>
                        <h4 className="font-bold text-blue-800 text-lg">iPhone</h4>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-blue-100">
                        <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                          <li>First, clear all of your open safari pages.</li>
                          <li>Go into Settings.</li>
                          <li>Under General Settings, look for Safari.</li>
                          <li>Under Safari, please ensure that Autofill is turned on for Username and Passwords.</li>
                          <li>Then go back to General Settings and look for Accounts and Passwords.</li>
                          <li>Under Accounts and Passwords, DM Mobile should not be there.</li>
                          <li>Close off all windows and come back to the main screen of the phone.</li>
                          <li>Open a Safari page and type in &quot;my.dryermaster.com&quot; on the web address, however please do NOT put &quot;www&quot; in front of the address.</li>
                          <li>Once the webpage opens, find the share icon on the phone screen.</li>
                          <li>Click on the share icon, and look for &quot;Add to Home Screen&quot; option.</li>
                          <li>Click on the &quot;Add to Home Screen&quot; option.</li>
                          <li>Enter your username and password that were provided with your DM510 manuals.</li>
                          <li>Now you should be logged in to your dashboard.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-4">
                  <Settings size={20} className="text-white" />
                  <span className="font-semibold text-white">Additional Resources</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Need More Help?</h2>
                <p className="text-blue-100">Explore our comprehensive support resources</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="/support/manuals"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Product Manuals</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">Download comprehensive manuals and documentation for all DryerMaster products</p>
                </a>
                
                <a
                  href="/support/videos"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Monitor size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Training Videos</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">Watch step-by-step installation and operation guides with visual demonstrations</p>
                </a>
                
                <a
                  href="/contact"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Contact Support</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">Get direct assistance from our experienced technical support team</p>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Floating Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="#top"
            className="bg-primary text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-dark"
            title="Back to top"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

        {/* Floating Navigation Menu */}
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
            <div className="space-y-2">
              <a
                href="#moisture-sensor"
                className="block p-2 rounded hover:bg-gray-100 transition-colors duration-200"
                title="Moisture Sensor"
              >
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </a>
              <a
                href="#drying-control"
                className="block p-2 rounded hover:bg-gray-100 transition-colors duration-200"
                title="Drying Control"
              >
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </a>
              <a
                href="#remote-access"
                className="block p-2 rounded hover:bg-gray-100 transition-colors duration-200"
                title="Remote Access"
              >
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}