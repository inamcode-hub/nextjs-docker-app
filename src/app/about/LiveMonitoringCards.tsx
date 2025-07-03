'use client';

import { useEffect, useState } from 'react';

export default function LiveMonitoringCards() {
  const [inletMoisture, setInletMoisture] = useState(18.2);
  const [inletTemp, setInletTemp] = useState(73.7);
  const [outletMoisture, setOutletMoisture] = useState(14.1);
  const [outletTemp, setOutletTemp] = useState(86.7);
  const [dischargeRate, setDischargeRate] = useState(73.5);

  useEffect(() => {
    const interval = setInterval(() => {
      // Realistic moisture variations (±0.1-0.3%)
      setInletMoisture(prev => {
        const variation = (Math.random() - 0.5) * 0.6; // ±0.3%
        const newValue = prev + variation;
        return Math.max(17.5, Math.min(19.0, newValue)); // Keep within realistic range
      });

      setOutletMoisture(prev => {
        const variation = (Math.random() - 0.5) * 0.2; // ±0.1% (more stable)
        const newValue = prev + variation;
        return Math.max(13.8, Math.min(14.4, newValue)); // Keep near target
      });

      // Temperature variations (±1-2°F)
      setInletTemp(prev => {
        const variation = (Math.random() - 0.5) * 4;
        const newValue = prev + variation;
        return Math.max(70, Math.min(78, newValue));
      });

      setOutletTemp(prev => {
        const variation = (Math.random() - 0.5) * 3;
        const newValue = prev + variation;
        return Math.max(84, Math.min(90, newValue));
      });

      // Discharge rate variations (±2-5 bu/hr)
      setDischargeRate(prev => {
        const variation = (Math.random() - 0.5) * 10;
        const newValue = prev + variation;
        return Math.max(68, Math.min(78, newValue));
      });
    }, 2000 + Math.random() * 3000); // Random interval 2-5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {/* Inlet Monitoring Card */}
        <div className="rounded-xl p-3 lg:p-3 border-2 border-gray-200 h-full text-white relative overflow-hidden min-h-[120px] lg:min-h-[100px] w-full" style={{ backgroundColor: '#5cb85c' }}>
          <div className="absolute top-4 right-4 text-white/80 text-xs lg:text-sm font-medium">
            {inletTemp.toFixed(1)}°F
          </div>
          <div className="text-center h-full flex flex-col justify-center px-2 lg:px-3">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 leading-none">
              {inletMoisture.toFixed(1)}<span className="text-2xl lg:text-3xl xl:text-4xl">%</span>
            </div>
            <div className="text-lg lg:text-xl font-semibold mb-2">Inlet</div>
            <div className="text-white/90 text-xs lg:text-sm font-medium">Moisture Content</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
          {/* Live indicator */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Outlet Monitoring Card */}
        <div className="rounded-xl p-3 lg:p-3 border-2 border-gray-200 h-full text-white relative overflow-hidden min-h-[120px] lg:min-h-[100px] w-full" style={{ backgroundColor: '#428bca' }}>
          <div className="absolute top-4 right-4 text-white/80 text-xs lg:text-sm font-medium">
            {outletTemp.toFixed(1)}°F
          </div>
          <div className="text-center h-full flex flex-col justify-center px-2 lg:px-3">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 leading-none">
              {outletMoisture.toFixed(1)}<span className="text-2xl lg:text-3xl xl:text-4xl">%</span>
            </div>
            <div className="text-lg lg:text-xl font-semibold mb-2">Outlet</div>
            <div className="text-white/90 text-xs lg:text-sm font-medium">Target: 14.5%</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
          {/* Live indicator */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Discharge Rate Card */}
        <div className="rounded-xl p-3 lg:p-3 border-2 border-gray-200 h-full text-white relative overflow-hidden min-h-[120px] lg:min-h-[100px] w-full" style={{ backgroundColor: '#f0ad4e' }}>
          <div className="absolute top-4 right-4 text-white/80 text-xs lg:text-sm font-medium">
            AUTO
          </div>
          <div className="text-center h-full flex flex-col justify-center px-2 lg:px-3">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 leading-none">
              {dischargeRate.toFixed(0)}
            </div>
            <div className="text-lg lg:text-xl font-semibold mb-2">BU/HR</div>
            <div className="text-white/90 text-xs lg:text-sm font-medium">Discharge Rate</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
          {/* Live indicator */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}