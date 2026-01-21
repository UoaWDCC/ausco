"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { Media } from "@/payload-types";

type LogoCarouselProps = {
  logos: {
    logo?: Media | string | null;
  }[];
};

const LogoCarousel = ({ logos }: LogoCarouselProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [duplicateCount, setDuplicateCount] = React.useState(2);
  const validLogos = logos.filter((item) => typeof item.logo === "object" && item.logo?.url); // Filter out invalid logos

  // Calculate how many times to duplicate logos based on container width
  React.useEffect(() => {
    if (!containerRef.current || validLogos.length === 0) return;

    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = 88; // 64px logo + 24px gap
    const totalLogosWidth = itemWidth * validLogos.length;

    // Duplicate enough times to fill at least 2x the container width
    const needed = Math.ceil((containerWidth * 2) / totalLogosWidth);
    setDuplicateCount(Math.max(2, needed));
  }, [validLogos.length]);

  if (validLogos.length === 0) return null;

  const duplicatedLogos = Array(duplicateCount).fill(validLogos).flat();
  const duration = 40 + duplicatedLogos.length * 0.3; // Seconds to complete one full loop - increase/decrease the base number to speed up/slow down one loop

  const LogoSet = ({ keyPrefix }: { keyPrefix: string }) => (
    <motion.div
      className="flex h-full shrink-0 items-center gap-18 pr-18 md:gap-23 md:pr-23"
      animate={{ x: [0, "-100%"] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      }}
    >
      {duplicatedLogos.map((item, index) => {
        const logo = item.logo as Media;
        return (
          <div
            key={`${keyPrefix}-${index}`}
            className="relative h-full shrink-0"
            style={{ aspectRatio: `${logo.width || 1} / ${logo.height || 1}` }}
          >
            <Image
              src={logo.url!}
              alt={logo.alt || `sponsor ${(index % validLogos.length) + 1}`}
              fill
              className="rounded-md object-contain"
              quality={90}
            />
          </div>
        );
      })}
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-24 w-full items-center overflow-hidden rounded-md bg-(--lightblue) md:mb-4 md:py-2"
    >
      <div className="flex h-full">
        <LogoSet keyPrefix="first" />
        <LogoSet keyPrefix="second" />
      </div>
    </div>
  );
};

export default LogoCarousel;
