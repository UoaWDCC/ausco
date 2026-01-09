import { getConcerts } from "@/actions/pageActions";

import Hero from "@components/concerts/Hero";
import Card from "@components/concerts/Card";

export default async function Concerts() {
  const content = await getConcerts();

  return (
    <section className="bg-(--cream)">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-44 pb-8 sm:pb-12 md:pb-16">
        <Hero title="Concerts" />

        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Upcoming Concerts Button */}
          <Card background={content.upcoming} type="upcoming" />

          {/* Past Concerts Button */}
          <Card background={content.past} type="past" />
        </div>
      </div>
    </section>
  );
}
