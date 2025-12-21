import { getConcertsPast } from "@/actions/pageActions";

import Header from "@components/concerts/Header";
import SemesterConcert from "@components/concerts/past/SemesterConcert";

export default async function Past() {
  const content = await getConcertsPast();

  return (
    <div className="bg-(--cream)">
      <div className="max-w-6xl mx-auto pt-44">
        <Header title="Past Concerts" description={content.description} />

        {/* Past Concerts */}
        <section className="text-left">
          {content.pastConcerts?.map((concert, index) => (
            <div key={concert.id} className="pb-16">
              {/* Divider */}
              <div className="bg-(--brown) mb-16" style={{ height: "0.5px" }} />

              {/* Year */}
              <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-7">{concert.year}</h1>

              {/* Concerts - Semester 1 & 2 */}
              <div className="flex gap-9 items-start bg-(--beige) w-full rounded-lg p-9">
                <SemesterConcert semester="1" content={concert.semesterOne} />
                <SemesterConcert semester="2" content={concert.semesterTwo} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
