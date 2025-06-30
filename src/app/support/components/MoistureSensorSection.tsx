import { Target } from 'lucide-react';
import { SectionAccordion, AccordionItem } from '@/components/SupportAccordion';

export default function MoistureSensorSection() {
  return (
    <SectionAccordion
      id="moisture-sensor"
      title="Moisture Sensor Related"
      icon={<Target size={24} />}
      defaultOpen={true}
    >
      <AccordionItem
        id="sensor-empty"
        question='The sensor is reading "Empty".'
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
        question='The product temperature reads "Frozen".'
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
  );
}