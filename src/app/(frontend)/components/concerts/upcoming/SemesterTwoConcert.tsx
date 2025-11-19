import { getUpcomingConcerts } from "@/actions/concertsActions";
import Image from "next/image";
import EventInfo from "./EventInfo";

const SemesterTwoConcert = async () => {
  const concerts = await getUpcomingConcerts();
  const concert = concerts.upcomingConcertTwo;
  const eventOne = concerts.semTwoEventOne;
  const eventTwo = concerts.semTwoEventTwo;

  //extract poster image from object if provided
  const posterMedia =
    typeof concert?.poster === "object" && concert?.poster !== null ? concert.poster : undefined;
  const posterUrl = posterMedia?.url || "";
  const posterAlt = posterMedia?.alt || "Concert Poster";

  const { title, description1, description2 } = concert || {};
  const descriptions = [description1, description2];

  return (
    <div className="w-full bg-[var(--cream)] py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:p-16">
        <div className="bg-[var(--beige)] text-[var(--brown)] min-h-[400px] md:min-h-[700px] rounded-xl p-4 sm:p-6 md:p-12 pt-4 sm:pt-24 pb-4 sm:pb-16 flex flex-col lg:flex-row justify-evenly items-center gap-4 sm:gap-8">
          {/* Left section */}
          <div className="flex-1 flex flex-col w-full md:max-w-lg gap-3 sm:gap-4 order-2 lg:order-1">
            {/* Header Section*/}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 mb-2 md:mb-6 flex-nowrap items-center lg:justify-start lg:items-center min-w-0">
              <span className="bg-[var(--brown)] text-[var(--cream)] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs font-semibold w-fit whitespace-nowrap flex-shrink-0">
                Semester 2
              </span>
              <h2 className="italic text-2xl sm:text-3xl md:text-4xl font-heading font-light truncate min-w-0">
                {title || "Coming soon!"}
              </h2>
            </div>

            {/*mapping text descriptions*/}
            {descriptions.map((dsc, i) => (
              <p className="md:text-sm text-xs mb-1 sm:mb-2" key={i}>
                {dsc}
              </p>
            ))}

            <hr className="border-t-[2px] border-[var(--brown)] md:mb-4 sm:mb-6" />

            {/* event info rows */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-4">
              <EventInfo
                title={eventOne?.title || "Matinee"}
                date={eventOne?.date || "Date TBC"}
                location={eventOne?.location || "Location TBC"}
                ticketUrl={eventOne?.ticketUrl || undefined}
              />
              <EventInfo
                title={eventTwo?.title || "Concert"}
                date={eventTwo?.date || "Date TBC"}
                location={eventTwo?.location || "Location TBC"}
                ticketUrl={eventTwo?.ticketUrl || undefined}
              />
            </div>
          </div>

          {/* Poster / Coming Soon Card depending on if poster is provided*/}
          <div className="order-1 lg:order-2">
            {posterUrl ? (
              <Image
                src={posterUrl}
                alt={posterAlt}
                width={403}
                height={503}
                className="rounded-lg border border-[var(--brown)] w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[403px] lg:h-[503px] object-cover"
              />
            ) : (
              <div className="rounded-lg border border-[var(--brown)] w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[403px] lg:h-[503px] bg-[var(--brown)] flex items-center justify-center p-4 text-center">
                <h3 className="text-[var(--cream)] text-xl font-medium">Coming soon! 😉</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterTwoConcert;
