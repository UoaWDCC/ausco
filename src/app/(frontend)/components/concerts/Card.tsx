"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Archive, ArrowUpRight, CalendarClock } from "lucide-react";

import { Media } from "@/payload-types";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import parallaxConfig from "@/config/parallax";

type CardProps = {
  background: Media | string | null;
  type: "upcoming" | "past";
};

const Card = ({ background, type }: CardProps) => {
  const link = type === "upcoming" ? "/concerts/upcoming" : "/concerts/past";
  const label = type === "upcoming" ? "Upcoming" : "Past";
  const icon =
    type === "upcoming" ? (
      <CalendarClock className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 mb-1 sm:mb-2 md:mb-4" />
    ) : (
      <Archive className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 mb-1 sm:mb-2 md:mb-4" />
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
      className="relative w-full sm:w-1/2 aspect-5/3 sm:aspect-5/4 overflow-hidden rounded-lg group"
    >
      {typeof background === "object" && background?.url && (
        <motion.div
          className="absolute -inset-y-[15%] inset-x-0 z-0 will-change-transform"
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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
        {icon}
        <h3
          className="md:mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-center relative inline-block
            after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current
            after:transition-[width] after:duration-300 group-hover:after:w-full"
        >
          {label}
        </h3>
        <h3
          className="flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-center relative
            after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current
            after:transition-[width] after:duration-300 group-hover:after:w-full"
        >
          Concerts <ArrowUpRight className="sm:ml-1 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </h3>
      </div>
    </Link>
  );
};

export default Card;
