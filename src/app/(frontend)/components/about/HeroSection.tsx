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
        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-col items-start gap-3 w-2/5">
            <p className="text-[#264C84] font-bold text-center text-2xl md:text-4xl">about us</p>
            <p className="text-[#264C84] text-left leading-relaxed max-w-2xl text-sm md:text-md">
              lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {content.aboutUsStickers?.map((sticker, i) => {
              const url = getImageUrl(sticker["sticker-image"]);
              if (!url) return null;

              return (
                <div key={i} className="w-20 h-20 relative">
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
