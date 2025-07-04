"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PayloadImage {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  filename?: string;
}

const imagePositions = [
  "top-1/8 right-1/4 w-25 h-16",
  "top-1/4 right-1/10 w-45 h-45",
  "bottom-1/4 right-1/6 w-25 h-20",
  "bottom-1/8 right-1/3 w-40 h-16",
  "bottom-1/6 left-1/4 w-20 h-25",
  //"bottom-1/9 left-1/6 w-20 h-16",
  "bottom-1/4 left-1/15 w-50 h-50",
  //"top-1/3 left-1/8 w-20 h-20",
  "top-1/4 left-1/7 w-20 h-20",
  "top-1/8 left-1/3 w-40 h-40",
];

const allowedFilenames = [
  "BlueQuavers.PNG",
  "ViolinSticker.PNG",
  "BlueStars.PNG",
  "SheetMusic.PNG",
  "BlueSemiquaver.PNG",
  "CelloSticker.PNG",
  "BlueStars.PNG",
  "MusicStand.PNG",
];

const HeroSection = () => {
  const [images, setImages] = useState<PayloadImage[]>([]);

  useEffect(() => {
    fetch("/api/media")
      .then((res) => res.json())
      .then((data) => {
        if (data.docs && data.docs.length > 0) {
          const filtered = data.docs.filter((doc: any) =>
            allowedFilenames.includes(doc.filename)
          );
          // This will allow duplicates as in allowedFilenames
          interface MediaDoc {
            id: string;
            url: string;
            alt?: string;
            width?: number;
            height?: number;
            filename?: string | null;
          }

          const sorted: (PayloadImage | null)[] = allowedFilenames.map((name) =>
            name ? filtered.find((img: PayloadImage) => img.filename === name) || null : null
          );
          setImages(sorted.slice(0, imagePositions.length).filter((img): img is PayloadImage => img !== null));
        }
      });
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center w-full bg-[#F6F4EC]" style={{ height: "100vh", minHeight: "400px" }}
    >
      {/* Circle Images */}
      <div className="absolute inset-0 pointer-events-none">
        {images.map((img: PayloadImage | null, i: number) =>
          img ? (
            <div
              key={`${img.id}-${i}`} className={`rounded-md absolute ${imagePositions[i]}`} style={{ position: "absolute" }}
            >
              <Image
                src={img.url}
                alt={img.alt || ""}
                width={img.width || 160}
                height={img.height || 160}
                className="rounded-md"
                priority={i === 0}
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : null
        )}
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-20">
        <h1
          className="text-[#264C84] font-extrabold text-center text-2xl md:text-4xl" style={{ margin: 0 }}
        >
          About Us
        </h1>
        <p>&quot; &quot;</p>
        <p
          className="text-[#264C84] text-center leading-relaxed max-w-2xl text-sm md:text-lg" style={{ fontSize: "clamp(0.8rem,1.2vw,1.2rem)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
