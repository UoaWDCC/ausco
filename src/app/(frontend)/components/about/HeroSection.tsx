import Image from "next/image";
import { Media } from "@/payload-types";
import { getAboutHeroSection } from "@/actions/getAboutHeroSection";

const HeroSection = async () => {
  const content = await getAboutHeroSection();

  const getImageUrl = (imageField: string | Media | null | undefined) => {
    if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
      return imageField.url;
    }
    return "";
  };

  return (
    <section className="relative w-full pt-24 bg-[#F6F4EC] flex flex-col items-center">
      <div className="z-10 flex flex-col w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex lg:flex-row flex-col items-center lg:items-end justify-between">
          <div className="flex flex-col lg:items-start items-center gap-3 w-2/5">
            <p className="text-[#264C84] font-bold text-center text-2xl md:text-4xl">
              {content.AboutUsHeader}
            </p>
            <p className="text-[#264C84] lg:text-left text-center leading-relaxed max-w-2xl text-sm md:text-md">
              {content.AboutUsDescription}
            </p>
          </div>
          <div className="flex flex-row flex-wrap md:flex-nowrap justify-center lg:gap-4 gap-8 lg:items-start">
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
          </div>
        </div>

        <hr className="mt-8 border-t-[1.5px] border-[var(--navy)]" />
      </div>
    </section>
  );
};

export default HeroSection;
