"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Media } from "@/payload-types";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import parallaxConfig from "@/app/(frontend)/config/parallax";

const cardLinks = {
  "Concert Photos": "/gallery/concert",
  "Annual Camp Photos": "/gallery/annual",
  "Executive Camp Photos": "/gallery/executive",
  "Other Photos": "/gallery/other",
} as const;

type CardProps = {
  title: keyof typeof cardLinks;
  background: Media | string | null;
};

const Card = ({ title, background }: CardProps) => {
  const link = cardLinks[title];

  const { rangeIn, rangeOut, spring } = parallaxConfig;
  const { scrollY } = useScroll();
  // image parallax effect scroll speed
  const rawY = useTransform(scrollY, [0, rangeIn], [0, rangeOut]);
  // smooth motion
  const y = useSpring(rawY, spring);

  return (
    <Link
      href={link}
      className="group relative aspect-2/1 w-full overflow-hidden rounded-lg sm:w-1/2"
    >
      {typeof background === "object" && background?.url && (
        <motion.div
          className="absolute inset-x-0 -inset-y-[15%] z-0 will-change-transform"
          style={{ y }}
        >
          <Image
            src={background.url}
            alt={background.alt || title}
            fill
            priority
            sizes="(max-width: 768px) 110vw, 55vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
          />
        </motion.div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-(--cream)">
        <h3 className="relative inline-block text-center text-xl font-semibold after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full sm:text-2xl md:text-3xl">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
