interface StahikiLogoProps {
  className?: string;
}

export function StahikiLogo({ className = "w-8 h-8" }: StahikiLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern geometric design representing digital twins and AI */}
      <defs>
        <linearGradient id="stahiki-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Main hexagon shape - representing systems and connectivity */}
      <path
        d="M16 2L26 8V24L16 30L6 24V8L16 2Z"
        fill="url(#stahiki-gradient)"
        opacity="0.9"
      />
      
      {/* Inner connecting lines - representing digital twin connections */}
      <path
        d="M16 8L22 12V20L16 24L10 20V12L16 8Z"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Central dot - representing AI core */}
      <circle
        cx="16"
        cy="16"
        r="2"
        fill="white"
      />
      
      {/* Corner nodes - representing data points */}
      <circle cx="16" cy="8" r="1.5" fill="white" opacity="0.9" />
      <circle cx="22" cy="12" r="1.5" fill="white" opacity="0.9" />
      <circle cx="22" cy="20" r="1.5" fill="white" opacity="0.9" />
      <circle cx="16" cy="24" r="1.5" fill="white" opacity="0.9" />
      <circle cx="10" cy="20" r="1.5" fill="white" opacity="0.9" />
      <circle cx="10" cy="12" r="1.5" fill="white" opacity="0.9" />
    </svg>
  );
}