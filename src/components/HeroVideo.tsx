import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import earthHero from "@/assets/earth_hero.jpg";
import worldTimelapse from "@/assets/world_temperature_timelapse.mp4";

interface HeroVideoProps {
  title: string;
  subtitle: string;
}

export const HeroVideo = ({ title, subtitle }: HeroVideoProps) => {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={earthHero} 
          alt="Earth from space"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
  <div className="relative h-full flex flex-col items-center text-center px-4 pt-12 sm:pt-12 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-8 space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFD700] leading-relaxed mb-2">
            {title.split("—")[0].trim()}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700] leading-relaxed">
            {title.split("—")[1]?.trim() || ""}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto pt-2">
            {subtitle}
          </p>
        </motion.div>

        {/* Video Overlay Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl mb-20 lg:mb-32 relative"

        >
        <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow bg-card/10 backdrop-blur-sm">
            <div className="w-full aspect-video relative">
                <video
                  ref={useRef<HTMLVideoElement | null>(null)}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                >
                  <source src={worldTimelapse} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Native controls provide pause/rewind/progress and fullscreen on most browsers. */}
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
