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
    <section className="bg-[var(--beige)] text-[var(--brown)] px-30">
      {/* Upcoming Concert Title */}
      <div className="flex justify-center">
        <h1 className="!font-semibold !text-4xl !m-0">Our Upcoming Concert,&nbsp;</h1>
        <h1 className="!font-light !text-4xl !m-0 italic">{content.title}</h1>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-stretch justify-center pt-4">
        {/* LEFT: Poster */}
        {/* {isMedia(content.poster) ? (
          <Image
            width={320}
            height={453}
            src={content.poster.url ?? ""}
            alt={content.poster.alt ?? "Concert poster"}
            className="lg:w-80 md:w-94 w-75 h-auto border-1 border-[var(--brown)] rounded-md"
          />
        ) : (
          <p>No valid poster available</p>
        )} */}

        {typeof content.poster === "object" && content.poster?.url && (
          <Image
            src={content.poster.url}
            alt={content.poster.alt || "Footer Logo"}
            width={136}
            height={136}
            className="border-1 border-[var(--brown)] rounded-md"
          />
        )}

        {/* RIGHT: Text + Tickets */}
        <div className="flex flex-col justify-between lg:w-[28rem] w-72">
          <div className="flex flex-col gap-6 text-base text-left whitespace-pre-line">
            {content.description}
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
