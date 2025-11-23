import React from "react";

interface GlassProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassContainer: React.FC<GlassProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`bg-gray-500/5 bg-clip-padding backdrop-filter backdrop-blur-lg
         backdrop-saturate-100 backdrop-contrast-100
        shadow-xl border border-white/20 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
