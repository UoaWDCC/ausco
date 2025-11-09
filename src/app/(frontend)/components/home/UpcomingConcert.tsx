import { Media } from "@/payload-types";
import Image from "next/image";
import { Button } from "../ui/button";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

type UpcomingConcertProps = {
  content: {
    title: string;
    poster: Media | string | null;
    description: string;
    tickets: {
      matinee: {
        date: string;
        location: string;
        ticketUrl: string;
      };
      concert: {
        date: string;
        location: string;
        ticketUrl: string;
      };
    };
  };
};

const UpcomingConcert = async ({ content }: UpcomingConcertProps) => {
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
        <div className="flex flex-col justify-between lg:w-[32rem] w-72">
          <div className="flex flex-col gap-6 text-base text-left whitespace-pre-line">
            {content.description}
          </div>

          <div className="h-px bg-[var(--brown)] w-full" />

          <div className="flex flex-row gap-10 items-stretch">
            {/* Matinee */}
            <div className="flex flex-col gap-4 flex-1 justify-between">
              <h2 className="text-base font-bold">Matinee</h2>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="shrink-0" />
                  <div className="text-base">{content.tickets.matinee.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="shrink-0" />
                  <div className="text-base">{content.tickets.matinee.location}</div>
                </div>
              </div>

              <Button asChild variant="brown" size="lg" className="">
                <a
                  href={content.tickets.matinee.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets
                  <ArrowUpRight size={18} />
                </a>
              </Button>
            </div>

            {/* Concert */}
            <div className="flex flex-col gap-4 flex-1 justify-between">
              <h2 className="text-base font-bold">Concert</h2>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="shrink-0" />
                  <div className="text-base">{content.tickets.concert.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="shrink-0" />
                  <div className="text-base">{content.tickets.concert.location}</div>
                </div>
              </div>

              <Button asChild variant="brown" size="lg" className="">
                <a
                  href={content.tickets.concert.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets
                  <ArrowUpRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcert;
