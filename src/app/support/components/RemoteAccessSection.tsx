import { Smartphone } from 'lucide-react';
import { SectionAccordion, AccordionItem } from '@/components/SupportAccordion';

export default function RemoteAccessSection() {
  return (
    <SectionAccordion
      id="remote-access"
      title="Remote Access related"
      icon={<Smartphone size={24} />}
    >
      <AccordionItem
        id="not-connected"
        question='The my.dryermaster.com web page says "not connected"'
      >
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            This indicates that there is no current connection between your DM510 and the cloud server. Your DM510 should connect automatically every few minutes. If you continue to see &quot;Not Connected&quot; after 5 minutes please contact the Support Center.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        id="alarm-texts"
        question="I am not getting texts on alarms"
      >
        <p className="text-gray-600 mb-3">
          To receive alarm text messages you need to ensure that:
        </p>
        <div className="bg-gray-50 rounded-lg p-4">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Your phone number includes the country code (1 for North America)</li>
            <li>You have set an appropriate alarm text time delay</li>
          </ul>
        </div>
      </AccordionItem>

      <AccordionItem
        id="mobile-app"
        question="How to add DM Mobile as an App on your phone"
        defaultOpen={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone size={20} className="text-primary" />
              <h4 className="font-bold text-gray-800 text-lg">Android</h4>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
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
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone size={20} className="text-primary" />
              <h4 className="font-bold text-gray-800 text-lg">iPhone</h4>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
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
      </AccordionItem>
    </SectionAccordion>
  );
}