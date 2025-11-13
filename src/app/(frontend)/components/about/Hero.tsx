import Image from "next/image";
import { Media } from "@/payload-types";

type HeroProps = {
  content: {
    description: string;
    stickers: { sticker: Media | string | null }[] | null;
  };
};

const Hero = ({ content }: HeroProps) => {
  return (
    <section className="relative w-full pt-40 pb-4 bg-(--cream) flex flex-col items-center">
      <div className="z-10 flex flex-col w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex lg:flex-row flex-col items-center lg:items-end justify-between">
          <div className="flex flex-col lg:items-start items-center gap-3 w-2/5">
            <h1 className="text-(--navy) font-semibold! text-4xl! m-0!">About Us</h1>
            <p className="text-(--navy) text-base">{content.description}</p>
          </div>

          <div>
            {content.stickers?.map(
              (item, index) =>
                typeof item.sticker === "object" &&
                item.sticker?.url && (
                  <Image
                    key={index}
                    src={item.sticker.url}
                    alt={item.sticker.alt || `sticker ${index}`}
                    width={20}
                    height={20}
                  />
                ),
            )}
          </div>

          {/* <div className="flex flex-row flex-wrap md:flex-nowrap justify-center lg:gap-4 gap-8 lg:items-start">
            {content.aboutUsStickers?.map((sticker, i) => {
              const url = getImageUrl(sticker["sticker-image"]);
              if (!url) return null;

              return (
                <div
                  key={i}
                  className="lg:w-20 lg:h-20 mt-4 lg:mt-0 md:w-16 md:h-16 sm:w-10 sm:h-10 w-8 h-8 relative wiggle-hover"
                >
                  <Image
                    src={url}
                    alt={(sticker["sticker-image"] as Media)?.alt || "Sticker"}
                    fill
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="h-px bg-(--navy)" />
      </div>
    </section>
  );
};

export default Hero;
