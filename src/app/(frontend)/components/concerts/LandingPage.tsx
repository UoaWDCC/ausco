import { getConcertsLanding } from "@/actions/getConcertsLanding";
import { Media } from "@/payload-types";
import { ArrowUpRight } from "lucide-react";
import { Archive } from 'lucide-react';
import { CalendarClock } from 'lucide-react';

const LandingPage = async () => {
  const [content] = await Promise.all([getConcertsLanding()]);

  const getImageUrl = (imageField: string | Media | null | undefined): string | undefined => {
    if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
      return imageField.url ?? undefined;
    }
    if (typeof imageField === "string") {
      return imageField;
    }
      return undefined; // Return undefined if no image is found
    };

  return (
    <div className="w-full bg-[#F6F4EC] pt-20 md:pt-25 md:h-[max(880px,100dvh)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-[#602C0F] text-center">Concerts</h1>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 pt-10">
          <div className="relative md:w-1/2 lg:w-1/2 aspect-4/3 rounded-lg overflow-hidden shadow-sm">
            {content.upcomingCard && content.upcomingCard["background-image"] && (
              <img
                src={getImageUrl(content.upcomingCard["background-image"])}
                alt={
                  typeof content.upcomingCard["background-image"] === "object"
                    ? content.upcomingCard["background-image"].alt
                    : "Upcoming Concerts Background"
                }
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#F6F4EC] px-2 py-4 lg:p-16">
              <CalendarClock className="size-[40px] sm:size-[40px] text-[#F6F4EC]" />
              <h3 className="text-3xl lg:text-4xl font-bold my-4">Upcoming</h3>
              <span className="flex items-center justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold">Concerts</h3>
                <ArrowUpRight className="size-[35px] text-[#F6F4EC] ml-2 translate-y-[5px]" />
              </span>
            </div>
          </div>

          <div className="relative md:w-1/2 lg:w-1/2 aspect-4/3 rounded-lg overflow-hidden shadow-sm">
            {content.pastCard && content.pastCard["background-image"] && (
              <img
                src={getImageUrl(content.pastCard["background-image"])}
                alt={
                  typeof content.pastCard["background-image"] === "object"
                    ? content.pastCard["background-image"].alt
                    : "Past Concerts Background"
                }
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#F6F4EC] px-2 py-4 lg:p-16">
              <Archive className="size-[40px] sm:size-[40px] text-[#F6F4EC]" />
              <h3 className="text-3xl lg:text-4xl font-bold my-4">Past</h3>
              <span className="flex items-center justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold">Concerts</h3>
                <ArrowUpRight className="size-[35px] text-[#F6F4EC] ml-2 translate-y-[5px]" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;