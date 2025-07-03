'use client';

import { useEffect, useState } from 'react';
import { Bell, AlertTriangle, TrendingUp, Settings, Thermometer, Droplets, Activity, BarChart3, ChevronDown, Smartphone } from 'lucide-react';

export default function DMobileInterface() {
  // Real-time data simulation
  const [inletMoisture, setInletMoisture] = useState(18.2);
  const [inletTemp, setInletTemp] = useState(73.7);
  const [outletMoisture, setOutletMoisture] = useState(15.1);
  const [outletTemp, setOutletTemp] = useState(86.7);
  const [dischargeRate, setDischargeRate] = useState(73.5);
  const [dryingTemp, setDryingTemp] = useState(185.2);
  const [moistureSetpoint, setMoistureSetpoint] = useState(15.0);
  const [controlMode, setControlMode] = useState('AUTO');
  const [alarmVisible, setAlarmVisible] = useState(false);
  const [currentAlarm, setCurrentAlarm] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Chart data simulation
  const [chartData, setChartData] = useState([
    { time: '12:00', inlet: 18.5, outlet: 15.1, setpoint: 15.0 },
    { time: '12:30', inlet: 18.3, outlet: 14.9, setpoint: 15.0 },
    { time: '13:00', inlet: 18.1, outlet: 15.0, setpoint: 15.0 },
    { time: '13:30', inlet: 18.2, outlet: 15.1, setpoint: 15.0 },
    { time: '14:00', inlet: 18.4, outlet: 15.0, setpoint: 15.0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update real-time data
      setInletMoisture(prev => {
        const variation = (Math.random() - 0.5) * 0.6;
        return Math.max(17.5, Math.min(19.0, prev + variation));
      });

      setOutletMoisture(prev => {
        // Keep outlet close to setpoint with smaller variations
        const targetDiff = moistureSetpoint - prev;
        const correction = targetDiff * 0.1; // Gradual correction toward setpoint
        const variation = (Math.random() - 0.5) * 0.1; // Smaller random variation
        const newValue = prev + correction + variation;
        return Math.max(moistureSetpoint - 0.3, Math.min(moistureSetpoint + 0.3, newValue));
      });

      setInletTemp(prev => {
        const variation = (Math.random() - 0.5) * 4;
        return Math.max(70, Math.min(78, prev + variation));
      });

      setOutletTemp(prev => {
        const variation = (Math.random() - 0.5) * 3;
        return Math.max(84, Math.min(90, prev + variation));
      });

      setDischargeRate(prev => {
        const variation = (Math.random() - 0.5) * 10;
        return Math.max(68, Math.min(78, prev + variation));
      });

      setDryingTemp(prev => {
        const variation = (Math.random() - 0.5) * 8;
        return Math.max(180, Math.min(195, prev + variation));
      });

      // Success message when close to target
      const moistureDiff = Math.abs(outletMoisture - moistureSetpoint);
      if (moistureDiff <= 0.2 && !showSuccessMessage && Math.random() < 0.15) {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
      }

      // Random alarm simulation (less frequent)
      if (Math.random() < 0.05 && !alarmVisible && !showSuccessMessage) {
        const alarms = [
          'High moisture variance detected',
          'Temperature sensor check required',
          'Discharge rate adjustment needed',
          'System calibration reminder'
        ];
        setCurrentAlarm(alarms[Math.floor(Math.random() * alarms.length)]);
        setAlarmVisible(true);
        setTimeout(() => setAlarmVisible(false), 4000);
      }

      // Update chart data
      setChartData(prev => {
        const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newData = [...prev.slice(1), {
          time: newTime,
          inlet: inletMoisture,
          outlet: outletMoisture,
          setpoint: moistureSetpoint
        }];
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [inletMoisture, outletMoisture, alarmVisible, showSuccessMessage, moistureSetpoint]);

  const handleSetpointChange = (increment: boolean) => {
    setMoistureSetpoint(prev => {
      const newValue = increment ? prev + 0.1 : prev - 0.1;
      return Math.max(13.0, Math.min(17.0, newValue));
    });
  };

  const handleModeChange = () => {
    const modes = ['LOCAL', 'MANUAL', 'AUTO'];
    const currentIndex = modes.indexOf(controlMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setControlMode(modes[nextIndex]);
  };

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative bg-black rounded-[3rem] shadow-2xl p-2" style={{ width: '390px', height: '844px' }}>
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-10"></div>
        
        {/* iPhone Screen */}
        <div className="bg-white rounded-[2.7rem] w-full h-full overflow-hidden relative">
          {/* iOS Status Bar */}
          <div className="bg-white px-6 pt-3 pb-1">
            <div className="flex justify-between items-center text-black text-sm font-semibold">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                {/* Signal bars */}
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                </div>
                {/* WiFi */}
                <svg className="w-4 h-3 ml-1" viewBox="0 0 16 12" fill="currentColor">
                  <path d="M8 0C3.6 0 0 3.1 0 6.9c0 0.2 0.2 0.4 0.4 0.4s0.4-0.2 0.4-0.4C1.2 4.2 4.3 1.5 8 1.5s6.8 2.7 7.2 5.8c0 0.2 0.2 0.4 0.4 0.4s0.4-0.2 0.4-0.4C16 3.1 12.4 0 8 0z"/>
                  <path d="M8 3c-2.8 0-5.1 1.9-5.8 4.4c0 0.2 0.1 0.4 0.3 0.4s0.4-0.1 0.4-0.3C3.4 5.6 5.5 4.2 8 4.2s4.6 1.4 5.1 3.3c0 0.2 0.2 0.3 0.4 0.3s0.3-0.2 0.3-0.4C13.1 4.9 10.8 3 8 3z"/>
                </svg>
                {/* Battery */}
                <div className="ml-1 relative">
                  <div className="w-6 h-3 border border-black rounded-sm"></div>
                  <div className="absolute inset-0.5 bg-green-500 rounded-sm"></div>
                  <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-black rounded-r"></div>
                </div>
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-4 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-2xl shadow-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold">DM Mobile</h1>
                    <p className="text-blue-100 text-xs">Dryer Control System</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    controlMode === 'AUTO' ? 'bg-green-500 text-white' : 
                    controlMode === 'MANUAL' ? 'bg-orange-500 text-white' : 
                    'bg-gray-500 text-white'
                  }`}>
                    {controlMode}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">LIVE</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-lg">Target: {moistureSetpoint.toFixed(1)}%</span>
                <span className="text-xs text-blue-200">Current: {outletMoisture.toFixed(1)}%</span>
                <span className={`text-xs px-2 py-1 rounded-lg font-medium ${
                  Math.abs(outletMoisture - moistureSetpoint) <= 0.2 ? 'bg-green-500/20 text-green-200' : 'bg-white/20 text-blue-200'
                }`}>
                  {Math.abs(outletMoisture - moistureSetpoint) <= 0.2 ? 'On Target' : `±${Math.abs(outletMoisture - moistureSetpoint).toFixed(1)}%`}
                </span>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="px-4 overflow-y-auto" style={{ height: '680px' }}>
          {/* Success Message */}
          {showSuccessMessage && (
            <div className="bg-green-500 text-white p-3 rounded-lg mb-4 animate-slide-down border border-green-400">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-sm">Great News!</p>
                  <p className="text-xs opacity-90">Your outlet moisture is very close to target - excellent control!</p>
                </div>
              </div>
            </div>
          )}

          {/* Alarm Alert */}
          {alarmVisible && (
            <div className="bg-orange-500 text-white p-3 rounded-lg mb-4 animate-slide-down border border-orange-400">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-sm">Alert</p>
                  <p className="text-xs opacity-90">{currentAlarm}</p>
                </div>
              </div>
            </div>
          )}

            {/* Real-Time Monitoring Cards - iOS Style */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Inlet Card */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <span className="text-xs opacity-80 font-medium">{inletTemp.toFixed(1)}°F</span>
                </div>
                <div className="text-2xl font-bold mb-1">{inletMoisture.toFixed(1)}%</div>
                <div className="text-xs opacity-90 font-medium">Inlet Moisture</div>
              </div>

              {/* Outlet Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <span className="text-xs opacity-80 font-medium">{outletTemp.toFixed(1)}°F</span>
                </div>
                <div className="text-2xl font-bold mb-1">{outletMoisture.toFixed(1)}%</div>
                <div className="text-xs opacity-90 font-medium">Outlet Moisture</div>
              </div>

              {/* Discharge Rate Card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-xs opacity-80 font-medium">{controlMode}</span>
                </div>
                <div className="text-2xl font-bold mb-1">{dischargeRate.toFixed(1)}</div>
                <div className="text-xs opacity-90 font-medium">BU/HR Rate</div>
              </div>

              {/* Drying Temperature Card */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <span className="text-xs opacity-80 font-medium">ACTIVE</span>
                </div>
                <div className="text-2xl font-bold mb-1">{dryingTemp.toFixed(0)}°F</div>
                <div className="text-xs opacity-90 font-medium">Drying Temp</div>
              </div>
            </div>

            {/* Chart Section - iOS Style */}
            <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Moisture Trend</h3>
                </div>
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                  Target: {moistureSetpoint.toFixed(1)}%
                </div>
              </div>
            <div className="relative h-32 bg-gray-50 rounded-lg p-2">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="30" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Chart lines */}
                {/* Inlet line - more variable (green) */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points={chartData.map((point, index) => {
                    const x = (index / (chartData.length - 1)) * 280 + 10;
                    const y = 90 - ((point.inlet - 13) / 6) * 80;
                    return `${x},${y}`;
                  }).join(' ')}
                />
                
                {/* Outlet line - stays close to setpoint (blue) */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points={chartData.map((point, index) => {
                    const x = (index / (chartData.length - 1)) * 280 + 10;
                    const y = 90 - ((point.outlet - 13) / 6) * 80;
                    return `${x},${y}`;
                  }).join(' ')}
                />
                
                {/* Setpoint line - straight line (red dashed) */}
                <polyline
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="4,2"
                  points={chartData.map((point, index) => {
                    const x = (index / (chartData.length - 1)) * 280 + 10;
                    const y = 90 - ((point.setpoint - 13) / 6) * 80;
                    return `${x},${y}`;
                  }).join(' ')}
                />
                
                {/* Y-axis labels */}
                <text x="5" y="15" fontSize="8" fill="#6b7280">19%</text>
                <text x="5" y="50" fontSize="8" fill="#6b7280">16%</text>
                <text x="5" y="85" fontSize="8" fill="#6b7280">13%</text>
              </svg>
              <div className="absolute bottom-1 left-2 right-2 flex justify-between text-xs text-gray-500">
                <span>{chartData[0]?.time}</span>
                <span>{chartData[chartData.length - 1]?.time}</span>
              </div>
            </div>
              <div className="flex justify-center gap-4 mt-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-700">Inlet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-700">Outlet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-red-200"></div>
                  <span className="font-medium text-gray-700">Target</span>
                </div>
              </div>
            </div>

            {/* History Section - iOS Style */}
            <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Recent History</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-600">14:30</span>
                  <span className="text-sm font-medium text-gray-900">Inlet: 18.1% | Outlet: 15.0%</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-600">14:00</span>
                  <span className="text-sm font-medium text-gray-900">Inlet: 18.3% | Outlet: 15.1%</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-600">13:30</span>
                  <span className="text-sm font-medium text-gray-900">Inlet: 18.5% | Outlet: 15.0%</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-600">13:00</span>
                  <span className="text-sm font-medium text-gray-900">Inlet: 18.2% | Outlet: 14.9%</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="text-xs text-gray-500 text-center bg-blue-50 py-2 px-3 rounded-lg">
                  Target: {moistureSetpoint.toFixed(1)}% | Avg. Variance: ±0.1%
                </div>
              </div>
            </div>

            {/* Control Section - iOS Style */}
            <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Control Panel</h3>
              </div>
              
              {/* Control Mode */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Control Mode</label>
                <button 
                  onClick={handleModeChange}
                  className={`w-full p-4 rounded-2xl font-bold text-white transition-all duration-200 shadow-lg ${
                    controlMode === 'AUTO' ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-green-200' : 
                    controlMode === 'MANUAL' ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-200' : 
                    'bg-gradient-to-r from-gray-500 to-gray-600 shadow-gray-200'
                  }`}
                >
                  {controlMode} MODE
                </button>
              </div>

              {/* Moisture Setpoint */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Moisture Setpoint</label>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleSetpointChange(false)}
                    className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-red-200 active:scale-95 transition-transform"
                  >
                    −
                  </button>
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl text-center border border-blue-200">
                    <span className="text-2xl font-bold text-blue-900">{moistureSetpoint.toFixed(1)}%</span>
                  </div>
                  <button 
                    onClick={() => handleSetpointChange(true)}
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-green-200 active:scale-95 transition-transform"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom padding for scroll */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Interactive DM Mobile simulation with live data updates, alarms, and controls
        </p>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}