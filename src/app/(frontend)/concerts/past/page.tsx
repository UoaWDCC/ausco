import { getConcertsPast } from "@/actions/pageActions";

import Header from "@components/concerts/Header";
import SemesterConcert from "@components/concerts/past/SemesterConcert";

export default async function Past() {
  const content = await getConcertsPast();

  return (
    <div className="bg-(--cream)">
      <div className="max-w-6xl mx-auto px-6 pt-44">
        <Header title="Past Concerts" description={content.description} />

        {/* Past Concerts */}
        <section className="text-left">
          {content.pastConcerts
            ?.sort((a, b) => b.year - a.year) // newest year first
            .map((concert, index) => (
              <div key={index} className="pb-8 sm:pb-12 md:pb-16">
                {/* Divider */}
                <div className="hidden lg:block w-full h-px bg-(--brown) mb-16" />

                {/* Year */}
                <h1 className="text-center lg:text-left text-lg sm:text-xl md:text-2xl text-(--brown) pb-3 md:pb-7">
                  {concert.year}
                </h1>

                {/* Concerts - Semester 1 & 2 */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-7 md:gap-9 items-start bg-(--beige) w-full rounded-lg p-4 sm:p-7 md:p-9">
                  <SemesterConcert semester="1" content={concert.semesterOne} />

                  <div
                    className="block lg:hidden w-full bg-(--brown)"
                    style={{ height: "0.5px" }}
                  />

                  <SemesterConcert semester="2" content={concert.semesterTwo} />
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
}
