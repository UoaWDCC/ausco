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

  // Helper to interpolate color
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
      style={{
        background: bgColor,
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0",
        transition: "background 0.5s",
      }}
    >
      <h2
        style={{
          width: "560px",
          maxWidth: "90vw",
          fontSize: "2.7rem",
          fontWeight: 900,
          color: "#2451a6",
          textAlign: "center",
          letterSpacing: "0.01em",
          margin: "0 0 0.5rem 0",
          lineHeight: 1.05,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        From our last concert
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: boxWidth,
          height: boxHeight,
          maxWidth: "95vw",
          maxHeight: "60vh",
          margin: "0 auto",
          transition: "width 0.4s, height 0.4s",
        }}
      >
        {/* Video sector placeholder */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#b0b9c6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#555",
            fontSize: "1.2rem",
            borderRadius: "8px",
            transition: "background 0.4s, width 0.4s, height 0.4s",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Video here
          {hovered && (
            <button
              onClick={handleToggleMute}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#2451a6",
                border: "none",
                borderRadius: "50%",
                padding: "0.5rem",
                cursor: "pointer",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
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