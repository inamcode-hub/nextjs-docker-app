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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* Inlet Monitoring Card */}
      <div className="rounded-xl p-6 border-2 border-gray-200 h-full text-white relative overflow-hidden" style={{ backgroundColor: '#5cb85c' }}>
        <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
          {inletTemp.toFixed(1)}°
        </div>
        <div className="text-center">
          <div className="text-6xl font-bold mb-2">
            {inletMoisture.toFixed(1)}<span className="text-3xl">%</span>
          </div>
          <div className="text-2xl font-semibold mb-4">Inlet</div>
          <div className="text-white/90 text-sm font-medium">{inletMoisture.toFixed(1)}%</div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
        {/* Live indicator */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Outlet Monitoring Card */}
      <div className="rounded-xl p-6 border-2 border-gray-200 h-full text-white relative overflow-hidden" style={{ backgroundColor: '#428bca' }}>
        <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
          {outletTemp.toFixed(1)}°
        </div>
        <div className="text-center">
          <div className="text-6xl font-bold mb-2">
            {outletMoisture.toFixed(1)}<span className="text-3xl">%</span>
          </div>
          <div className="text-2xl font-semibold mb-4">Outlet</div>
          <div className="text-white/90 text-sm font-medium">{outletMoisture.toFixed(1)}°</div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
        {/* Live indicator */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Discharge Rate Card */}
      <div className="rounded-xl p-6 border-2 border-gray-200 h-full text-white relative overflow-hidden" style={{ backgroundColor: '#f0ad4e' }}>
        <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
          READY
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 border-4 border-white rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl font-bold">A</span>
            </div>
            <div className="text-4xl font-bold">{dischargeRate.toFixed(1)}</div>
          </div>
          <div className="text-xl font-semibold mb-4">Discharge Rate</div>
          <div className="text-white/90 text-sm font-medium">BU/HR AUTO</div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
        {/* Live indicator */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}