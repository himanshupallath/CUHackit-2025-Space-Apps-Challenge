import { motion } from "framer-motion";
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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
  <div className="relative h-full flex flex-col items-center text-center px-4 pt-14 sm:pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-8 space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#028E41] leading-relaxed mb-2">
            {title.split("—")[0].trim()}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#028E41] leading-relaxed">
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
          className="w-full max-w-4xl"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow bg-card/10 backdrop-blur-sm">
            <div className="w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[620px]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={worldTimelapse} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
