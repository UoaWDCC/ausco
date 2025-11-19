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

const conductorPhotos = [
  {
    filename: "Conductor_1.PNG",
    title: "Conductor 1",
    text: "Description about them (Developers just put lorem ipsum text for now)",
  },
  {
    filename: "Conductor_2.PNG",
    title: "Conductor 2",
    text: "Description about them (Developers just put lorem ipsum text for now)",
  },
  {
    filename: "Conductor_3.PNG",
    title: "Conductor 3",
    text: "Description about them (Developers just put lorem ipsum text for now)",
  },
];

const Conductors = () => {
  const [frameImg, setFrameImg] = useState<PayloadImage | null>(null);
  const [conductorImgs, setConductorImgs] = useState<(PayloadImage | null)[]>([null, null, null]);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    let foundFrame: PayloadImage | null = null;
    const foundConductors: (PayloadImage | null)[] = [null, null, null];
    const allowedNames = ["Conductor_1.PNG", "Conductor_2.PNG", "Conductor_3.PNG"];

    const fetchAllPages = async (page = 1) => {
      const res = await fetch(`/api/media?page=${page}`);
      const data = await res.json();

      if (data.docs && data.docs.length > 0) {
        // Find frame if not already found
        if (!foundFrame) {
          foundFrame =
            data.docs.find((doc: PayloadImage) => doc.filename === "ROUND_FRAME_1.PNG") || null;
        }
        // Find conductors by allowedNames, keep null if not found
        allowedNames.forEach((filename, idx) => {
          if (!foundConductors[idx]) {
            const img = data.docs.find((doc: PayloadImage) => doc.filename === filename);
            foundConductors[idx] = img || null;
          }
        });
      }

      // If there's another page, keep fetching
      if (data.hasNextPage) {
        await fetchAllPages(page + 1);
      }
    };

    fetchAllPages().then(() => {
      setFrameImg(foundFrame);
      setConductorImgs(foundConductors);
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-[#F6F4EC]">
      <h1 className="text-[#264C84] font-bold text-center text-2xl md:text-5xl mt-10 mb-4">
        Conductors
      </h1>
      <div className="flex flex-row items-center justify-center gap-2 md:gap-5 mt-2">
        {conductorImgs.map((img, i) => (
          <div
            key={i}
            className="w-50 h-62 md:w-82 md:h-82 flex items-center justify-center rounded-full relative cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Frame image as background */}
            {frameImg && (
              <Image
                src={frameImg.url}
                alt={frameImg.alt || "Frame"}
                width={frameImg.width || 250}
                height={frameImg.height || 250}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-1/2.5 w-full h-full rounded-full object-cover pointer-events-none"
                style={{ zIndex: 1 }}
                priority={i === 0}
              />
            )}
            {/* Photo or Description hovering */}
            {img ? (
              hovered === i ? (
                <div className="absolute left-1/2 top-1/2 w-33 h-39 md:w-52 md:h-60 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center justify-center bg-[#EEE5D8] z-20 pointer-events-none px-4 rounded-[50%/50%]">
                  <span className="text-center text-m md:text-xl font-bold text-[#602C0F]">
                    {conductorPhotos[i]?.title}
                  </span>
                  <span className="text-center text-s md:text-lg font-medium text-[#602C0F]">
                    {conductorPhotos[i]?.text}
                  </span>
                </div>
              ) : (
                <Image
                  src={img.url}
                  alt={img.alt || `Conductor ${i + 1}`}
                  width={160}
                  height={200}
                  className="absolute left-1/2 top-1/2 w-30 h-40 md:w-52 md:h-66 -translate-x-1/2 -translate-y-1/3 rounded-[50%/50%] object-cover z-10"
                  priority={i === 0}
                />
              )
            ) : hovered === i ? (
              <div className="absolute left-1/2 top-1/2 w-33 h-39 md:w-52 md:h-60 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center justify-center bg-[#EEE5D8] z-20 pointer-events-none px-4 rounded-[50%/50%]">
                <span className="text-center text-m md:text-xl font-bold text-[#602C0F]">
                  Conductor doesn&apos;t exist
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Conductors;
