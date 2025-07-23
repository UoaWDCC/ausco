//component displays semester one concert info (title, poster, descriptions, performances)
import { getUpcomingConcerts } from "@/actions/getUpcomingConcerts";
import Image from "next/image";
import EventInfo from "./EventInfo";

const SemesterOneConcert = async () => {
  //fetch upcoming concert data from payload
  const concerts = await getUpcomingConcerts();
  const concert = concerts.upcomingConcert;
  const eventOne = concerts.eventOne;
  const eventTwo = concerts.eventTwo;

  //extract poster image from object
  const posterMedia =
    typeof concert?.poster === "object" && concert?.poster !== null ? concert.poster : undefined;
  const posterUrl = posterMedia?.url || "";
  const posterAlt = posterMedia?.alt || "Concert Poster";

  //extract concert vars from object
  const { title, description1, description2 } = concert || {};
  const descriptions = [description1, description2];

  return (
    //outer section background setup
    <div className="w-full bg-[var(--cream)] py-4 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:p-16">
        {/*card container*/}
        <div className="bg-[var(--beige)] text-[var(--brown)] min-h-[400px] md:min-h-[700px] rounded-xl p-4 sm:p-6 md:p-12 pt-4 sm:pt-24 pb-4 sm:pb-16  flex flex-col lg:flex-row justify-evenly items-center gap-4 sm:gap-8">
          {/*image rendering setup*/}
          <Image
            src={posterUrl}
            alt={posterAlt}
            width={403}
            height={503}
            className="rounded-lg border border-[var(--brown)] w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[403px] lg:h-[503px] object-cover"
          />

          {/*card text + event info*/}
          <div className="flex-1 flex flex-col w-full md:max-w-lg gap-3 sm:gap-4">
            {/*row for semester tag + title*/}
            <div className="flex flex-col lg:flex-row  gap-2 lg:gap-8 mb-2 md:mb-6 flex-nowrap items-start lg:items-center">
              <span className="bg-[var(--brown)] text-[var(--cream)] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs font-semibold w-fit mb-1 sm:mb-2 whitespace-nowrap">
                Semester 1
              </span>
              <h2 className="italic text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
            </div>

            {/*mapping text descriptions*/}
            {descriptions.map((dsc, i) => (
              <p className="md:text-sm text-xs mb-1 sm:mb-2" key={i}>
                {dsc}
              </p>
            ))}

            {/*line divider*/}
            <hr className="border-t-[2px] border-[var(--brown)] md:mb-4 sm:mb-6" />

            {/*mapping matinee + concert event info*/}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-4">
              {[eventOne, eventTwo].map((event, j) => (
                <EventInfo {...event} key={j} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterOneConcert;
