"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface GalleryCarouselProps {
  title: string;
  images?: GalleryImage[];
}

export default function GalleryCarousel({ title, images = [] }: GalleryCarouselProps) {
  //carousel starts from left side, free drag scrolling
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  //carousel prev/next button visibility state
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  //lightbox modal open state
  const [openImageIdx, setOpenImageIdx] = useState<number | null>(null);

  //carousel scroll functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  //update button visibility on carousel state change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  //carousel event listeners
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

  //lightbox nav functions
  const openLightbox = useCallback((index: number) => {
    setOpenImageIdx(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setOpenImageIdx(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (openImageIdx === null || !images) return;
      if (direction === "prev") {
        setOpenImageIdx(openImageIdx > 0 ? openImageIdx - 1 : images.length - 1);
      } else {
        setOpenImageIdx(openImageIdx < images.length - 1 ? openImageIdx + 1 : 0);
      }
    },
    [openImageIdx, images],
  );

  return (
    <section>
      <div className="flex flex-col gap-8 gap-20 py-8 md:py-20">
        {/*carousel title*/}
        <h3 className="px-4 sm:px-8 md:px-12 text-2xl text-[var(--navy)] font-semibold tracking-tight md:text-3xl">
          {title}
        </h3>

        {(!images || images.length === 0) && (
          <div className="px-4 sm:px-8 md:px-12">
            <p className="text-lg text-[var(--navy)]">
              This album has no photos to show right now, check back later!
            </p>
          </div>
        )}

        {images && images.length > 0 && (
          <div className="relative w-full px-4 sm:px-8 md:px-12">
          {/*nav buttons*/}
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1 text-[var(--navy)] hover:text-[var(--lightblue)] focus:outline-none transition-colors cursor-pointer"
            >
              <ChevronLeft size={30} strokeWidth={2.5} />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1 text-[var(--navy)] hover:text-[var(--lightblue)] focus:outline-none transition-colors cursor-pointer"
            >
              <ChevronRight size={30} strokeWidth={2.5} />
            </button>
          )}

          {/*carousel container*/}
          <div ref={emblaRef} className="overflow-hidden">
            {/*styling + hide scrollbar*/}
            <div className="flex gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/*map + render images, scale for consistent height while maintaining aspect ratio*/}
              {images.map((img, idx) => (
                <div key={`${img.src}-${idx}`} className="flex-shrink-0 min-w-0">
                  <img
                    src={img.src}
                    alt={img.alt ?? `Gallery Image ${idx + 1}`}
                    className="h-28 sm:h-36 md:h-40 lg:h-44 w-auto max-w-[350px] max-h-[220px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openLightbox(idx)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>

      <hr className="border-t-2 border-[var(--navy)] hidden sm:block" />

      {/*lightbox modal*/}
      {images && openImageIdx !== null && images[openImageIdx] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/*close modal*/}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-[var(--navy)] focus:outline-none cursor-pointer"
          >
            <X size={32} strokeWidth={2.5} />
          </button>

          {/*nav buttons*/}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white hover:text-[var(--navy)] focus:outline-none cursor-pointer"
            >
              <ChevronLeft size={32} strokeWidth={2.5} />
            </button>
          )}

          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white hover:text-[var(--navy)] focus:outline-none cursor-pointer"
            >
              <ChevronRight size={32} strokeWidth={2.5} />
            </button>
          )}

          {/*opened image*/}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[openImageIdx].src}
              alt={images[openImageIdx].alt ?? `Gallery Image ${openImageIdx + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
