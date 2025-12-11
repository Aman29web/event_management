import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const WorkplaceCasualtiesDashboard = () => {
  const [brightness, setBrightness] = useState(100);
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const [hoveredBar, setHoveredBar] = useState(null);

  const pieData = [
    { name: 'Construction', value: 34, count: 12902, color: '#4169E1' },
    { name: 'Oil & Gas', value: 28, count: 10628, color: '#40E0D0' },
    { name: 'Transport & Logistics', value: 20, count: 7592, color: '#32CD32' },
    { name: 'Mining', value: 10, count: 3796, color: '#FFD700' },
    { name: 'Aviation', value: 6, count: 2278, color: '#FF4444' },
    { name: 'Other', value: 2, count: 761, color: '#9370DB' }
  ];

  const barData = [
    { name: 'Mild/Moderate', value: 37601, color: '#40E0D0' },
    { name: 'Severe (non-fatal)', value: 506, color: '#4169E1' },
    { name: 'Fatal', value: 50, color: '#6B7280' }
  ];

  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-600 rounded-lg px-4 py-2 shadow-xl">
          <p className="text-white font-semibold">{payload[0].name}</p>
          <p className="text-cyan-400 font-bold">{payload[0].value}%</p>
          <p className="text-slate-300 text-sm">{payload[0].payload.count.toLocaleString()} casualties</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 p-4 md:p-8 flex items-center justify-center"
      style={{ filter: `brightness(${brightness}%)` }}
    >
      <div className="w-full max-w-5xl">
        {/* Main container with glowing neon border */}
        <div 
          className="bg-slate-800/30 backdrop-blur-sm border-2 border-cyan-400/50 rounded-3xl p-4 md:p-6 shadow-2xl" 
          style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.5), inset 0 0 10px rgba(34, 211, 238, 0.1)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie Chart Card */}
            <div 
              className="bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-400/40 rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-300" 
              style={{ boxShadow: '0 0 12px rgba(34, 211, 238, 0.4), inset 0 0 8px rgba(34, 211, 238, 0.05)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    Workplace Casualties by Industry
                  </h2>
                  <p className="text-slate-400 text-sm">Qatar, 2020</p>
                </div>
              </div>

              <div className="relative flex justify-center items-center mb-6">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      onMouseEnter={(_, index) => setHoveredSegment(index)}
                      onMouseLeave={() => setHoveredSegment(null)}
                    >
                      {pieData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          opacity={hoveredSegment === null || hoveredSegment === index ? 1 : 0.5}
                          style={{
                            filter: hoveredSegment === index ? 'brightness(1.2)' : 'brightness(1)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomPieTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                
               {/* Percentage Labels - Positioned near the chart segments */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="relative w-[250px] h-[250px]">
                    {/* Construction 34% - Top right */}
                    <div className="absolute top-[15%] right-[12%] text-white font-bold text-base drop-shadow-lg">34%</div>
                    
                    {/* Oil & Gas 28% - Left side */}
                    <div className="absolute top-[32%] left-[8%] text-white font-bold text-base drop-shadow-lg">28%</div>
                    
                    {/* Transport & Logistics 20% - Bottom right */}
                    <div className="absolute bottom-[18%] right-[15%] text-white font-bold text-base drop-shadow-lg">20%</div>
                    
                    {/* Mining 10% - Bottom left */}
                    <div className="absolute bottom-[28%] left-[12%] text-white font-bold text-sm drop-shadow-lg">10%</div>
                    
                    {/* Aviation 6% - Bottom center */}
                    <div className="absolute bottom-[12%] left-[42%] text-white font-bold text-sm drop-shadow-lg">6%</div>
                    
                    {/* Other 2% - Right side */}
                    <div className="absolute top-[48%] right-[8%] text-white font-bold text-sm drop-shadow-lg">2%</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pieData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg transition-all cursor-pointer"
                    onMouseEnter={() => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                    style={{
                      backgroundColor: hoveredSegment === index ? 'rgba(51, 65, 85, 0.5)' : 'transparent'
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{item.name}</p>
                      <p className="text-slate-400 text-xs">{item.value}% ({item.count.toLocaleString()})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bar Chart Card */}
            <div 
              className="bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-400/40 rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-300" 
              style={{ boxShadow: '0 0 12px rgba(34, 211, 238, 0.4), inset 0 0 8px rgba(34, 211, 238, 0.05)' }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                Workplace Injuries by Severity (Qatar, 2020)
              </h2>
              
              <div className="mt-6 relative" style={{ height: '350px' }}>
                <svg viewBox="0 0 400 350" className="w-full h-full">
                  <defs>
                    {barData.map((item, index) => (
                      <linearGradient key={`bar-grad-${index}`} id={`bar-grad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: item.color, stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: item.color, stopOpacity: 0.6}} />
                      </linearGradient>
                    ))}
                    <filter id="bar-shadow">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3"/>
                    </filter>
                  </defs>

                  {/* Y-axis */}
                  <line x1="40" y1="30" x2="40" y2="280" stroke="#475569" strokeWidth="2"/>
                  
                  {/* Y-axis labels */}
                  <text x="35" y="280" textAnchor="end" fill="#94A3B8" fontSize="12">0</text>
                  <text x="35" y="220" textAnchor="end" fill="#94A3B8" fontSize="12">10000</text>
                  <text x="35" y="160" textAnchor="end" fill="#94A3B8" fontSize="12">20000</text>
                  <text x="35" y="100" textAnchor="end" fill="#94A3B8" fontSize="12">30000</text>
                  <text x="35" y="40" textAnchor="end" fill="#94A3B8" fontSize="12">40000</text>

                  {/* X-axis */}
                  <line x1="40" y1="280" x2="390" y2="280" stroke="#475569" strokeWidth="2"/>

                  {/* Bars */}
                  {barData.map((item, index) => {
                    const barWidth = 30;
                    const barSpacing = 110;
                    const x = 60 + index * barSpacing;
                    const maxHeight = 250;
                    const height = (item.value / 40000) * maxHeight;
                    const y = 280 - height;
                    
                    return (
                      <g key={index}>
                        <rect
                          x={x}
                          y={y}
                          width={barWidth}
                          height={height}
                          fill={`url(#bar-grad-${index})`}
                          filter="url(#bar-shadow)"
                          rx="4"
                          ry="4"
                          opacity={hoveredBar === null || hoveredBar === index ? 1 : 0.4}
                          onMouseEnter={() => setHoveredBar(index)}
                          onMouseLeave={() => setHoveredBar(null)}
                          style={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            filter: hoveredBar === index ? 'brightness(1.3) url(#bar-shadow)' : 'brightness(1) url(#bar-shadow)'
                          }}
                        />
                        
                        {/* Value label on top of bar */}
                        <text
                          x={x + barWidth / 2}
                          y={y - 8}
                          textAnchor="middle"
                          fill="white"
                          fontSize="16"
                          fontWeight="bold"
                          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                        >
                          {item.value.toLocaleString()}
                        </text>
                        
                        {/* X-axis label */}
                        <text
                          x={x + barWidth / 2}
                          y="310"
                          textAnchor="middle"
                          fill="#94A3B8"
                          fontSize="11"
                        >
                          {item.name.split(' ')[0]}
                        </text>
                        {item.name.split(' ').length > 1 && (
                          <text
                            x={x + barWidth / 2}
                            y="325"
                            textAnchor="middle"
                            fill="#94A3B8"
                            fontSize="11"
                          >
                            {item.name.split(' ').slice(1).join(' ')}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Brightness Control */}
        <div className="mt-8 flex justify-center">
          <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3 flex items-center gap-4 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <input
              type="range"
              min="50"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-32 md:w-48 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkplaceCasualtiesDashboard;