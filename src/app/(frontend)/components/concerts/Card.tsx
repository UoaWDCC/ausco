"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Archive, ArrowUpRight, CalendarClock } from "lucide-react";

import { Media } from "@/payload-types";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import parallaxConfig from "@/app/(frontend)/config/parallax";

type CardProps = {
  background: Media | string | null;
  type: "upcoming" | "past";
};

const Card = ({ background, type }: CardProps) => {
  const link = type === "upcoming" ? "/concerts/upcoming" : "/concerts/past";
  const label = type === "upcoming" ? "Upcoming" : "Past";
  const icon =
    type === "upcoming" ? (
      <CalendarClock className="mb-1 h-8 w-8 sm:mb-2 sm:h-9 sm:w-9 md:mb-4 md:h-11 md:w-11" />
    ) : (
      <Archive className="mb-1 h-8 w-8 sm:mb-2 sm:h-9 sm:w-9 md:mb-4 md:h-11 md:w-11" />
    );

  const { rangeIn, rangeOut, spring } = parallaxConfig;
  const { scrollY } = useScroll();
  // image parallax effect scroll speed
  const rawY = useTransform(scrollY, [0, rangeIn], [0, rangeOut]);
  // smooth motion
  const y = useSpring(rawY, spring);

  return (
    <Link
      href={link}
      className="group relative aspect-5/3 w-full overflow-hidden rounded-lg sm:aspect-5/4 sm:w-1/2"
    >
      {typeof background === "object" && background?.url && (
        <motion.div
          className="absolute inset-x-0 -inset-y-[15%] z-0 will-change-transform"
          style={{ y }}
        >
          <Image
            src={background.url}
            alt={background.alt || `${label} Concerts Image`}
            fill
            priority
            sizes="(max-width: 768px) 110vw, 55vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
          />
        </motion.div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-(--cream)">
        {icon}
        <h3 className="relative inline-block text-center text-xl font-semibold after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full sm:text-2xl md:mb-2 md:text-3xl">
          {label}
        </h3>
        <h3 className="relative flex items-center text-center text-xl font-semibold after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full sm:text-2xl md:text-3xl">
          Concerts <ArrowUpRight className="h-7 w-7 sm:ml-1 sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </h3>
      </div>
    </Link>
  );
};

export default Card;
