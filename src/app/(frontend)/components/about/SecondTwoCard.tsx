import { Media } from "@/payload-types";
import { BookText, Handshake } from "lucide-react";
import { getAboutUsCards } from "@/actions/aboutUsActions";

const SecondTwoCard = async () => {
  const content = await getAboutUsCards();

  const getImageUrl = (imageField: string | Media | null | undefined) => {
    if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
      return imageField.url;
    }
    return "";
  };

  return (
    <div className="w-full bg-[#F6F4EC]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <div className="group relative w-full md:w-2/5 lg:w-2/5 aspect-video rounded-lg overflow-hidden shadow-sm flex flex-col justify-center">
            {content.leftBox && content.leftBox.backgroundImage && (
              <img
                src={getImageUrl(content.leftBox.backgroundImage) || undefined}
                alt={
                  typeof content.leftBox.backgroundImage === "object"
                    ? content.leftBox.backgroundImage.alt
                    : "Left Card Background"
                }
                className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
              />
            )}
            <div className="absolute inset-0 group-hover:bg-[#6C96CD] transition-colors duration-300"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#2d3a4a] px-2 py-4 lg:p-16">
              <span className="flex flex-col items-center">
                <BookText className="size-[40px] sm:size-[40px] text-[#2d3a4a] mb-1" />
                <h3 className="text-3xl lg:text-5xl font-bold my-2 min-h-[2.5em] flex items-center justify-center">
                  {content.leftBox.title}
                </h3>
              </span>
              <div className="w-full flex-1 flex flex-col items-center justify-center">
                <p className="text-sm md:text-base group-hover:hidden break-words break-all whitespace-pre-line w-full max-w-full block">
                  {content.leftBox.shortDescription}
                </p>
                <div className="hidden group-hover:flex flex-col items-center w-full">
                  <p className="text-sm md:text-base break-words break-all whitespace-pre-line w-full max-w-full block">
                    {content.leftBox.fullText}
                  </p>
                </div>
                <a href="#" className="mt-2 underline text-[#2d3a4a] text-base font-medium">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="group relative w-full md:w-3/5 lg:w-3/5 aspect-video rounded-lg overflow-hidden shadow-sm flex flex-col justify-center">
            {content.leftBox && content.leftBox.backgroundImage && (
              <img
                src={getImageUrl(content.leftBox.backgroundImage) || undefined}
                alt={
                  typeof content.leftBox.backgroundImage === "object"
                    ? content.leftBox.backgroundImage.alt
                    : "Left Card Background"
                }
                className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
              />
            )}
            <div className="absolute inset-0 group-hover:bg-[#EEE5D8] transition-colors duration-300"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#2d3a4a] px-2 py-4 lg:p-16">
              <Handshake className="size-[35px] sm:size-[35px] text-[#2d3a4a] mb-4" />
              <h3 className="text-3xl lg:text-5xl font-bold my-9 flex items-center justify-center">
                {content.rightBox.title}
              </h3>
              {Array.isArray(content.rightBox.sponsorLogos) &&
                content.rightBox.sponsorLogos.length > 0 && (
                  <div className="hidden group-hover:flex flex-wrap justify-center items-center gap-2 mb-2">
                    {content.rightBox.sponsorLogos.map((item: any, idx: number) => {
                      const logo = item.logo;
                      const logoUrl = typeof logo === "object" && logo?.url ? logo.url : undefined;
                      if (!logoUrl) return null;
                      return (
                        <img
                          key={idx}
                          src={logoUrl}
                          className="h-8 w-auto object-contain"
                          style={{ maxWidth: 64 }}
                        />
                      );
                    })}
                  </div>
                )}
              <div className="w-full flex-1 flex items-center justify-center">
                <p className="text-sm md:text-base group-hover:hidden break-words break-all whitespace-pre-line w-full max-w-full block">
                  {content.rightBox.shortDescription}
                </p>
                <p className="hidden group-hover:flex text-sm md:text-base break-words break-all whitespace-pre-line w-full max-w-full">
                  {content.rightBox.fullText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTwoCard;
