import { getUpcomingConcerts } from "@/actions/getUpcomingConcerts";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@components/ui/button";

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

            <div className="flex flex-col sm:flex-row gap-4"></div>
            <div className="flex flex-col sm:flex-row ">
              <div className="flex-1 flex flex-col ">
                <div className="font-bold mb-2">{eventOne?.title}</div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={18} className="stroke-[var(--brown)] stroke-[3px]" />
                  <p>{eventOne?.date}</p>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[var(--brown)]">
                  <MapPin size={18} className="stroke-[var(--brown)] stroke-[3px]" />
                  <p>{eventOne?.location}</p>
                </div>
                <Button className="mt-2  -ml-2 lg:ml-0 h-10 lg:h-12 w-24 lg:w-28 bg-transparent text-[var(--brown)] border border-[#602C0F] hover:bg-[var(--brown)] hover:text-[var(--beige)] py-4 rounded-lg flex items-center gap-2">
                  Tickets <ArrowUpRight size={20} />
                </Button>
              </div>

              <div className="flex-1 flex flex-col  ">
                <div className="font-bold mb-2">{eventTwo?.title}</div>
                <div className="flex items-center gap-2 mb-1 text-[var(--brown)]">
                  <Calendar size={18} className="stroke-[var(--brown)] stroke-[3px]" />
                  <span>{eventTwo?.date}</span>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[var(--brown)]">
                  <MapPin size={18} className="stroke-[var(--brown)] stroke-[3px]" />
                  <span>{eventTwo?.location}</span>
                </div>
                <Button className="mt-2 -ml-2 lg:ml-0 h-10 lg:h-12 w-24 lg:w-28 bg-transparent text-[var(--brown)] border hover:bg-[var(--brown)] hover:text-[var(--beige)] border-[#602C0F] px-8 py-4 rounded-lg flex items-center gap-2">
                  Tickets <ArrowUpRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterOneConcert;
