"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBannerStore } from "../../zustand/BannerStore";
import GlassContainer from "../Global/GlassContainer";

const Banner: React.FC = () => {
  const { PostIndex, incrementPostIndex } = useBannerStore();

  const LaunchPosts = [
    {
      title: "Stellar: Chapter 2 Season 2",
      description: "Take out enemies, defeat bosses, and dominate the island.",
      banner:
        "https://cdn.discordapp.com/attachments/1414921548292427816/1442252514933346415/image.png?ex=6924c1d3&is=69237053&hm=c41dd0579ef38c037342e142f83782bc2cebd5e4210fb6987e4712b6a88b2c52&",
    },
    {
      title: "Challenges & XP",
      description:
        "Complete daily quests and weekly challenges to earn XP and rewards.",
      banner:
        "https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fnew-storm-the-agency-challenges-and-more%2F12BR_StormTheAgency_Screenshot_NewsHeader-1920x1080-827d2a34a897754277e78a3af9efbdad64dddcaa.jpg",
    },
  ];

  return (
    <GlassContainer className="relative w-full transition-all border border-white/20 rounded-lg overflow-hidden shadow-lg h-72">
      <AnimatePresence>
        <motion.img
          key={PostIndex}
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          exit={{ filter: "blur(20px)", opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.45,
          }}
          src={LaunchPosts[PostIndex].banner}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
          draggable={false}
        />
      </AnimatePresence>

      <div className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/20 to-transparent">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-1" />

          <div className="space-y-4">
            <div className="space-y-2">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={PostIndex}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  exit={{ filter: "blur(10px)", opacity: 0, y: -10 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                  }}
                  className="text-2xl font-bold text-white"
                >
                  {LaunchPosts[PostIndex].title}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={PostIndex}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  exit={{ filter: "blur(10px)", opacity: 0, y: -10 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="text-white/80 text-sm leading-relaxed max-w-lg"
                >
                  {LaunchPosts[PostIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <button className="px-6 py-2 bg-white/10 cursor-pointer hover:bg-white/20 border border-white/20 text-white rounded-md font-semibold text-sm transition-all flex items-center gap-2 backdrop-blur-sm hover:scale-105 active:scale-95">
                Play Now
              </button>

              {LaunchPosts.length > 1 && (
                <div className="flex items-center gap-2">
                  {LaunchPosts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {}}
                      className="relative group"
                    >
                      <div
                        className={`h-1 rounded-full transition-all duration-500 ${
                          index === PostIndex
                            ? "w-8 bg-white"
                            : "w-4 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                      {index === PostIndex && (
                        <motion.div
                          className="absolute inset-0 h-1 rounded-full bg-white/40 origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 4,
                            ease: "linear",
                          }}
                          onAnimationComplete={incrementPostIndex}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </GlassContainer>
  );
};

export default Banner;
