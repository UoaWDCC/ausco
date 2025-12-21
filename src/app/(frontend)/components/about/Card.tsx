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
  description: string;
  link?: string | undefined;
  sponsorLogos?: { logo?: Media | string | null }[] | null;
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
    <div className="group relative block w-full h-[400px] overflow-hidden rounded-lg text-(--lightblue) py-18 px-18">
      {/* On Display: Background Image */}
      <motion.div
        className="absolute -inset-y-[20%] inset-x-0 z-0 will-change-transform"
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
      <div className="relative z-10 h-full flex flex-col items-center text-center">
        <div className="flex flex-col justify-between items-center h-1/2 w-full">
          <div className="flex justify-center">{icon}</div>

          <h1 className="font-semibold! text-4xl! m-0!">{title}</h1>
        </div>

        <div className="h-1/2 w-full flex items-start mt-4">
          <p className="text-base">{summary}</p>
        </div>
      </div>

      {/* On Hover: Background Colour */}
      <div className="absolute inset-0 z-10 group-hover:bg-(--navy) transition-colors duration-500"></div>

      {/* On Hover: Content */}
      <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-start text-center py-18 px-18">
        <div className="flex justify-center mb-4">{icon}</div>

        {isSponsored && (
          <div className="bg-(--lightblue) py-3 px-6 mb-4 rounded-md gap-6 flex flex-wrap justify-center items-center">
            {sponsorLogos?.map(
              (item, index) =>
                typeof item.logo === "object" &&
                item.logo?.url && (
                  <Image
                    key={index}
                    src={item.logo.url}
                    alt={item.logo.alt || `sponsor ${index + 1}`}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="object-contain"
                  />
                ),
            )}
          </div>
        )}

        {isLinked ? (
          <Button variant="link" asChild className="mt-7">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h1 className="font-semibold! text-3xl! m-0!">{description}</h1>
            </a>
          </Button>
        ) : (
          <p className="text-base text-center">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
