"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Media } from "@/payload-types";
import Image from "next/image";

type CarouselProps = {
  album: {
    year: number;
    title: string;
    images: (Media | string)[];
  };
};

const Carousel = ({ album }: CarouselProps) => {
  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  // Carousel button state
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Lightbox state
  const [openImageIdx, setOpenImageIdx] = useState<number | null>(null);

  // Embla scroll functions
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Lightbox navigation
  const openLightbox = useCallback((index: number) => setOpenImageIdx(index), []);
  const closeLightbox = useCallback(() => setOpenImageIdx(null), []);
  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (openImageIdx === null || !album.images) return;

      if (direction === "prev") {
        setOpenImageIdx(openImageIdx > 0 ? openImageIdx - 1 : album.images.length - 1);
      } else {
        setOpenImageIdx(openImageIdx < album.images.length - 1 ? openImageIdx + 1 : 0);
      }
    },
    [openImageIdx, album.images],
  );

  // Helper to normalize image source & alt
  const getSrc = (img: Media | string) => (typeof img === "string" ? img : img.url || "");
  const getAlt = (img: Media | string, index: number) =>
    typeof img === "string"
      ? `Gallery Image ${index + 1}`
      : img.alt || img.filename || `Gallery Image ${index + 1}`;

  return (
    <section className="w-full">
      <div className="flex flex-col gap-20">
        {/* Title */}
        <h2 className="font-medium text-2xl text-(--navy) pb-7 text-left">
          {album.year}: {album.title}
        </h2>

        {/* Carousel */}
        {album.images && album.images.length > 0 && (
          <div className="relative w-full px-4 sm:px-8 md:px-12">
            {/* Navigation buttons */}
            {canScrollPrev && (
              <button
                onClick={scrollPrev}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1 text-(--navy) hover:text-(--lightblue) focus:outline-none transition-colors cursor-pointer"
              >
                <ChevronLeft size={30} strokeWidth={2.5} />
              </button>
            )}
            {canScrollNext && (
              <button
                onClick={scrollNext}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1 text-(--navy) hover:text-(--lightblue) focus:outline-none transition-colors cursor-pointer"
              >
                <ChevronRight size={30} strokeWidth={2.5} />
              </button>
            )}

            {/* Carousel track */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {album.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative shrink-0 min-w-0 h-28 sm:h-36 md:h-40 lg:h-44 w-[350px] max-h-[220px] cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={getSrc(img)}
                      alt={getAlt(img, index)}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {album.images && openImageIdx !== null && album.images[openImageIdx] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-(--navy) focus:outline-none cursor-pointer"
          >
            <X size={32} strokeWidth={2.5} />
          </button>

          {/* Navigation */}
          {album.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white hover:text-(--navy) focus:outline-none cursor-pointer"
              >
                <ChevronLeft size={32} strokeWidth={2.5} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white hover:text-(--navy) focus:outline-none cursor-pointer"
              >
                <ChevronRight size={32} strokeWidth={2.5} />
              </button>
            </>
          )}

          {/* Opened image */}
          <div
            className="relative w-[90vw] h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {album.images[openImageIdx] && getSrc(album.images[openImageIdx]) && (
              <Image
                src={getSrc(album.images[openImageIdx])}
                alt={getAlt(album.images[openImageIdx], openImageIdx)}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
