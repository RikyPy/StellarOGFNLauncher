import React from "react";
import GlassContainer from "../Global/GlassContainer";

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-start gap-2 mt-2">
      <div className="min-w-120"></div>

      <div className="flex items-center gap-3">
        <GlassContainer className="rounded-lg bg-glass-noise shadow-lg p-3 w-48">
          {" "}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={`https://cdn.discordapp.com/avatars/903815911830589462/843e986f0a518b1b7eab8f17424241ae.png?size=512`}
                  className="rounded-xs scale-x-[1] w-10 h-10"
                  alt="pfp"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-white">andr1ww</h3>
              <span className="text-xs text-gray-300">Online</span>
            </div>
          </div>
        </GlassContainer>
      </div>
    </div>
  );
};

export default Header;
