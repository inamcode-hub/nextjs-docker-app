import { Settings } from 'lucide-react';
import { SectionAccordion, AccordionItem } from '@/components/SupportAccordion';

export default function DryingControlSection() {
  return (
    <SectionAccordion
      id="drying-control"
      title="Drying Control related"
      icon={<Settings size={24} />}
    >
      <AccordionItem
        id="ready-meaning"
        question="What does READY mean?"
        defaultOpen={true}
      >
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
      </AccordionItem>

      <AccordionItem
        id="not-going-ready"
        question="The DM510 is not going READY"
      >
        <p className="text-gray-600 leading-relaxed mb-4">
          On initial startup the DM510 may take up to three dryer loads to go Ready. Under normal day to day operating conditions it will go Ready much faster than this.
        </p>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            Check which of the three conditions to go Ready have not yet been met. For example, make sure that there are no Alarms. If the outlet moisture is too far from the setpoint try to bring it into range by adjusting the dryer discharge rate. If the predicted moisture is too far from the actual moisture, observe whether it is getting closer over time. If not, contact the Support Center.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        id="suggested-rate"
        question="What is the suggested rate?"
      >
        <p className="text-gray-600 leading-relaxed mb-4">
          When the DM510 is Ready for Automatic it will provide a &quot;suggested rate&quot; on the screen. This is the approximate rate at which the DM510 would run if you switched to Automatic control. The actual rate may be a bit different, and once in Automatic, the rate will continue to adjust.
        </p>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            If you want to see the suggested rate before the DM510 is Ready, press the Support key, then 1) Diagnostics, and then the Up Arrow twice. The displayed suggested rate will continue to change as the DM510 gets more information about how your dryer is drying.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        id="auto-first-load"
        question="What is AUTO FIRST LOAD?"
      >
        <p className="text-gray-600 leading-relaxed mb-4">
          When you start up for the day the DM510 does not have good current information about what is in the dryer. It does not know what has happened to that grain since you last turned off the dryer. So, for the first dryer load, the DM510 keeps its drying model from the previous drying session and uses this to determine the appropriate discharge rate. Once the first new grain for the day reaches the outlet of the dryer the DM510 again has good current information, and so start to use this information to update its drying model. At this point the AUTO FIRST LOAD message disappears.
        </p>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            In general, if your drying conditions are similar to the previous day, then AUTO FIRST LOAD model should still be accurate. However, if your drying conditions (temperature/humidity/wind) have changed significantly, then you would be advised to wait for a dryer load before switching to Automatic. As always, check that the &quot;suggested rate&quot; is reasonable before going into Automatic.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        id="predicted-moisture"
        question="How do I see the predicted moisture?"
      >
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            On the DM510 panel, press the MODE key, and then #4 for Controller status. The DM510 is always predicting the moisture exiting the dryer and then comparing it to its estimate. The predicted moisture is the current estmate of the grain leaving the dryer. If it is different than the actual moisture the DM510 adjusts its model to try to bring its predictions into line with the actual readings.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        id="speed-limits"
        question="How do I set the maximum and minimum speeds for Automatic control?"
      >
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            On the DM510 panel, press the SETTINGS key. Then #1 for Supervisor Setup. The password is 123 then Enter. Press #1 for Control Limits. You can enter the maximum and minimum speeds you want to let the DM510 use in Automatic mode.
          </p>
        </div>
      </AccordionItem>
    </SectionAccordion>
  );
}