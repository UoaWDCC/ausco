"use client";

import { useRef } from "react";

const PastConcert = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[60vh] py-8 w-full"
      style={{ background: "var(--headerblue)" }}
    >
      <h2
        className="w-full max-w-[90vw] text-[2rem] sm:text-[2.7rem] font-bold text-center tracking-tight mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
        style={{ color: "var(--navy)" }}
      >
        From our last concert
      </h2>
    </section>
  );
};

export default PastConcert;
