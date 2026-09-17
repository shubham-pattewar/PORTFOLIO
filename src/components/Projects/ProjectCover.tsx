import React from 'react';

interface ProjectCoverProps {
  projectId: string;
  accent: string;
}

export const ProjectCover: React.FC<ProjectCoverProps> = ({ projectId, accent }) => {
  switch (projectId) {
    case 'road-damage':
      return (
        <div className="relative w-full h-48 sm:h-56 bg-[#1A1A1A] border-b-[3px] border-[var(--border-color)] overflow-hidden flex flex-col justify-between p-4 text-[#FFF8E7]">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-[#FFF8E7]/30" />
            ))}
          </div>

          {/* Road vector geometry */}
          <div className="absolute inset-x-8 bottom-0 h-32 border-x-4 border-dashed border-[#FFD83D]/40 pointer-events-none transform -skew-x-12" />

          {/* Top telemetry */}
          <div className="flex justify-between items-center z-10 font-mono text-[10px] tracking-widest text-[#FFD83D]">
            <span>CONF: 94.2%</span>
            <span>MODEL: YOLO-CV // RESNET</span>
          </div>

          {/* Bounding Box Visual Element */}
          <div className="relative z-10 self-center border-2 border-[#FFD83D] bg-[#FFD83D]/10 p-2 shadow-[4px_4px_0px_#FFD83D]">
            <div className="font-mono text-[9px] font-bold bg-[#FFD83D] text-[#111111] px-1 py-0.5 inline-block mb-1">
              [POTHOLE_D01]
            </div>
            <div className="w-32 sm:w-44 h-12 border border-dashed border-[#FFD83D] flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#FFD83D] tracking-wider">
                COORD: 18.709, 73.856
              </span>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="flex justify-between items-center z-10 font-mono text-[10px] opacity-70">
            <span>SURFACE: ASPHALT</span>
            <span>SEVERITY: HIGH</span>
          </div>
        </div>
      );

    case 'food-safe':
      return (
        <div className="relative w-full h-48 sm:h-56 bg-[#111A11] border-b-[3px] border-[var(--border-color)] overflow-hidden flex flex-col justify-between p-4 text-[#FFF8E7]">
          {/* Barcode Graphic */}
          <div className="absolute top-4 right-4 flex gap-1 items-end h-10 opacity-70">
            {[4, 2, 8, 3, 6, 2, 1, 5, 8, 3, 2, 6, 4].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-[#B7F34A]"
                style={{ height: `${h * 4}px` }}
              />
            ))}
          </div>

          <div className="flex justify-between items-center z-10 font-mono text-[10px] tracking-widest text-[#B7F34A]">
            <span>REGULATORY AUDIT</span>
            <span>FSSAI / FDA COMPLIANT</span>
          </div>

          {/* Center Safety Indicator Matrix */}
          <div className="z-10 flex flex-col gap-2 max-w-[220px]">
            <div className="border-2 border-[#B7F34A] bg-[#111111] p-2 shadow-[4px_4px_0px_#B7F34A]">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#B7F34A]">
                <span>ALLERGEN INDEX</span>
                <span className="font-bold">PASSED</span>
              </div>
              <div className="w-full bg-black/60 h-2 mt-1 border border-[#B7F34A]/50">
                <div className="bg-[#B7F34A] h-full w-4/5" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center z-10 font-mono text-[10px] opacity-70">
            <span>SCHEMA: NESTED MONGODB</span>
            <span>STATUS: VERIFIED</span>
          </div>
        </div>
      );

    case 'rategate':
      return (
        <div className="relative w-full h-48 sm:h-56 bg-[#0e0b1c] border-b-[3px] border-[var(--border-color)] overflow-hidden flex flex-col justify-between p-4 text-[#FFF8E7]">
          {/* Cyber grid & wave pattern */}
          <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 300 150">
              <path
                d="M 10 110 Q 75 110 120 70 T 200 40 T 290 40"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
              />
              <path
                d="M 10 110 Q 75 110 120 95 T 200 80 T 290 100"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </svg>
          </div>

          {/* Top Telemetry */}
          <div className="flex justify-between items-center z-10 font-mono text-[10px] tracking-widest text-[#8B5CF6]">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              RLaaS // REVERSE PROXY
            </span>
            <span>SLIDING WINDOW LOG</span>
          </div>

          {/* Center Pipeline Visual Element */}
          <div className="z-10 flex flex-col gap-2 items-center self-center">
            <div className="flex items-center gap-2">
              <div className="border-2 border-[#8B5CF6] bg-[#111111] px-2.5 py-1 font-mono text-[10px] text-[#8B5CF6] shadow-[3px_3px_0px_#8B5CF6]">
                REDIS LUA [ZSET]
              </div>
              <span className="font-mono text-xs text-[#8B5CF6]">⚡</span>
              <div className="border-2 border-[#10B981] bg-[#111111] px-2.5 py-1 font-mono text-[10px] text-[#10B981] shadow-[3px_3px_0px_#10B981]">
                UNDICI STREAM
              </div>
            </div>
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#FFF8E7]/80">
              <span className="bg-[#8B5CF6]/20 px-1.5 py-0.5 border border-[#8B5CF6]/40 text-[#8B5CF6]">
                LATENCY: &lt;1ms
              </span>
              <span className="bg-[#10B981]/20 px-1.5 py-0.5 border border-[#10B981]/40 text-[#10B981]">
                STATUS: 200 OK
              </span>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="flex justify-between items-center z-10 font-mono text-[10px] opacity-70">
            <span>CACHE: 30s IN-PROCESS TTL</span>
            <span>BACKEND: REDIS 7 + MONGO</span>
          </div>
        </div>
      );

    case 'monastery360':
      return (
        <div className="relative w-full h-48 sm:h-56 bg-[#221018] border-b-[3px] border-[var(--border-color)] overflow-hidden flex flex-col justify-between p-4 text-[#FFF8E7]">
          {/* Wireframe Architectural 3D Geometry */}
          <div className="absolute inset-0 flex items-center justify-center opacity-25">
            <svg className="w-56 h-36" viewBox="0 0 200 120">
              <polygon points="100,10 180,50 180,110 100,110" fill="none" stroke="#FF6B9D" strokeWidth="2" />
              <polygon points="100,10 20,50 20,110 100,110" fill="none" stroke="#FF6B9D" strokeWidth="2" />
              <line x1="100" y1="10" x2="100" y2="110" stroke="#FF6B9D" strokeWidth="2" />
              <line x1="20" y1="50" x2="180" y2="50" stroke="#FF6B9D" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="flex justify-between items-center z-10 font-mono text-[10px] tracking-widest text-[#FF6B9D]">
            <span>SPATIAL WEBGL / 3D</span>
            <span>HERITAGE PRESERVATION</span>
          </div>

          <div className="z-10 self-center border-2 border-[#FF6B9D] bg-[#111111] px-3 py-1 font-mono text-[11px] text-[#FF6B9D] shadow-[4px_4px_0px_#FF6B9D]">
            360° SPATIAL PANORAMA
          </div>

          <div className="flex justify-between items-center z-10 font-mono text-[10px] opacity-70">
            <span>ENGINE: THREE.JS</span>
            <span>FPS: 60 STABLE</span>
          </div>
        </div>
      );

    default:
      return (
        <div
          className="w-full h-48 border-b-[3px] border-[var(--border-color)]"
          style={{ backgroundColor: accent }}
        />
      );
  }
};
