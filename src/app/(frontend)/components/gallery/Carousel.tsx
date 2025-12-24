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
      if (openImageIdx === null || !album.images) return;
      if (direction === "prev") {
        setOpenImageIdx(openImageIdx > 0 ? openImageIdx - 1 : album.images.length - 1);
      } else {
        setOpenImageIdx(openImageIdx < album.images.length - 1 ? openImageIdx + 1 : 0);
      }
    },
    [openImageIdx, album.images],
  );

  return (
    <section>
      <div className="flex flex-col gap-8 gap-20 py-8 md:py-20">
        {/*carousel title*/}
        <h2 className="font-medium text-2xl m-0 text-(--navy) pb-7 text-left self-start">
          {album.year}: {album.title}
        </h2>

        {album.images && album.images.length > 0 && (
          <div className="relative w-full px-4 sm:px-8 md:px-12">
            {/*nav buttons*/}
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

            {/*carousel container*/}
            <div ref={emblaRef} className="overflow-hidden">
              {/*styling + hide scrollbar*/}
              <div className="flex gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/*map + render images, scale for consistent height while maintaining aspect ratio*/}

                {album.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="shrink-0 min-w-0 relative h-28 sm:h-36 md:h-40 lg:h-44 w-auto max-w-[350px] max-h-[220px] cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openLightbox(index)}
                    >
                      {typeof image === "object" && image?.url && (
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <hr className="border-t-2 border-(--navy) hidden sm:block" />

      {/*lightbox modal*/}
      {album.images && openImageIdx !== null && album.images[openImageIdx] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/*close modal*/}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-(--navy) focus:outline-none cursor-pointer"
          >
            <X size={32} strokeWidth={2.5} />
          </button>

          {/*nav buttons*/}
          {album.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white hover:text-(--navy) focus:outline-none cursor-pointer"
            >
              <ChevronLeft size={32} strokeWidth={2.5} />
            </button>
          )}

          {album.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white hover:text-(--navy) focus:outline-none cursor-pointer"
            >
              <ChevronRight size={32} strokeWidth={2.5} />
            </button>
          )}

          {/*opened image*/}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {openImageIdx !== null && album.images[openImageIdx] && (
              <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
                {typeof album.images[openImageIdx] === "object" &&
                  album.images[openImageIdx]?.url && (
                    <Image
                      src={album.images[openImageIdx].url}
                      alt={album.images[openImageIdx].alt}
                      fill
                      className="object-contain"
                      sizes="90vw"
                    />
                  )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
