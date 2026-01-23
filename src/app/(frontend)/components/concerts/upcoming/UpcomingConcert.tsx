import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GeoAltFill, Calendar2EventFill } from "react-bootstrap-icons";

import { Media } from "@/payload-types";
import { Button } from "../../ui/button";

type pageVariant = "concertsUpcomingPage" | "homePage";

type UpcomingConcertProps = {
  content: {
    isComingSoon?: boolean | null;
    title?: string | null | undefined;
    poster?: Media | string | null;
    description: string;
    tickets?: {
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

  const normaliseDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const today = normaliseDate(new Date());
  const matineeDate = content.tickets?.matinee
    ? normaliseDate(new Date(content.tickets.matinee.date))
    : null;
  const concertDate = content.tickets?.concert
    ? normaliseDate(new Date(content.tickets.concert.date))
    : null;

  // Helper to check if ticket is available
  const isMatineeAvailable = !content.isComingSoon && matineeDate !== null && today <= matineeDate;
  const isConcertAvailable = !content.isComingSoon && concertDate !== null && today <= concertDate;

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const poster = content.isComingSoon ? (
    <div className="bg-(--brown) rounded-md flex items-center justify-center text-(--cream) text-sm md:text-base w-[140px] md:w-[200px] lg:w-[320px] aspect-[376/532] shrink-0 self-start">
      Coming Soon! 😉
    </div>
  ) : (
    typeof content.poster === "object" &&
    content.poster?.url && (
      <div className="w-[140px] md:w-[200px] lg:w-[320px] shrink-0 self-start">
        <Image
          src={content.poster.url}
          alt={content.poster.alt || "Poster"}
          width={320}
          height={454}
          sizes="(max-width: 768px) 140px, (max-width: 1024px) 200px, 320px"
          quality={90}
          className="border border-(--brown) rounded-md w-full h-auto"
        />
      </div>
    )
  );

  // Split description into first paragraph and remaining content
  const descriptionParts = content.description.split(/\n\n+/);
  const firstParagraph = descriptionParts[0] || content.description;
  const remainingDescription = descriptionParts.slice(1).join("\n\n");

  const firstParagraphContent = (
    <div className="flex flex-col gap-3 md:gap-4 h-full justify-start">
      {headingVariant === "concertsUpcomingPage" && (
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-1">
          {semester && (
            <div className="py-1 px-3 bg-(--brown) text-(--cream) rounded-md whitespace-nowrap w-fit text-sm">
              Semester {semester}
            </div>
          )}
          <h1 className="font-light! text-lg md:text-3xl! m-0! italic">{title}</h1>
        </div>
      )}
      <p className="text-sm md:text-sm leading-relaxed text-(--brown)">{firstParagraph}</p>
    </div>
  );

  const remainingContent = (
    <div className="flex flex-col gap-4 pt-0 md:pt-3">
      {remainingDescription && (
        <p className="text-sm md:text-sm leading-relaxed whitespace-pre-line text-(--brown)">
          {remainingDescription}
        </p>
      )}
    </div>
  );

  const ticketsContent = (
    <div className="mt-6 md:mt-8">
      <div className="bg-(--brown) mb-6 md:mb-4" style={{ height: "1px" }} />
      <div className="grid grid-cols-2 gap-x-4 md:gap-x-10 gap-y-6 md:gap-y-4 items-start">
        {/* Row 1: Headings */}
        <h2 className="font-bold m-0!">Matinee</h2>
        <h2 className="font-bold m-0!">Concert</h2>

        {/* Row 2+3: Date + Location */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start gap-2">
            <Calendar2EventFill size={18} className="shrink-0 mt-1" />
            {!content.isComingSoon && matineeDate ? (
              <div>{formatDate(matineeDate)}</div>
            ) : (
              <div>Date TBC</div>
            )}
          </div>
          <div className="flex items-start gap-2">
            <GeoAltFill size={18} className="shrink-0 mt-1" />
            {content.isComingSoon ? (
              <div>Location TBC</div>
            ) : (
              <div>{content.tickets?.matinee.location}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-start gap-2">
            <Calendar2EventFill size={18} className="shrink-0 mt-1" />
            {!content.isComingSoon && concertDate ? (
              <div>{formatDate(concertDate)}</div>
            ) : (
              <div>Date TBC</div>
            )}
          </div>
          <div className="flex items-start gap-2">
            <GeoAltFill size={18} className="shrink-0 mt-1" />
            {content.isComingSoon ? (
              <div>Location TBC</div>
            ) : (
              <div>{content.tickets?.concert.location}</div>
            )}
          </div>
        </div>

        {/* Row 4: Ticket URL Buttons */}
        <div className="w-fit">
          {isMatineeAvailable ? (
            <a href={content.tickets?.matinee.ticketUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="brown" size="lg" className="mt-1">
                Tickets <ArrowUpRight size={18} />
              </Button>
            </a>
          ) : (
            <Button variant="brown" size="lg" className="mt-1" disabled>
              Tickets <ArrowUpRight size={18} />
            </Button>
          )}
        </div>

        <div className="w-fit">
          {isConcertAvailable ? (
            <a href={content.tickets?.concert.ticketUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="brown" size="lg" className="mt-1">
                Tickets <ArrowUpRight size={18} />
              </Button>
            </a>
          ) : (
            <Button variant="brown" size="lg" className="mt-1" disabled>
              Tickets <ArrowUpRight size={18} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-(--beige) text-(--brown) py-16 max-w-6xl mx-auto text-base rounded-lg">
      {/* Home Page Only - Title Header */}
      {headingVariant === "homePage" && (
        <div className="flex flex-col md:flex-row md:justify-center md:items-center pb-8 md:pb-12 px-6 md:px-0 gap-2 md:gap-0">
          <h1 className="font-semibold! text-2xl! md:text-4xl! m-0! text-left">
            Our Upcoming Concert,&nbsp;
          </h1>
          <h1 className="font-light! text-2xl! md:text-4xl! m-0! italic text-left">{title}</h1>
        </div>
      )}

      {/* Content */}
      <div className="grid grid-cols-[auto_1fr] gap-4 md:gap-6 lg:gap-12 items-start justify-center px-6 md:px-0">
        {semester === "2" ? (
          <>
            <div className="col-start-2 row-start-1 min-w-0 flex items-start">
              {firstParagraphContent}
            </div>
            <div className="col-start-1 row-start-1">{poster}</div>
            <div className="col-start-1 col-span-2 row-start-2 mt-2 md:mt-3">
              {remainingContent}
            </div>
            <div className="col-start-1 col-span-2 row-start-3">{ticketsContent}</div>
          </>
        ) : (
          <>
            <div className="col-start-1 row-start-1">{poster}</div>
            <div className="col-start-2 row-start-1 min-w-0 flex items-start">
              {firstParagraphContent}
            </div>
            <div className="col-start-1 col-span-2 row-start-2 mt-2 md:mt-3">
              {remainingContent}
            </div>
            <div className="col-start-1 col-span-2 row-start-3">{ticketsContent}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default UpcomingConcert;
