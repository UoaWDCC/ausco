"use client";

import React from "react";
import Image from "next/image";

import { Media } from "@/payload-types";
import { Button } from "../ui/button";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import parallaxConfig from "@/config/parallax";

export type CardProps = {
  icon: React.ReactNode;
  background: string | null;
  alt: string;
  title: string;
  summary: string;
  description?: string;
  link?: string | undefined;
  sponsorLogos?: { logo?: Media | string | null }[] | null;
};

const ScrollingLogos = ({ logos }: { logos: { logo?: Media | string | null }[] }) => {
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
      className="flex h-full shrink-0 items-center gap-23 pr-23"
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
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div className="flex h-full">
        <LogoSet keyPrefix="first" />
        <LogoSet keyPrefix="second" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-(--lightblue) to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-(--lightblue) to-transparent" />
    </div>
  );
};

const Card = ({
  icon,
  background,
  alt,
  title,
  summary,
  description,
  link,
  sponsorLogos,
}: CardProps) => {
  const isLinked = link ? link.trim() !== "" : false;
  const isSponsored = sponsorLogos && sponsorLogos.length > 0;

  const { rangeIn, rangeOut, spring } = parallaxConfig;
  const { scrollY } = useScroll();
  // image parallax effect scroll speed
  const rawY = useTransform(scrollY, [0, rangeIn], [0, rangeOut]);
  // smooth motion
  const y = useSpring(rawY, spring);

  return (
    <div className="group relative block h-[400px] w-full overflow-hidden rounded-lg px-18 py-18 text-(--lightblue)">
      {/* On Display: Background Image */}
      <motion.div
        className="absolute inset-x-0 -inset-y-[20%] z-0 will-change-transform"
        style={{ y }}
      >
        <Image
          src={background!}
          alt={alt}
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 110vw, 55vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* On Display: Content */}
      <div className="relative z-10 flex h-full flex-col items-center text-center">
        <div className="flex h-1/2 w-full flex-col items-center justify-between">
          <div className="flex justify-center">{icon}</div>

          <h1 className="m-0! text-4xl! font-semibold!">{title}</h1>
        </div>

        <div className="mt-4 flex h-1/2 w-full items-start">
          <p className="text-base">{summary}</p>
        </div>
      </div>

      {/* On Hover: Background Colour */}
      <div className="absolute inset-0 z-10 transition-colors duration-500 group-hover:bg-(--navy)"></div>

      {/* On Hover: Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start px-18 py-18 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="mb-4 flex justify-center">{icon}</div>

        {isSponsored && (
          <div className="relative mb-4 flex h-24 w-full items-center overflow-hidden rounded-md bg-(--lightblue) py-3">
            {/* Visible Content */}
            <ScrollingLogos logos={sponsorLogos!} />
          </div>
        )}

        {isLinked ? (
          <Button variant="link" asChild className="mt-7">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h1 className="m-0! text-3xl! font-semibold!">{description}</h1>
            </a>
          </Button>
        ) : (
          <p className="text-center text-base">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
