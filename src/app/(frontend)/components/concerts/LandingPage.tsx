import { getConcertsLanding } from "@/actions/getConcertsLanding";
import { Media } from "@/payload-types";
import { ArrowUpRight } from "lucide-react";
import { Archive } from "lucide-react";
import { CalendarClock } from "lucide-react";
import Link from "next/link";

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
    <div className="w-full bg-[var(--cream)] pt-20 md:pt-25 md:h-[max(880px,100dvh)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-[var(--brown)] text-center">Concerts</h1>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 pt-10">
          {/* UPCOMING */}
          <Link
            href="/concerts/upcoming"
            className="group relative md:w-1/2 lg:w-1/2 aspect-4/3 rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brown)]"
            aria-label="View upcoming concerts"
          >
            {content.upcomingCard?.["background-image"] && (
              <img
                src={getImageUrl(content.upcomingCard["background-image"])}
                alt={
                  typeof content.upcomingCard["background-image"] === "object"
                    ? content.upcomingCard["background-image"].alt
                    : "Upcoming Concerts Background"
                }
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[var(--cream)] px-2 py-4 lg:p-16">
              <CalendarClock className="size-[40px] sm:size-[40px]" />
              <h3 className="text-3xl lg:text-4xl font-bold my-4">Upcoming</h3>
              <span className="flex items-center justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold">Concerts</h3>
                <ArrowUpRight className="size-[35px] ml-2 translate-y-[5px]" />
              </span>
            </div>
          </Link>

          {/* PAST */}
          <Link
            href="/concerts/past"
            className="group relative md:w-1/2 lg:w-1/2 aspect-4/3 rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brown)]"
            aria-label="View past concerts"
          >
            {content.pastCard?.["background-image"] && (
              <img
                src={getImageUrl(content.pastCard["background-image"])}
                alt={
                  typeof content.pastCard["background-image"] === "object"
                    ? content.pastCard["background-image"].alt
                    : "Past Concerts Background"
                }
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[var(--cream)] px-2 py-4 lg:p-16">
              <Archive className="size-[40px] sm:size-[40px]" />
              <h3 className="text-3xl lg:text-4xl font-bold my-4">Past</h3>
              <span className="flex items-center justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold">Concerts</h3>
                <ArrowUpRight className="size-[35px] ml-2 translate-y-[5px]" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
