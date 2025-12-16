import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GeoAltFill, Calendar2EventFill } from "react-bootstrap-icons";

import { Media } from "@/payload-types";
import { Button } from "../../ui/button";

type pageVariant = "concertsUpcomingPage" | "homePage";

type UpcomingConcertProps = {
  content: {
    isComingSoon?: boolean | null;
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
  headingVariant: pageVariant;
  semester?: string; // optional
};

const UpcomingConcert = ({ content, headingVariant, semester }: UpcomingConcertProps) => {
  const title = content.isComingSoon ? "Coming Soon!" : content.title;
  const description = content.isComingSoon
    ? "Experience the magic of classical music - details coming soon. Stay tuned for our next unforgettable concert!"
    : content.description;

  const normaliseDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const matineeDate = normaliseDate(new Date(content.tickets.matinee.date));
  const concertDate = normaliseDate(new Date(content.tickets.concert.date));
  const today = normaliseDate(new Date());

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const poster = content.isComingSoon ? (
    <div
      style={{ width: 376, height: 532 }}
      className="bg-(--brown) rounded-md flex items-center justify-center text-(--cream) text-base"
    >
      Coming Soon! 😉
    </div>
  ) : (
    typeof content.poster === "object" &&
    content.poster?.url && (
      <Image
        src={content.poster.url}
        alt={content.poster.alt || "Poster"}
        width={376}
        height={532}
        className="border border-(--brown) rounded-md"
      />
    )
  );

  const textContent = (
    <div className="flex flex-col justify-between lg:w-lg w-72">
      {/* Title + Text */}
      <div className="flex flex-col gap-4 whitespace-pre-line pb-2">
        {headingVariant === "concertsUpcomingPage" && (
          <div className="flex items-center gap-3">
            {semester && (
              <div className="py-1 px-3 bg-(--brown) text-(--cream) rounded-md whitespace-nowrap">
                Semester {semester}
              </div>
            )}
            <h1 className="font-light! text-3xl! m-0! italic truncate w-full">{title}</h1>
          </div>
        )}
        {description}
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
            {content.isComingSoon ? <div>Date TBC</div> : <div>{formatDate(matineeDate)}</div>}
          </div>
          <div className="flex items-start gap-2">
            <GeoAltFill size={18} className="shrink-0 mt-1" />
            {content.isComingSoon ? (
              <div>Location TBC</div>
            ) : (
              <div>{content.tickets.matinee.location}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-start gap-2">
            <Calendar2EventFill size={18} className="shrink-0 mt-1" />
            {content.isComingSoon ? <div>Date TBC</div> : <div>{formatDate(concertDate)}</div>}
          </div>
          <div className="flex items-start gap-2">
            <GeoAltFill size={18} className="shrink-0 mt-1" />
            {content.isComingSoon ? (
              <div>Location TBC</div>
            ) : (
              <div>{content.tickets.concert.location}</div>
            )}
          </div>
        </div>

        {/* Row 4: Ticket URL Buttons */}
        <div className="w-fit">
          {today > matineeDate || content.isComingSoon ? (
            <Button variant="brown" size="lg" className="mt-1" disabled>
              Tickets <ArrowUpRight size={18} />
            </Button>
          ) : (
            <a href={content.tickets.matinee.ticketUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="brown" size="lg" className="mt-1">
                Tickets <ArrowUpRight size={18} />
              </Button>
            </a>
          )}
        </div>

        <div className="w-fit">
          {today > concertDate || content.isComingSoon ? (
            <Button variant="brown" size="lg" className="mt-1" disabled>
              Tickets <ArrowUpRight size={18} />
            </Button>
          ) : (
            <a href={content.tickets.concert.ticketUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="brown" size="lg" className="mt-1">
                Tickets <ArrowUpRight size={18} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-(--beige) text-(--brown) py-18 max-w-6xl mx-auto text-base rounded-lg">
      {/* Home Page Only - Title Header */}
      {headingVariant === "homePage" && (
        <div className="flex justify-center pb-12">
          <h1 className="font-semibold! text-4xl! m-0!">Our Upcoming Concert,&nbsp;</h1>
          <h1 className="font-light! text-4xl! m-0! italic">{title}</h1>
        </div>
      )}

      {/* Content */}
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-stretch justify-center">
        {semester === "2" ? (
          <>
            {textContent}
            {poster}
          </>
        ) : (
          <>
            {poster}
            {textContent}
          </>
        )}
      </div>
    </section>
  );
};

export default UpcomingConcert;
