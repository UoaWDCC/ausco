"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { inView } from "motion";
import { motion, useScroll, useTransform } from "motion/react";

type FeatureVideoProps = {
  content: string;
};

const FeatureVideo = ({ content }: FeatureVideoProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [showHeader, setShowHeader] = useState(true); // TODO: maybe safe to remove/hard code showHeader if its a constant
  const [maxScale, setMaxScale] = useState<number>(3);
  const [sectionHeight, setSectionHeight] = useState<string>("100vh");

  // Compute embed URL with autoplay, mute, and loop
  const embedUrl = useMemo(() => {
    if (!content) return "";

    const match = content.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    const id = match?.[1];

    const finalId = id ?? "dQw4w9WgXcQ"; // fallback video

    return (
      `https://www.youtube.com/embed/${finalId}` + `?autoplay=0&mute=1&loop=1&playlist=${finalId}`
    );
  }, [content]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const unclampedScale = useTransform(scrollYProgress, [0.25, 0.45], [1, maxScale]);
  const scaleValue = useTransform(unclampedScale, (v) => Math.max(0.75, Math.min(maxScale, v)));
  const bgColor = useTransform(scrollYProgress, [0.2, 0.5], ["#c7d5e8", "#264c84"]);
  const headerOpacity = useTransform(scrollYProgress, [0.15, 0.45], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0.15, 0.55], [0, -50]);

  // Compute section height and max scale on mount and resize
  useEffect(() => {
    const compute = () => {
      if (!videoContainerRef.current) return;
      const width = videoContainerRef.current.offsetWidth;
      const height = videoContainerRef.current.offsetHeight;
      if (!width) return;

      const scale = Math.min(1.6, Math.max(1, (window.innerWidth * 0.8) / width));
      setMaxScale(scale);
      setSectionHeight(
        `${Math.max(height * scale + (showHeader ? 296 : 196), window.innerHeight)}px`,
      );
    };

    const resizeObserver = new ResizeObserver(compute);
    if (videoContainerRef.current) {
      compute();
      resizeObserver.observe(videoContainerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [showHeader]);

  // Autoplay video when 50% in view
  useEffect(() => {
    if (!videoContainerRef.current) return;
    return inView(
      videoContainerRef.current,
      () => {
        const iframe = videoContainerRef.current?.querySelector("iframe");
        if (iframe && iframe.src.includes("autoplay=0")) {
          iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
        }
      },
      { amount: 0.5 },
    );
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-8 gap-8 w-full"
      style={{ backgroundColor: bgColor, minHeight: sectionHeight }}
    >
      {/* Header */}
      <motion.h2
        className="w-full max-w-[90vw] text-[2rem] sm:text-[2.7rem] font-bold text-center tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis relative z-20"
        style={{
          color: "var(--concertblue)",
          opacity: headerOpacity,
          top: "0px",
          y: headerY,
        }}
      >
        From our last concert
      </motion.h2>

      {/* Feature Video */}
      <motion.div
        ref={videoContainerRef}
        className="flex items-center justify-center mx-auto bg-black relative overflow-hidden w-[180px] sm:w-[420px] md:w-[660px] max-w-[100vw] aspect-video z-10"
        style={{ scale: scaleValue }}
      >
        <iframe
          loading="lazy"
          src={embedUrl}
          className="w-full h-full"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          title="Past concert video"
        />
      </motion.div>
    </motion.section>
  );
};

export default FeatureVideo;
