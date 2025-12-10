import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GeoAltFill, Calendar2EventFill } from "react-bootstrap-icons";

import { Media } from "@/payload-types";
import { Button } from "../../ui/button";

type UpcomingConcertProps = {
  content: {
    checkbox?: boolean;
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
  headingVariant: string;
};

const UpcomingConcert2 = ({ content, headingVariant }: UpcomingConcertProps) => {
  // Normalise dates to ignore time component for accurate comparison
  const normaliseDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const matineeDate = normaliseDate(new Date(content.tickets.matinee.date));
  const concertDate = normaliseDate(new Date(content.tickets.concert.date));
  const today = normaliseDate(new Date());

  // Format date to "DD MMM YYYY" (e.g. "25 Dec 2023")
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <section className="bg-(--beige) text-(--brown) py-18 max-w-6xl mx-auto text-base rounded-lg">
      {/* Upcoming Concert Title */}
      {headingVariant === "homePage" && (
        <div className="flex justify-center pb-12">
          <h1 className="font-semibold! text-4xl! m-0!">Our Upcoming Concert,&nbsp;</h1>
          <h1 className="font-light! text-4xl! m-0! italic">{content.title}</h1>
        </div>
      )}

      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-stretch justify-center ">
        {/* LEFT: Text + Tickets */}
        <div className="flex flex-col justify-between lg:w-lg w-72">
          <div className="flex flex-col gap-4 whitespace-pre-line pb-2">
            {headingVariant === "concertsUpcomingPage" && (
              <div className="flex items-center gap-3">
                <div className="py-1 px-3 bg-(--brown) text-(--cream) rounded-md whitespace-nowrap">
                  Semester x
                </div>
                <h1 className="font-light! text-3xl! m-0! italic truncate w-full">
                  {content.title}
                </h1>
              </div>
            )}
            {content.description}
          </div>

          <div className="bg-(--brown) my-2" style={{ height: "0.5px" }} />

          {/* Tickets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 items-start">
            {/* Row 1: Headings */}
            <h2 className="font-bold m-0!">Matinee</h2>
            <h2 className="font-bold m-0!">Concert</h2>

            {/* Row 2+3: Date + Location */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2">
                <Calendar2EventFill size={18} className="shrink-0 mt-1" />
                <div>{formatDate(matineeDate)}</div>
              </div>
              <div className="flex items-start gap-2">
                <GeoAltFill size={18} className="shrink-0 mt-1" />
                <div>{content.tickets.matinee.location}</div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2">
                <Calendar2EventFill size={18} className="shrink-0 mt-1" />
                <div>{formatDate(concertDate)}</div>
              </div>
              <div className="flex items-start gap-2">
                <GeoAltFill size={18} className="shrink-0 mt-1" />
                <div>{content.tickets.concert.location}</div>
              </div>
            </div>

            {/* Row 4: Ticket URL Buttons */}
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

        {/* RIGHT: Poster */}
        {typeof content.poster === "object" && content.poster?.url && (
          <Image
            src={content.poster.url}
            alt={content.poster.alt || "Poster"}
            width={376}
            height={532}
            className="border border-(--brown) rounded-md"
          />
        )}
      </div>
    </section>
  );
};

export default UpcomingConcert2;
