import React from 'react';

interface PatternProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * 8-Pointed Star (Rub el Hizb) - Traditional Islamic geometric symbol
 */
export const RubElHizb: React.FC<PatternProps> = ({ 
  className = "w-6 h-6", 
  color = "#315A50" 
}) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`inline-block shrink-0 ${className}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* First square */}
    <rect 
      x="20" 
      y="20" 
      width="60" 
      height="60" 
      stroke={color} 
      strokeWidth="6" 
      fill="none" 
    />
    {/* Second square rotated 45 degrees */}
    <rect 
      x="20" 
      y="20" 
      width="60" 
      height="60" 
      transform="rotate(45 50 50)" 
      stroke={color} 
      strokeWidth="6" 
      fill="none" 
    />
    {/* Center dot/circle */}
    <circle cx="50" cy="50" r="10" fill={color} />
  </svg>
);

/**
 * Mihrab / Arch motif for decorative Islamic borders
 */
export const IslamicArchMotif: React.FC<PatternProps> = ({ 
  className = "w-full h-12", 
  color = "#9DB9A8" 
}) => (
  <svg 
    viewBox="0 0 400 40" 
    preserveAspectRatio="none" 
    className={`w-full ${className}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0 40 L0 10 Q100 10 160 30 Q200 4 240 30 Q300 10 400 10 L400 40 Z" 
      fill={color} 
      opacity="0.15" 
    />
    <path 
      d="M0 25 Q100 0 200 3 Q300 0 400 25" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeDasharray="4 4" 
      fill="none" 
    />
  </svg>
);

/**
 * Geometric Lattice Background Watermark (tasteful, non-distracting)
 */
export const IslamicLatticeBg: React.FC<{ opacity?: number }> = ({ opacity = 0.04 }) => (
  <div 
    className="absolute inset-0 pointer-events-none z-0 overflow-hidden" 
    style={{ opacity }}
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="islamic-lattice" width="60" height="60" patternUnits="userSpaceOnUse">
          <path 
            d="M30 0 L60 30 L30 60 L0 30 Z" 
            fill="none" 
            stroke="#315A50" 
            strokeWidth="1.2" 
          />
          <circle cx="30" cy="30" r="12" fill="none" stroke="#315A50" strokeWidth="1" />
          <circle cx="0" cy="0" r="8" fill="none" stroke="#315A50" strokeWidth="1" />
          <circle cx="60" cy="0" r="8" fill="none" stroke="#315A50" strokeWidth="1" />
          <circle cx="0" cy="60" r="8" fill="none" stroke="#315A50" strokeWidth="1" />
          <circle cx="60" cy="60" r="8" fill="none" stroke="#315A50" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-lattice)" />
    </svg>
  </div>
);

/**
 * Illuminated Quran Header Ornament
 */
export const QuranOrnamentFrame: React.FC<{ title: string; subtitle?: string }> = ({ 
  title, 
  subtitle 
}) => (
  <div className="relative flex flex-col items-center justify-center py-4 px-6 my-2 text-center">
    <div className="flex items-center gap-3 w-full max-w-md justify-center">
      <div className="h-0.5 grow bg-gradient-to-r from-transparent via-[#9DB9A8] to-[#315A50]" />
      <RubElHizb className="w-5 h-5 text-[#315A50]" color="#315A50" />
      <div className="h-0.5 grow bg-gradient-to-l from-transparent via-[#9DB9A8] to-[#315A50]" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold font-heading text-[#315A50] mt-2">
      {title}
    </h3>
    {subtitle && (
      <p className="text-xs md:text-sm text-[#27332F]/75 mt-0.5 font-medium">
        {subtitle}
      </p>
    )}
    <div className="w-16 h-1 bg-[#E6B85C] rounded-full mt-2" />
  </div>
);
