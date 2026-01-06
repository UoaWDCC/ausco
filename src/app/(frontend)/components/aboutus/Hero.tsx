import Image from "next/image";

import { Media } from "@/payload-types";

type HeroProps = {
  content: {
    description: string;
    stickers?: { sticker?: Media | string | null }[] | null;
  };
};

const Hero = ({ content }: HeroProps) => {
  return (
    <section className="w-full pb-8 sm:pb-12 md:pb-16">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-0">
        {/* Text */}
        <div className="order-2 flex w-full flex-col gap-4 text-(--navy) md:order-1 md:w-2/5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">About Us</h1>
          <p className="text-sm md:text-base">{content.description}</p>
        </div>

        {/* Array of Stickers */}
        <div className="md:rtl order-1 grid grid-cols-6 gap-0 pr-18 md:order-2 md:gap-1 md:pr-0">
          {content.stickers?.map(
            (item, index) =>
              typeof item.sticker === "object" &&
              item.sticker?.url && (
                <Image
                  key={index}
                  src={item.sticker.url}
                  alt={item.sticker.alt || `sticker ${index + 1}`}
                  width={100}
                  height={100}
                  className="wiggle-hover ltr"
                  priority
                  loading="eager"
                />
              ),
          )}
        </div>
      </div>

      <div className="mt-16 hidden h-px bg-(--navy) md:block" />
    </section>
  );
};

export default Hero;
