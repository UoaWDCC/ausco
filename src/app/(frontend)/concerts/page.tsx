import { getConcertsPage } from "@/actions/pageActions";

import Header from "@components/concerts/Header";
import Card from "@components/concerts/Card";

export default async function Concerts() {
  const content = await getConcertsPage();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-16 px-6 flex flex-col items-center">
        <Header title="Concerts" />

        <div className="flex flex-row justify-between items-center gap-8 w-full">
          {/* Upcoming Concerts Button */}
          <Card background={content.upcoming} type="upcoming" />

          {/* Past Concerts Button */}
          <Card background={content.past} type="past" />
        </div>
      </div>
    </section>
  );
}
