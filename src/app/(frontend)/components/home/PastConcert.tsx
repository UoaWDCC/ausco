"use client";

import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const PastConcert = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      let ratio = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
      ratio = Math.max(0, Math.min(1, ratio));
      setScrollRatio(ratio);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function interpolateColor(hex1: string, hex2: string, factor: number) {
    const c1 = hex1.match(/\w\w/g)!.map(x => parseInt(x, 16));
    const c2 = hex2.match(/\w\w/g)!.map(x => parseInt(x, 16));
    const result = c1.map((v, i) => Math.round(v + (c2[i] - v) * factor));
    return `#${result.map(x => x.toString(16).padStart(2, "0")).join("")}`;
  }

  const bgColor = interpolateColor("c7d5e8", "2451a6", scrollRatio);

  // Video box size: from 560x315 to 95vw x 60vh
  const minW = 560, minH = 315;
  const maxW = typeof window !== "undefined" ? window.innerWidth * 0.95 : minW;
  const maxH = typeof window !== "undefined" ? window.innerHeight * 0.6 : minH;
  const boxWidth = minW + (maxW - minW) * scrollRatio;
  const boxHeight = minH + (maxH - minH) * scrollRatio;

  const handleToggleMute = () => setIsMuted((prev) => !prev);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[60vh] py-8 transition-colors duration-500"
      style={{ background: bgColor }}
    >
      <h2
        className="w-[560px] max-w-[90vw] text-[2.7rem] font-extrabold text-[#2451a6] text-center tracking-tight mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
      >
        From our last concert
      </h2>
      <div
        className="flex items-center justify-center mx-auto transition-all duration-400"
        style={{
          width: boxWidth,
          height: boxHeight,
          maxWidth: "95vw",
          maxHeight: "60vh",
        }}
      >
        <div
          className="w-full h-full bg-[#b0b9c6] flex items-center justify-center text-[#555] text-[1.2rem] rounded-lg transition-all duration-400 relative overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Video here
          {hovered && (
            <button
              onClick={handleToggleMute}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2451a6] border-none rounded-full p-2 cursor-pointer z-20 flex items-center justify-center shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX color="#fff" size={28} />
              ) : (
                <Volume2 color="#fff" size={28} />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PastConcert;