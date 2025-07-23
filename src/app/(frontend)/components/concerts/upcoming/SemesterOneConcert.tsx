import { getUpcomingConcerts } from "@/actions/getUpcomingConcerts";
import Image from "next/image";

const SemesterOneConcert = async () => {
  const concerts = await getUpcomingConcerts();
  const concert = concerts.upcomingConcert;
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
        </div>
      </div>
    </div>
  );
};

export default SemesterOneConcert;
