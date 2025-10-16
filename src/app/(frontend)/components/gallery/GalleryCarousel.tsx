"use client";

import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import placeholderImg from "../../../../../media/pfp.jpg";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface GalleryCarouselProps {
  title: string;
  images?: GalleryImage[];
}

export default function GalleryCarousel({ title, images = [] }: GalleryCarouselProps) {
  //20 images, placeholder for testing
  const items = useMemo<GalleryImage[]>(
    () =>
      images.length > 0 ? images : Array.from({ length: 20 }, () => ({ src: placeholderImg.src })),
    [images],
  );
  //nav button refs
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="pt-18">
      {/*carousel heading*/}
      <h3 className="px-4 sm:px-8 md:px-12 text-xl sm:text-2xl text-[var(--navy)] font-semibold tracking-tight md:text-3xl">
        {title}
      </h3>

      <div className="w-full mb-20 mt-8 sm:mt-12 px-4 sm:px-8 md:px-12 py-6 sm:py-8 relative">
        {/*custom arrow buttons*/}
        <button
          ref={prevRef}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 sm:bg-transparent rounded-full p-1 sm:p-0 border-none text-[var(--navy)] hover:bg-[var(--blue)]/15 active:bg-[var(--blue)]/25 hover:text-[var(--blue)] active:text-[var(--concertblue)] focus:outline-none"
        >
          <ChevronLeft size={24} strokeWidth={2.5} className="sm:w-7 sm:h-7" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 sm:bg-transparent rounded-full p-1 sm:p-0 border-none text-[var(--navy)] hover:bg-[var(--blue)]/15 active:bg-[var(--blue)]/25 hover:text-[var(--blue)] active:text-[var(--concertblue)] focus:outline-none"
        >
          <ChevronRight size={24} strokeWidth={2.5} className="sm:w-7 sm:h-7" />
        </button>

        <Swiper
          modules={[Navigation]}
          //link custom buttons to carousel nav
          navigation={{ enabled: true, prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            //check for object, assign refs
            if (!swiper.params.navigation || typeof swiper.params.navigation === "boolean") {
              swiper.params.navigation = { enabled: true } as NavigationOptions;
            }
            const nav = swiper.params.navigation as NavigationOptions;
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
          }}
          //infinite carousel + extra clone images for smoothness
          loop={true}
          loopAdditionalSlides={10}
          //disable nav when not enough images
          watchOverflow={true}
          //default image count + spacing (large screens)
          spaceBetween={20}
          slidesPerView={5}
          //responsive image count + spacing
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 3, spaceBetween: 16 },
            768: { slidesPerView: 4, spaceBetween: 18 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="gallery-swiper"
        >
          {/*map images to slides, fixed height + preserves aspect ratio*/}
          {items.map((image, index) => (
            <SwiperSlide key={`${image.src}-${index}`}>
              <div className="hover-scale-target flex items-center justify-center h-56 sm:h-64 md:h-72 lg:h-80 overflow-x-hidden overflow-y-visible">
                <img
                  src={image.src}
                  alt={image.alt ?? `Carousel Image ${index + 1}`}
                  className="max-h-full w-auto object-contain block"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <hr className="border-t-[2px] border-[var(--navy)]" />
    </section>
  );
}
