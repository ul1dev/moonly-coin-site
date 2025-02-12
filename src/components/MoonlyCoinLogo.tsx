
import React from 'react';

interface MoonlyCoinLogoProps {
  size?: number;
  className?: string;
}

const MoonlyCoinLogo: React.FC<MoonlyCoinLogoProps> = ({ size = 40, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main coin circle */}
      <circle cx="50" cy="50" r="45" fill="#1A1F2C" />
      
      {/* Outer glow */}
      <circle cx="50" cy="50" r="44" stroke="#9b87f5" strokeWidth="1" fill="none" opacity="0.5" />
      
      {/* Craters */}
      <circle cx="25" cy="30" r="8" fill="#221F26" />
      <circle cx="25" cy="30" r="7" fill="#403E43" />
      
      <circle cx="75" cy="35" r="10" fill="#221F26" />
      <circle cx="75" cy="35" r="9" fill="#403E43" />
      
      <circle cx="40" cy="70" r="12" fill="#221F26" />
      <circle cx="40" cy="70" r="11" fill="#403E43" />
      
      <circle cx="70" cy="65" r="7" fill="#221F26" />
      <circle cx="70" cy="65" r="6" fill="#403E43" />
      
      {/* Letter M with gradient */}
      <path
        d="M30 35L40 55L50 35L60 55L70 35"
        stroke="#D6BCFA"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Shine effect */}
      <circle cx="25" cy="25" r="15" fill="url(#shine)" opacity="0.1" />
      
      {/* Gradients */}
      <defs>
        <radialGradient id="shine" cx="0.25" cy="0.25" r="0.5">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default MoonlyCoinLogo;
