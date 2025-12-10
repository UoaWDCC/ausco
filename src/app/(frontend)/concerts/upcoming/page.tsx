import UpcomingConcert1 from "@components/concerts/upcoming/UpcomingConcert1";
import UpcomingConcert2 from "@components/concerts/upcoming/UpcomingConcert2";
import Calendar from "@components/concerts/upcoming/Calendar";

import { getConcertsUpcoming } from "@/actions/pageActions";

export default async function Upcoming() {
  const content = await getConcertsUpcoming();

  return (
    <div className="bg-(--cream)">
      <section className="w-full max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center text-center text-(--brown)">
        <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-7">Upcoming Concerts</h1>
        <h3 className="text-base w-full px-30">{content.description}</h3>
      </section>
      <UpcomingConcert1 content={content.concertsUpcoming1} headingVariant="concertsUpcomingPage" />
      <div className="py-10"></div>
      <UpcomingConcert2 content={content.concertsUpcoming2} headingVariant="concertsUpcomingPage" />
      <Calendar />
    </div>
  );
}
