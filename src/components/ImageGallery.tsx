import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import type { Plan } from "@/data/plans";
import heatmap from "@/assets/heatmap.jpg";
import greenRoofs from "@/assets/green_roofs.jpg";
import coPlume from "@/assets/co_plume.jpg";
import hepa from "@/assets/hepa.jpg";
import burnPerimeter from "@/assets/burn_perimeter.jpg";
import floodLines from "@/assets/flood_lines.jpg";

interface ImageGalleryProps {
  images: Plan["gallery"];
}

const imageMap: Record<string, string> = {
  "/heatmap": heatmap,
  "/green_roofs": greenRoofs,
  "/co_plume": coPlume,
  "/hepa": hepa,
  "/burn_perimeter": burnPerimeter,
  "/flood_lines": floodLines,
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map(img => ({
    src: imageMap[img.src],
    title: img.caption,
  }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group cursor-pointer"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300">
              <img
                src={imageMap[image.src]}
                alt={image.caption}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.caption}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
};
