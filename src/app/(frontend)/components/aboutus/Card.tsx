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

const ScrollingLogos = ({ logos }: { logos: { logo?: Media | string | null }[] }) => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // slower = bigger number
        }}
      >
        {[...logos, ...logos].map((item, index) => {
          if (typeof item.logo === "object" && item.logo?.url) {
            return (
              <Image
                key={index}
                src={item.logo.url}
                alt={item.logo.alt || `sponsor ${index + 1}`}
                width={64}
                height={64}
                className="shrink-0 rounded-md object-contain"
              />
            );
          }
          return null;
        })}
      </motion.div>
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

  const logosWrapperRef = React.useRef<HTMLDivElement>(null);
  const logosRowRef = React.useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = React.useState(false);

  React.useEffect(() => {
    if (!logosWrapperRef.current || !logosRowRef.current) return;

    const checkOverflow = () => {
      const maxWidth = logosWrapperRef.current!.clientWidth;
      const contentWidth = logosRowRef.current!.scrollWidth;

      setShouldScroll(contentWidth > maxWidth);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(logosWrapperRef.current);
    resizeObserver.observe(logosRowRef.current);

    return () => resizeObserver.disconnect();
  }, [sponsorLogos]);

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
          <div
            ref={logosWrapperRef}
            className="relative mb-4 flex max-w-full items-center overflow-hidden rounded-md bg-(--lightblue) px-6 py-3"
          >
            {/* Hidden measurement row (always rendered) */}
            <div
              ref={logosRowRef}
              className="pointer-events-none invisible absolute flex w-max flex-nowrap gap-6"
            >
              {sponsorLogos!.map(
                (item, index) =>
                  typeof item.logo === "object" &&
                  item.logo?.url && (
                    <Image
                      key={index}
                      src={item.logo.url}
                      alt=""
                      width={64}
                      height={64}
                      className="shrink-0 rounded-md object-contain"
                    />
                  ),
              )}
            </div>

            {/* Visible Content */}
            {shouldScroll ? (
              <ScrollingLogos logos={sponsorLogos!} />
            ) : (
              <div className="flex flex-nowrap items-center justify-center gap-6">
                {sponsorLogos!.map(
                  (item, index) =>
                    typeof item.logo === "object" &&
                    item.logo?.url && (
                      <Image
                        key={index}
                        src={item.logo.url}
                        alt={item.logo.alt || `sponsor ${index + 1}`}
                        width={64}
                        height={64}
                        className="rounded-md object-contain"
                      />
                    ),
                )}
              </div>
            )}
          </div>
        )}

        {isLinked ? (
          <Button variant="link" asChild className="mt-7">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h1 className="m-0! text-3xl! font-semibold!">{description}</h1>
            </a>
          </Button>
        ) : (
          <p className="overflow-scroll text-center text-base">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
