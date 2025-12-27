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
    <div className="w-full max-w-[376px] p-1 aspect-5/7 bg-(--brown) rounded-md flex items-center justify-center text-(--cream) text-base">
      <p className="text-center text-xs sm:text-sm md:text-base">Coming Soon! 😉</p>
    </div>
  ) : (
    typeof content.poster === "object" &&
    content.poster?.url && (
      <Image
        src={content.poster.url}
        alt={content.poster.alt || "Poster"}
        width={376}
        height={532}
        className="rounded-md border border-(--brown) shrink-0 w-80 sm:w-96 md:w-[376px] aspect-5/7 object-cover"
        sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 376px"
        quality={90}
      />
    )
  );

  const titleContent = headingVariant === "concertsUpcomingPage" && (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 sm:gap-2 lg:gap-3 whitespace-pre-line">
      {semester && (
        <div className="py-1 px-3 bg-(--brown) text-(--cream) rounded-md whitespace-nowrap text-xs sm:text-sm md:text-base">
          Semester {semester}
        </div>
      )}
      <h1 className="font-light! text-xl sm:text-2xl md:text-3xl italic truncate w-full">
        {title}
      </h1>
    </div>
  );

  const descriptionContent = (
    <p className="whitespace-pre-line text-xs sm:text-sm md:text-base">{content.description}</p>
  );

  const ticketContent = (
    <div className="grid grid-cols-2 gap-x-3 lg:gap-x-10 gap-y-2 md:gap-y-3 lg:gap-y-4 items-start text-xs sm:text-sm md:text-base">
      {/* Row 1: Headings */}
      <h2 className="font-bold m-0!">Matinee</h2>
      <h2 className="font-bold m-0!">Concert</h2>

      {/* Row 2+3: Date + Location */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <Calendar2EventFill className="shrink-0 w-[1em] h-[1em] mt-0.5 lg:mt-1" />
          {!content.isComingSoon && matineeDate ? (
            <div>{formatDate(matineeDate)}</div>
          ) : (
            <div>Date TBC</div>
          )}
        </div>
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <GeoAltFill className="shrink-0 w-[1em] h-[1em] mt-0.5 lg:mt-1" />
          {content.isComingSoon ? (
            <div>Location TBC</div>
          ) : (
            <div>{content.tickets?.matinee.location}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <Calendar2EventFill className="shrink-0 w-[1em] h-[1em] mt-0.5 lg:mt-1" />
          {!content.isComingSoon && concertDate ? (
            <div>{formatDate(concertDate)}</div>
          ) : (
            <div>Date TBC</div>
          )}
        </div>
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <GeoAltFill className="shrink-0 w-[1em] h-[1em] mt-0.5 lg:mt-1" />
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
            <Button
              variant="brown"
              size="lg"
              className="text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-11 px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2 lg:mt-1"
            >
              Tickets <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </Button>
          </a>
        ) : (
          <Button
            variant="brown"
            size="lg"
            className="text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-11 px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2 lg:mt-1"
            disabled
          >
            Tickets <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        )}
      </div>

      <div className="w-fit">
        {isConcertAvailable ? (
          <a href={content.tickets?.concert.ticketUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="brown"
              size="lg"
              className="text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-11 px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2 lg:mt-1"
            >
              Tickets <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </Button>
          </a>
        ) : (
          <Button
            variant="brown"
            size="lg"
            className="text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-11 px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2 lg:mt-1"
            disabled
          >
            Tickets <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-(--beige) text-(--brown) mx-auto lg:max-w-6xl rounded-lg px-3 sm:px-8 md:px-14 lg:px-24 py-3 sm:py-8 md:py-12 lg:py-16">
      {/* Home Page Only - Title Header */}
      {headingVariant === "homePage" && (
        <div className="flex justify-center pb-12">
          <h1 className="font-semibold! text-4xl! m-0!">Our Upcoming Concert,&nbsp;</h1>
          <h1 className="font-light! text-4xl! m-0! italic">{title}</h1>
        </div>
      )}

      {/* Content - Large screens layout */}
      <div className="hidden lg:flex gap-8 lg:gap-16 items-stretch justify-center">
        {semester === "2" ? (
          <>
            <div
              className={`flex flex-col ${content.isComingSoon ? "justify-evenly py-10" : "justify-between"}`}
            >
              {titleContent}
              {descriptionContent}
              <div className="w-full bg-(--brown) my-2" style={{ height: "0.5px" }} />
              {ticketContent}
            </div>
            {poster}
          </>
        ) : (
          <>
            {poster}
            <div
              className={`flex flex-col ${content.isComingSoon ? "justify-evenly py-10" : "justify-between"}`}
            >
              {titleContent}
              {descriptionContent}
              <div className="w-full bg-(--brown) my-2" style={{ height: "0.5px" }} />
              {ticketContent}
            </div>
          </>
        )}
      </div>

      {/* Content - Small to medium screens layout */}
      <div className="flex flex-col lg:hidden gap-3">
        {titleContent}
        <div className="grid grid-cols-2 gap-3 sm:gap-7 md:gap-9 items-start">
          {poster}
          {descriptionContent}
        </div>

        <div className="w-full bg-(--brown) my-2" style={{ height: "0.5px" }} />
        {ticketContent}
      </div>
    </section>
  );
};

export default UpcomingConcert;
