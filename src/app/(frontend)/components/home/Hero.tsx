"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Button } from "../ui/button";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";

type HeroProps = {
  content: {
    secondaryLogo: Media | string | null;
    background: Media | string | null;
    header: any;
    content: string;
  };
};

const Hero = ({ content }: HeroProps) => {

  const { scrollY } = useScroll();

  // Parallax: image moves more slowly than the page scroll, adjust ranges to taste
  const rawY = useTransform(scrollY, [0, 800], [0, 150]);  

  // smooth the motion for a nicer feel
  const y = useSpring(rawY, { damping: 20, stiffness: 120 });

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{y}}>
        {typeof content.background === "object" && content.background?.url && (
          <Image
            src={content.background.url}
            alt={content.background.alt || "Home Page Hero"}
            fill
            priority
            className="object-cover w-full h-full"
          />
        )}
      </motion.div>

      {/* Foreground Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center text-[var(--cream)] h-full px-6 py-12 md:py-16 lg:py-20 gap-10"
        style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}
      >
        {/* Logo */}
        {typeof content.secondaryLogo === "object" && content.secondaryLogo?.url && (
          <Image
            src={content.secondaryLogo.url}
            alt={content.secondaryLogo.alt || "Hero Logo"}
            width={280}
            height={280}
          />
        )}

        {/* Header */}
        <h1 className="text-2xl md:text-4xl !font-semibold leading-tight !mt-4 !mb-1.5">
          <RichText data={content.header} />
        </h1>

        {/* Content */}
        <h3 className="text-base md:text-lg w-full md:w-[75%] max-w-[52rem]">{content.content}</h3>

        <Button variant="beige" size="lg" className="mt-2.5">
          Join Us
          <ArrowUpRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
