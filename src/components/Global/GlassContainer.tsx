import React from "react";

interface GlassProps {
  children: React.ReactNode;
  className?: string;
}

const GlassContainer: React.FC<GlassProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg bg-gray-500/5 bg-clip-padding backdrop-filter backdrop-blur-lg
         backdrop-saturate-100 backdrop-contrast-100
        shadow-xl border border-white/20 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
