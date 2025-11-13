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
    <section
      className="px-6 pb-16 bg-(--cream) flex flex-col items-center"
      style={{ paddingTop: `calc(var(--header-height) + 4rem)` }} // 4rem = pt-16
    >
      <div className="w-full max-w-6xl mx-auto flex flex-row items-center justify-between">
        {/* Text */}
        <div className="flex flex-col gap-4 w-2/5">
          <h1 className="text-(--navy) font-semibold! text-4xl! m-0!">About Us</h1>
          <p className="text-(--navy) text-base">{content.description}</p>
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
                  alt={item.sticker.alt || `sticker ${index}`}
                  width={100}
                  height={100}
                  className={"wiggle-hover"}
                />
              ),
          )}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto h-px bg-(--navy) mt-16" />
    </section>
  );
};

export default Hero;
