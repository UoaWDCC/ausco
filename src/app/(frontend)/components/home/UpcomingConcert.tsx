import { getHomePage } from "@/actions/homeActions";
import { Media } from "@/payload-types";
import Image from "next/image";
import Ticket from "./Ticket";

// Type guard to check if poster is a Media object
function isMedia(poster: string | Media | null | undefined): poster is Media {
  return typeof poster === "object" && poster !== null && "url" in poster;
}

type UpcomingConcertProps = {
  content: {
    title: string;
    poster: Media | string | null;
    description: string;
  };
};

const UpcomingConcert = async ({ content }: UpcomingConcertProps) => {
  const [temp] = await Promise.all([getHomePage()]);

  return (
    <section className="bg-[var(--beige)] text-[var(--brown)] mx-auto pt-30 pb-20">
      {/* name of the upcoming concert */}
      <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p className="inline-block mr-4">Our Upcoming Concert,&nbsp;</p>
        <p className="inline-block italic"> {content.title} </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-stretch justify-center my-9">
        {/* Poster */}
        {isMedia(content.poster) ? (
          <Image
            width={320}
            height={480}
            src={content.poster.url ?? ""}
            alt={content.poster.alt ?? "Concert poster"}
            className="lg:w-80 md:w-94 w-75 h-auto border-1 border-[var(--brown)] rounded-md mt-0"
          />
        ) : (
          <p>No valid poster available</p>
        )}

        {/* Right column */}
        <div className="flex flex-col justify-between lg:w-[28rem] w-72">
          <div className="flex flex-col gap-6 text-base text-left">
            <p>{content.description}</p>
            <p>{content.description}</p>
          </div>

          <div className="h-[1px] bg-[var(--brown)] w-full" />

          <div>
            <Ticket matineeData={temp.matinee} concertData={temp.concert} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcert;
