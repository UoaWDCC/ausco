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
    <section className="w-full pb-16">
      <div className="flex flex-row items-center justify-between">
        {/* Text */}
        <div className="flex flex-col gap-4 w-2/5 text-(--navy)">
          <h1 className="font-semibold! text-4xl! m-0!">About Us</h1>
          <p className="text-base">{content.description}</p>
        </div>

        {/* Array of Stickers */}
        <div className="flex flex-row gap-1">
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
                  className={"wiggle-hover"}
                  priority
                  loading="eager"
                />
              ),
          )}
        </div>
      </div>

      <div className="h-px bg-(--navy) mt-16" />
    </section>
  );
};

export default Hero;
