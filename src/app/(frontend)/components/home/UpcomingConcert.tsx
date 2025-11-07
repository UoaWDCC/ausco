import { getHomePage } from "@/actions/homeActions";
import { Media } from "@/payload-types";
import Image from "next/image";
import Ticket from "./Ticket";

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
    <section className="bg-[var(--beige)] text-[var(--brown)] pt-28 pb-32">
      {/* Upcoming Concert Title */}
      <div className="flex justify-center">
        <h1 className="!font-semibold !text-4xl !m-0">Our Upcoming Concert,&nbsp;</h1>
        <h1 className="!font-light !text-4xl !m-0 italic">{content.title}</h1>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-stretch justify-center pt-10">
        {/* LEFT: Poster */}
        {typeof content.poster === "object" && content.poster?.url && (
          <Image
            src={content.poster.url}
            alt={content.poster.alt || "Poster"}
            width={376}
            height={532}
            className="border border-[var(--brown)] rounded-md"
          />
        )}

        {/* RIGHT: Text + Tickets */}
        {/* TODO: combine into one file/component*/}
        <div className="flex flex-col justify-between lg:w-[28rem] w-72">
          <div className="flex flex-col gap-6 text-base text-left whitespace-pre-line">
            {content.description}
          </div>

          <div className="h-px bg-[var(--brown)] w-full" />

          <div>
            <Ticket matineeData={temp.matinee} concertData={temp.concert} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcert;
