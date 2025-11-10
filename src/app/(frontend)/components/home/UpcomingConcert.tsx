import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GeoAltFill, Calendar2EventFill } from "react-bootstrap-icons";

import { Media } from "@/payload-types";
import { Button } from "../ui/button";

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
  // Normalise dates to ignore time component for accurate comparison
  const noramliseDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const matineeDate = noramliseDate(new Date(content.tickets.matinee.date));
  const concertDate = noramliseDate(new Date(content.tickets.concert.date));
  const today = noramliseDate(new Date());

  // Format date to "DD MMM YYYY" (e.g. "25 Dec 2023")
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <section className="bg-[var(--beige)] text-[var(--brown)] pt-28 pb-32 text-base">
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
          <div className="flex flex-col gap-6 whitespace-pre-line">{content.description}</div>

          <div className="h-px bg-[var(--brown)]" />

          <div className="flex flex-row gap-10 items-stretch">
            {/* Matinee */}
            <div className="flex flex-col justify-between flex-1 gap-4">
              <h2 className=" font-bold !m-0">Matinee</h2>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Calendar2EventFill size={18} className="shrink-0" />
                  <div>{formatDate(matineeDate)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <GeoAltFill size={18} className="shrink-0" />
                  <div>{content.tickets.matinee.location}</div>
                </div>
              </div>

              <div className="w-fit">
                {today > matineeDate ? (
                  <Button variant="brown" size="lg" className="mt-1" disabled>
                    Tickets <ArrowUpRight size={18} />
                  </Button>
                ) : (
                  <a
                    href={content.tickets.matinee.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="brown" size="lg" className="mt-1">
                      Tickets <ArrowUpRight size={18} />
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Concert */}
            <div className="flex flex-col justify-between flex-1 gap-4">
              <h2 className=" font-bold !m-0">Concert</h2>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Calendar2EventFill size={18} className="shrink-0" />
                  <div>{formatDate(concertDate)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <GeoAltFill size={18} className="shrink-0" />
                  <div>{content.tickets.concert.location}</div>
                </div>
              </div>

              <div className="w-fit">
                {today > concertDate ? (
                  <Button variant="brown" size="lg" className="mt-1" disabled>
                    Tickets <ArrowUpRight size={18} />
                  </Button>
                ) : (
                  <a
                    href={content.tickets.concert.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="brown" size="lg" className="mt-1">
                      Tickets <ArrowUpRight size={18} />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcert;
