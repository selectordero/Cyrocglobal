import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Activity, Zap } from 'lucide-react';

interface ThreatNode {
  id: string;
  x: number;
  y: number;
  sector: string;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  country: string;
  activity: number;
}

const ThreatGridAIMap: React.FC = () => {
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [scanningActive, setScanningActive] = useState(true);

  // Threat nodes positioned across the world map
  const threatNodes: ThreatNode[] = [
    { id: 'ny-banking', x: 25, y: 35, sector: 'Banking', threatLevel: 'high', country: 'USA', activity: 87 },
    { id: 'london-finance', x: 50, y: 30, sector: 'Finance', threatLevel: 'medium', country: 'UK', activity: 65 },
    { id: 'tokyo-tech', x: 85, y: 40, sector: 'Technology', threatLevel: 'critical', country: 'Japan', activity: 94 },
    { id: 'singapore-trade', x: 80, y: 55, sector: 'Trade', threatLevel: 'low', country: 'Singapore', activity: 23 },
    { id: 'sydney-energy', x: 90, y: 75, sector: 'Energy', threatLevel: 'medium', country: 'Australia', activity: 56 },
    { id: 'mumbai-healthcare', x: 75, y: 50, sector: 'Healthcare', threatLevel: 'high', country: 'India', activity: 78 },
    { id: 'frankfurt-banking', x: 52, y: 32, sector: 'Banking', threatLevel: 'medium', country: 'Germany', activity: 45 },
    { id: 'sao-paulo-gov', x: 35, y: 70, sector: 'Government', threatLevel: 'critical', country: 'Brazil', activity: 91 },
    { id: 'dubai-oil', x: 65, y: 45, sector: 'Oil & Gas', threatLevel: 'high', country: 'UAE', activity: 82 },
    { id: 'toronto-finance', x: 22, y: 28, sector: 'Finance', threatLevel: 'low', country: 'Canada', activity: 34 }
  ];

  // Central AI command center
  const aiCenter = { x: 50, y: 45 };

  // Animate active nodes
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNodes = threatNodes
        .filter(node => Math.random() > 0.6)
        .map(node => node.id);
      setActiveNodes(randomNodes);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Toggle scanning animation
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanningActive(prev => !prev);
    }, 3000);

    return () => clearInterval(scanInterval);
  }, []);

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'critical': return '#FF4444';
      case 'high': return '#FFD700';
      case 'medium': return '#FFA500';
      case 'low': return '#3A5F3A';
      default: return '#FFD700';
    }
  };

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'Banking':
      case 'Finance':
        return '🏦';
      case 'Healthcare':
        return '🏥';
      case 'Energy':
      case 'Oil & Gas':
        return '⚡';
      case 'Government':
        return '🏛️';
      case 'Technology':
        return '💻';
      case 'Trade':
        return '🚢';
      default:
        return '🔒';
    }
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-jet-black via-jet-black-light to-jet-black rounded-3xl overflow-hidden border border-tactical-yellow/20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* World Map SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Simplified World Map Outline */}
        <defs>
          {/* Gold Gradient for AI Center */}
          <radialGradient id="aiCenterGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.1" />
          </radialGradient>

          {/* Threat Level Gradients */}
          <radialGradient id="criticalThreat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF4444" stopOpacity="0.1" />
          </radialGradient>

          <radialGradient id="highThreat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.1" />
          </radialGradient>

          <radialGradient id="mediumThreat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="0.1" />
          </radialGradient>

          <radialGradient id="lowThreat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3A5F3A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3A5F3A" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Simplified Continent Outlines */}
        {/* North America */}
        <path d="M 5,20 Q 15,15 25,20 L 30,35 Q 25,40 20,35 L 15,30 Q 10,25 5,20 Z" 
              fill="none" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="0.5" />
        
        {/* Europe */}
        <path d="M 45,25 Q 55,20 60,25 L 58,35 Q 50,30 45,25 Z" 
              fill="none" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="0.5" />
        
        {/* Asia */}
        <path d="M 65,20 Q 85,15 95,25 L 90,45 Q 80,40 70,35 L 65,20 Z" 
              fill="none" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="0.5" />
        
        {/* Africa */}
        <path d="M 48,35 Q 58,40 55,60 L 50,65 Q 45,55 48,35 Z" 
              fill="none" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="0.5" />
        
        {/* South America */}
        <path d="M 25,50 Q 35,55 30,80 L 25,75 Q 20,65 25,50 Z" 
              fill="none" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="0.5" />
        
        {/* Australia */}
        <path d="M 85,70 Q 95,75 90,80 L 85,75 Q 80,70 85,70 Z" 
              fill="none" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="0.5" />

        {/* AI Center - Gold Gradient Radial Center */}
        <circle 
          cx={aiCenter.x} 
          cy={aiCenter.y} 
          r="3" 
          fill="url(#aiCenterGradient)"
          className={`${scanningActive ? 'animate-pulse' : ''}`}
        >
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* AI Detection Lines */}
        {threatNodes.map((node) => (
          <g key={`line-${node.id}`}>
            <line
              x1={aiCenter.x}
              y1={aiCenter.y}
              x2={node.x}
              y2={node.y}
              stroke="url(#aiCenterGradient)"
              strokeWidth="0.3"
              strokeDasharray="2,2"
              opacity={activeNodes.includes(node.id) ? 0.8 : 0.3}
              className="transition-opacity duration-500"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                values="0;4" 
                dur="1s" 
                repeatCount="indefinite" 
              />
            </line>
          </g>
        ))}

        {/* Threat Nodes with Tactical Glow */}
        {threatNodes.map((node) => {
          const isActive = activeNodes.includes(node.id);
          const gradientId = `${node.threatLevel}Threat`;
          
          return (
            <g key={node.id}>
              {/* Glow Effect */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? "4" : "2"}
                fill={`url(#${gradientId})`}
                opacity={isActive ? 0.8 : 0.4}
                className="transition-all duration-500"
              >
                {isActive && (
                  <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite" />
                )}
              </circle>
              
              {/* Core Node */}
              <circle
                cx={node.x}
                cy={node.y}
                r="1"
                fill={getThreatColor(node.threatLevel)}
                className={isActive ? 'animate-pulse' : ''}
              />
            </g>
          );
        })}
      </svg>

      {/* Overlay Information */}
      <div className="absolute top-4 left-4 bg-jet-black-light/80 backdrop-blur-sm border border-tactical-yellow/20 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Shield className="h-5 w-5 text-tactical-yellow" />
          <span className="font-space-grotesk text-sm font-semibold text-tactical-yellow">
            Global Threat Grid
          </span>
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-soft-white-dim">Active Threats:</span>
            <span className="text-tactical-yellow font-semibold">{activeNodes.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-soft-white-dim">Sectors Monitored:</span>
            <span className="text-military-green font-semibold">8</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-soft-white-dim">AI Status:</span>
            <span className="text-tactical-yellow font-semibold flex items-center">
              <Activity className="h-3 w-3 mr-1" />
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Threat Level Legend */}
      <div className="absolute top-4 right-4 bg-jet-black-light/80 backdrop-blur-sm border border-tactical-yellow/20 rounded-xl p-4">
        <div className="text-xs font-space-grotesk font-semibold text-tactical-yellow mb-2">
          Threat Levels
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-soft-white-dim">Critical</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-tactical-yellow rounded-full"></div>
            <span className="text-soft-white-dim">High</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-soft-white-dim">Medium</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-military-green rounded-full"></div>
            <span className="text-soft-white-dim">Low</span>
          </div>
        </div>
      </div>

      {/* Active Threat Details */}
      {activeNodes.length > 0 && (
        <div className="absolute bottom-4 left-4 bg-jet-black-light/80 backdrop-blur-sm border border-tactical-yellow/20 rounded-xl p-4 max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-tactical-yellow" />
            <span className="font-space-grotesk text-sm font-semibold text-tactical-yellow">
              Active Threats Detected
            </span>
          </div>
          
          <div className="space-y-1 text-xs max-h-20 overflow-y-auto">
            {activeNodes.slice(0, 3).map((nodeId) => {
              const node = threatNodes.find(n => n.id === nodeId);
              if (!node) return null;
              
              return (
                <div key={nodeId} className="flex items-center justify-between">
                  <span className="text-soft-white-dim">
                    {getSectorIcon(node.sector)} {node.country}
                  </span>
                  <span className={`font-semibold ${
                    node.threatLevel === 'critical' ? 'text-red-400' :
                    node.threatLevel === 'high' ? 'text-tactical-yellow' :
                    node.threatLevel === 'medium' ? 'text-orange-400' :
                    'text-military-green'
                  }`}>
                    {node.activity}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Scanning Animation Overlay */}
      {scanningActive && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tactical-yellow/5 to-transparent animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default ThreatGridAIMap;