import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Server, Database, Activity, Shield, Laptop } from "lucide-react"; // Generic icons

interface ArchitectureDiagramProps {
  scale?: number; // Optional scale factor for responsive display
}

export default function ArchitectureDiagram({ scale = 1 }: ArchitectureDiagramProps) {
  // 1. Update Base Dimensions: 
  const baseWidth = 1500;
  const baseHeight = 700;
  
  const scaledWidth = baseWidth * scale;
  const scaledHeight = baseHeight * scale;

  return (
    <div
      className="bg-slate-900 p-8 rounded-xl relative overflow-hidden flex items-center justify-center origin-top-left"
      style={{ 
        width: `${scaledWidth}px`, 
        height: `${scaledHeight}px`, 
      }}
    >
      {/* Inner Container to hold content and apply transform */}
      <div 
        className="w-[1500px] h-[700px] flex items-center justify-center absolute top-0 left-0"
        style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top left' 
        }}
      >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none w-full h-full"></div>

          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 w-full max-w-7xl justify-center">
            
            {/* COLUMN 1: SOURCES */}
            <div className="flex flex-col gap-8 w-80"> 
              {/* Windows Group */}
              <div className="bg-slate-800/80 p-4 rounded-xl border border-blue-500/30 shadow-lg backdrop-blur-sm">
                <h4 className="text-blue-400 text-sm font-semibold mb-3 flex items-center gap-2 whitespace-nowrap">
                  <Image src="/images/logos/windows.svg" alt="Windows Logo" width={20} height={20} className="filter drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" /> 
                  <span>Windows Environment</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex flex-col items-center gap-2 bg-slate-900/50 p-2 rounded border border-slate-700">
                    <div className="text-xs text-slate-300 font-bold text-white">AD Server</div>
                    <Image src="/images/logos/beats.svg" alt="Beats Logo" width={40} height={40} />
                    <div className="text-xs text-slate-500">Winlogbeat</div>
                  </div>
                </div>
              </div>

              {/* Network Group */}
              <div className="bg-slate-800/80 p-4 rounded-xl border border-purple-500/30 shadow-lg backdrop-blur-sm">
                <h4 className="text-purple-400 text-sm font-semibold mb-3 flex items-center gap-2 whitespace-nowrap">
                  <Shield size={16} /> Network Security
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center p-2 bg-slate-900/50 rounded border border-slate-700">
                    <Image src="/images/logos/f5.svg" alt="F5 Logo" width={32} height={32} className="mb-1" />
                    <span className="text-[10px] text-slate-300">F5 WAF</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-slate-900/50 rounded border border-slate-700">
                    <Image src="/images/logos/fortinet.svg" alt="Fortinet Logo" width={32} height={32} className="mb-1" />
                    <span className="text-[10px] text-slate-300">Fortigate</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-slate-900/50 rounded border border-slate-700">
                    <Image src="/images/logos/cisco.svg" alt="Cisco Logo" width={32} height={32} className="mb-1" />
                    <span className="text-[10px] text-slate-300">ASA</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-slate-900/50 rounded border border-slate-700">
                    <Laptop size={24} className="text-slate-400 mb-1" />
                    <span className="text-[10px] text-slate-300">Citrix</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ARROW 1 */}
            <div className="hidden md:flex flex-col items-center justify-center text-slate-500">
              {/* Increased width to 80 to prevent clipping */}
              <svg width="80" height="20" className="animate-pulse">
                <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="4 2"/>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
              <span className="text-xs mt-1">Logs</span>
            </div>

            {/* COLUMN 2: INGESTION */}
            <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-slate-800/80 rounded-full border-4 border-orange-500/50 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.2)] backdrop-blur-sm relative">
                    <Image src="/images/logos/logstash.svg" alt="Logstash Logo" width={64} height={64} className="mb-2" />
                    <div className="text-orange-400 font-bold">Logstash</div>
                    <div className="text-xs text-slate-400 mt-1 text-center px-2">Parse &amp; Enrich</div>
                    
                    {/* Pipeline Dots Animation */}
                    <div className="absolute -inset-1 rounded-full border border-orange-500/30 animate-spin-slow"></div>
                </div>
            </div>

            {/* ARROW 2 */}
            <div className="hidden md:flex flex-col items-center justify-center text-slate-500">
              {/* Increased width to 80 */}
              <svg width="80" height="20" className="animate-pulse">
                <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="4 2"/>
              </svg>
            </div>

            {/* COLUMN 3: STORAGE */}
            <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-800/90 p-6 rounded-2xl border border-yellow-500/40 shadow-[0_0_40px_rgba(234,179,8,0.15)] backdrop-blur-sm w-56">
                    <div className="flex items-center justify-center mb-4">
                        <Image src="/images/logos/elasticsearch.svg" alt="Elasticsearch Logo" width={48} height={48} />
                    </div>
                    <h3 className="text-center text-yellow-400 font-bold mb-4">Elasticsearch Cluster</h3>
                    
                    {/* Hot Nodes */}
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span className="text-xs text-slate-300">3x Hot Nodes (SSD)</span>
                        </div>
                        <div className="flex gap-1 ml-4">
                            <div className="w-8 h-2 bg-yellow-600/50 rounded"></div>
                            <div className="w-8 h-2 bg-yellow-600/50 rounded"></div>
                            <div className="w-8 h-2 bg-yellow-600/50 rounded"></div>
                        </div>
                    </div>

                    {/* Warm Nodes */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs text-slate-300">11x Warm Nodes (HDD)</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1 ml-4 opacity-70">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-6 h-2 bg-green-700/50 rounded"></div>
                            ))}
                            <span className="text-[10px] text-slate-500">...</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ARROW 3 */}
            <div className="hidden md:flex flex-col items-center justify-center text-slate-500">
              {/* Increased width to 80 */}
              <svg width="80" height="20" className="animate-pulse">
                <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="4 2"/>
              </svg>
            </div>

            {/* COLUMN 4: VISUALIZATION */}
            <div className="flex flex-col items-center">
                <div className="w-48 h-64 bg-slate-800/80 rounded-xl border border-pink-500/40 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm p-4 hover:-translate-y-1 transition-transform">
                    <Image src="/images/logos/kibana.svg" alt="Kibana Logo" width={64} height={64} className="mb-4" />
                    <div className="text-pink-400 font-bold text-lg">Kibana</div>
                    <div className="w-full mt-4 space-y-2">
                        <div className="h-2 bg-pink-500/20 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-pink-500/20 rounded w-1/2 mx-auto"></div>
                        <div className="h-16 bg-pink-900/20 rounded w-full border border-pink-500/10 mt-2 flex items-center justify-center">
                            <Activity size={24} className="text-pink-500/50" />
                        </div>
                    </div>
                </div>
            </div>

          </div>
      </div>
    </div>
  );
}