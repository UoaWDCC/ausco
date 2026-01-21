import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { GeoAltFill, Calendar2EventFill } from "react-bootstrap-icons";

import { Media } from "@/payload-types";

import { Button } from "../../ui/button";
import { normaliseDate } from "@/app/(frontend)/util/date";

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
    <div className="flex aspect-5/7 w-full max-w-[376px] items-center justify-center rounded-md bg-(--brown) p-1 text-base text-(--cream)">
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
        className="aspect-5/7 w-80 shrink-0 rounded-md border border-(--brown) object-cover sm:w-96 md:w-[376px]"
        sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 376px"
        quality={90}
      />
    )
  );

  const titleContent = headingVariant === "concertsUpcomingPage" && (
    <div className="flex flex-col items-start gap-1 whitespace-pre-line sm:gap-2 lg:flex-row lg:items-center lg:gap-3">
      {semester && (
        <div className="rounded-md bg-(--brown) px-3 py-1 text-xs whitespace-nowrap text-(--cream) sm:text-sm md:text-base">
          Semester {semester}
        </div>
      )}
      <h1 className="w-full truncate text-xl font-light! italic sm:text-2xl md:text-3xl">
        {title}
      </h1>
    </div>
  );

  const descriptionContent = (
    <p className="text-xs whitespace-pre-line sm:text-sm md:text-base">{content.description}</p>
  );

  const ticketContent = (
    <div className="grid grid-cols-2 items-start gap-x-3 gap-y-2 text-xs sm:text-sm md:gap-y-3 md:text-base lg:gap-x-10 lg:gap-y-4">
      {/* Row 1: Headings */}
      <h2 className="m-0! font-bold">Matinee</h2>
      <h2 className="m-0! font-bold">Concert</h2>

      {/* Row 2+3: Date + Location */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <Calendar2EventFill className="mt-0.5 h-[1em] w-[1em] shrink-0 lg:mt-1" />
          {!content.isComingSoon && matineeDate ? (
            <div>{formatDate(matineeDate)}</div>
          ) : (
            <div>Date TBC</div>
          )}
        </div>
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <GeoAltFill className="mt-0.5 h-[1em] w-[1em] shrink-0 lg:mt-1" />
          {content.isComingSoon ? (
            <div>Location TBC</div>
          ) : (
            <div>{content.tickets?.matinee.location}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <Calendar2EventFill className="mt-0.5 h-[1em] w-[1em] shrink-0 lg:mt-1" />
          {!content.isComingSoon && concertDate ? (
            <div>{formatDate(concertDate)}</div>
          ) : (
            <div>Date TBC</div>
          )}
        </div>
        <div className="flex items-start gap-1 md:gap-1.5 lg:gap-2">
          <GeoAltFill className="mt-0.5 h-[1em] w-[1em] shrink-0 lg:mt-1" />
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
          <Button
            asChild
            variant="brown"
            size="lg"
            className="h-8 gap-1.5 px-2 text-xs sm:h-9 sm:gap-2 sm:px-3 sm:text-sm md:h-11 md:px-4 md:text-base lg:mt-1"
          >
            <a href={content.tickets?.matinee.ticketUrl} target="_blank" rel="noopener noreferrer">
              Tickets <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
          </Button>
        ) : (
          <Button
            variant="brown"
            size="lg"
            className="h-8 gap-1.5 px-2 text-xs sm:h-9 sm:gap-2 sm:px-3 sm:text-sm md:h-11 md:px-4 md:text-base lg:mt-1"
            disabled
          >
            Tickets <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Button>
        )}
      </div>

      <div className="w-fit">
        {isConcertAvailable ? (
          <Button
            asChild
            variant="brown"
            size="lg"
            className="h-8 gap-1.5 px-2 text-xs sm:h-9 sm:gap-2 sm:px-3 sm:text-sm md:h-11 md:px-4 md:text-base lg:mt-1"
          >
            <a href={content.tickets?.concert.ticketUrl} target="_blank" rel="noopener noreferrer">
              Tickets <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
          </Button>
        ) : (
          <Button
            variant="brown"
            size="lg"
            className="h-8 gap-1.5 px-2 text-xs sm:h-9 sm:gap-2 sm:px-3 sm:text-sm md:h-11 md:px-4 md:text-base lg:mt-1"
            disabled
          >
            Tickets <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <section className="mx-auto rounded-lg bg-(--beige) px-3 py-3 text-(--brown) sm:px-8 sm:py-8 md:px-14 md:py-12 lg:max-w-6xl lg:px-24 lg:py-16">
      {/* Home Page Only - Title Header */}
      {headingVariant === "homePage" && (
        <div className="flex flex-col justify-center pb-4 sm:pb-8 md:pb-12 lg:flex-row">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl!">
            Our Upcoming Concert,&nbsp;
          </h1>
          <h1 className="text-xl font-light! italic sm:text-2xl md:text-3xl lg:text-4xl!">
            {title}
          </h1>
        </div>
      )}

      {/* Content - Large screens layout */}
      <div className="hidden items-stretch justify-center gap-8 lg:flex lg:gap-16">
        {semester === "2" ? (
          <>
            <div
              className={`flex flex-col ${content.isComingSoon ? "justify-evenly py-10" : "justify-between"}`}
            >
              {titleContent}
              {descriptionContent}
              <div className="my-2 w-full bg-(--brown)" style={{ height: "0.5px" }} />
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
              <div className="my-2 w-full bg-(--brown)" style={{ height: "0.5px" }} />
              {ticketContent}
            </div>
          </>
        )}
      </div>

      {/* Content - Small to medium screens layout */}
      <div className="flex flex-col gap-3 lg:hidden">
        {titleContent}
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-7 md:gap-9">
          {poster}
          {descriptionContent}
        </div>

        <div className="my-2 w-full bg-(--brown)" style={{ height: "0.5px" }} />
        {ticketContent}
      </div>
    </section>
  );
};

export default UpcomingConcert;
