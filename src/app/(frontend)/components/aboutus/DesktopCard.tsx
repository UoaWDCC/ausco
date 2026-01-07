"use client";

import React from "react";
import Image from "next/image";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { Media } from "@/payload-types";
import parallaxConfig from "@/config/parallax";

import { Button } from "../ui/button";
import LogoCarousel from "./LogoCarousel";

type DesktopCardProps = {
  icon: React.ReactNode;
  background: string | null;
  alt: string;
  title: string;
  summary: string;
  description?: string;
  link?: string | undefined;
  sponsorLogos?: { logo?: Media | string | null }[] | null;
};

const DesktopCard = ({
  icon,
  background,
  alt,
  title,
  summary,
  description,
  link,
  sponsorLogos,
}: DesktopCardProps) => {
  const isLinked = link ? link.trim() !== "" : false;
  const isSponsored = sponsorLogos && sponsorLogos.length > 0;

  const { rangeIn, rangeOut, spring } = parallaxConfig;
  const { scrollY } = useScroll();
  // image parallax effect scroll speed
  const rawY = useTransform(scrollY, [0, rangeIn], [0, rangeOut]);
  // smooth motion
  const y = useSpring(rawY, spring);

  return (
    <div className="group relative block h-[390px] w-full overflow-hidden rounded-lg px-16 py-16 text-(--lightblue)">
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

        <div className="mt-4 h-1/2 w-full overflow-hidden">
          <p className="line-clamp-4 text-base">{summary}</p>
        </div>
      </div>

      {/* On Hover: Background Colour */}
      <div className="absolute inset-0 z-10 transition-colors duration-500 group-hover:bg-(--navy)"></div>

      {/* On Hover: Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start px-16 py-16 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="mb-4 flex justify-center">{icon}</div>

        {isSponsored && (
          <div className="relative mb-4 flex h-24 w-full items-center overflow-hidden rounded-md bg-(--lightblue) py-2">
            {/* Visible Content */}
            <LogoCarousel logos={sponsorLogos} />
          </div>
        )}

        {isLinked ? (
          <Button variant="link" asChild className="mt-10">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h1 className="line-clamp-3 text-3xl">{description}</h1>
            </a>
          </Button>
        ) : (
          <p className={`text-center text-base ${isSponsored ? "line-clamp-2" : "line-clamp-6"}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default DesktopCard;
