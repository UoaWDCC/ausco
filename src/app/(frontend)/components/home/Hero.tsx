"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Button } from "../ui/button";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import parallaxConfig from "@/app/(frontend)/config/parallax";

type HeroProps = {
  content: {
    secondaryLogo: Media | string | null;
    background: Media | string | null;
    header: any;
    content: string;
    signUpLink: string | undefined;
  };
};

const Hero = ({ content }: HeroProps) => {
  const { rangeIn, rangeOut, spring } = parallaxConfig;
  const { scrollY } = useScroll();

  // image parallax effect scroll speed
  const rawY = useTransform(scrollY, [0, rangeIn], [0, rangeOut]);
  // smooth motion
  const y = useSpring(rawY, spring);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0 will-change-transform" style={{ y }}>
        {typeof content.background === "object" && content.background?.url && (
          <Image
            src={content.background.url}
            alt={content.background.alt || "Home Page Hero"}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>

      {/* Foreground Content - only the content is pushed down by the height of the header component (h-28)*/}
      <div className="relative z-10 flex h-full flex-col items-center gap-10 px-6 pt-40 pb-12 text-center text-(--cream)">
        {/* Logo */}
        {typeof content.secondaryLogo === "object" && content.secondaryLogo?.url && (
          <Image
            src={content.secondaryLogo.url}
            alt={content.secondaryLogo.alt || "Hero Logo"}
            width={280}
            height={280}
            unoptimized={content.secondaryLogo.url.endsWith(".svg")}
          />
        )}

        {/* Header */}
        <h1 className="mt-4! mb-1.5! text-2xl leading-tight font-semibold! md:text-4xl">
          <RichText data={content.header} />
        </h1>

        {/* Content */}
        <h3 className="w-full max-w-208 text-base md:w-[75%] md:text-lg">{content.content}</h3>

        <Button asChild variant="beige" size="lg" className="mt-2.5">
          <a
            href={content.signUpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Join Us
            <ArrowUpRight size={18} />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
