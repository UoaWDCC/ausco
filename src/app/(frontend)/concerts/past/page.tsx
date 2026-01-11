import { getConcertsPast } from "@/actions/pageActions";

import Hero from "@components/concerts/Hero";
import SemesterConcert from "@components/concerts/past/SemesterConcert";

export default async function Past() {
  const content = await getConcertsPast();

  return (
    <div className="bg-(--cream)">
      <div className="mx-auto max-w-6xl px-6 pt-44">
        <Hero title="Past Concerts" description={content.description} />

        {/* Past Concerts */}
        <section className="text-left">
          {content.pastConcerts
            ?.sort((a, b) => b.year - a.year) // newest year first
            .map((concert, index) => (
              <div key={index} className="pb-8 sm:pb-12 md:pb-16">
                {/* Divider */}
                <div className="mb-16 hidden h-px w-full bg-(--brown) lg:block" />

                {/* Year */}
                <h1 className="pb-3 text-center text-lg text-(--brown) sm:text-xl md:pb-7 md:text-2xl lg:text-left">
                  {concert.year}
                </h1>

                {/* Concerts - Semester 1 & 2 */}
                <div className="flex w-full flex-col items-start gap-4 rounded-lg bg-(--beige) p-4 sm:gap-7 sm:p-7 md:gap-9 md:p-9 lg:flex-row">
                  <SemesterConcert semester="1" content={concert.semesterOne} />

                  <div
                    className="block w-full bg-(--brown) lg:hidden"
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
