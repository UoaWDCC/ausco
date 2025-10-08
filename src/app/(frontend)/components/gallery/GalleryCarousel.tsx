"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/(frontend)/components/ui/carousel";

//DEL:remove placeholder once payload integrated
import placeholderImg from "../../../../../media/pfp.jpg";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface GalleryCarouselProps {
  title: string;
  images?: GalleryImage[];
}

//reusable button classes
const BUTTON_CLASSES =
  "bg-transparent hover:bg-transparent active:bg-transparent border-none text-[var(--navy)] hover:text-[var(--navy)] active:text-[var(--navy)] shadow-none";

export default function GalleryCarousel({ title, images = [] }: GalleryCarouselProps) {
  //20 images, placeholder for testing
  const items: GalleryImage[] =
    images.length > 0 ? images : Array.from({ length: 20 }, () => ({ src: placeholderImg.src }));

  return (
    <section className="pt-18">
      <h3 className="px-12 text-2xl text-[var(--navy)] font-semibold tracking-tight sm:text-3xl">
        {title}
      </h3>

      {/*infinite carousel, 3/4 ratio images, chevron arrows + touch controls*/}
      <div className="w-full py-18 mb-6 px-12 flex justify-center">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {items.map((image, index) => (
              <CarouselItem
                key={`${image.src}-${index}`}
                className="basis-1/3 md:basis-1/5 lg:basis-[10%]"
              >
                <div className="p-1">
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt ?? "Carousel Image"}
                      className="aspect-[3/4] h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" className={BUTTON_CLASSES} />
          <CarouselNext variant="ghost" className={BUTTON_CLASSES} />
        </Carousel>
      </div>

      {/*Divider*/}
      <hr className="border-t-[2px] border-[var(--navy)]" />
    </section>
  );
}
