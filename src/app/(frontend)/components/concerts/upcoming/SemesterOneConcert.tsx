import { getUpcomingConcerts } from "@/actions/getUpcomingConcerts";
import Image from "next/image";
import EventInfo from "./EventInfo";

const SemesterOneConcert = async () => {
  const concerts = await getUpcomingConcerts();
  const concert = concerts.upcomingConcert;
  const eventOne = concerts.eventOne;
  const eventTwo = concerts.eventTwo;
  const posterMedia =
    typeof concert?.poster === "object" && concert?.poster !== null ? concert.poster : undefined;
  const posterUrl = posterMedia?.url || "";
  const posterAlt = posterMedia?.alt || "Concert Poster";

  return (
    <div className="w-full bg-[var(--cream)] py-10">
      <div className="max-w-screen-xl mx-auto p-16">
        <div className="bg-[var(--beige)] text-[var(--brown)] min-h-[700px] rounded-xl p-6 md:p-12 pt-40 pb-24 flex flex-col md:flex-row justify-evenly items-center gap-8">
          <Image
            src={posterUrl}
            alt={posterAlt}
            width={403}
            height={503}
            className="rounded-lg border border-[var(--brown)] "
          />

          <div className="flex-1 flex flex-col max-w-lg gap-4">
            <div className="flex gap-8 mb-6 flex-nowrap items-center">
              <span className="bg-[var(--brown)] text-[var(--cream)] px-6 py-3 rounded-lg text-xs font-semibold w-fit mb-2 whitespace-nowrap">
                Semester 1
              </span>
              <h2 className="italic text-4xl font-bold">{concert?.title}</h2>
            </div>

            <p className="text-sm mb-2">{concert?.description1}</p>
            <p className="text-sm mb-2">{concert?.description2}</p>
            <hr className="border-t-[2px] border-[var(--brown)]" />

            <div className="flex flex-col sm:flex-row gap-4">
              <EventInfo {...eventOne} />
              <EventInfo {...eventTwo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterOneConcert;
