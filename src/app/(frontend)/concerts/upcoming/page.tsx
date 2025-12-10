import SemesterOneConcert from "@components/concerts/upcoming/SemesterOneConcert";
import SemesterTwoConcert from "@components/concerts/upcoming/SemesterTwoConcert";
import Calendar from "@components/concerts/upcoming/Calendar";

import UpcomingConcert from "@components/home/UpcomingConcert";

import { getConcertsUpcoming } from "@/actions/pageActions";
import { getSiteSetting } from "@/actions/globalActions";

export default async function Upcoming() {
  const content = await getConcertsUpcoming();

  return (
    <div className="bg-(--cream)">
      <section className="w-full max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center text-center text-(--brown)">
        <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-7">Upcoming Concerts</h1>
        <h3 className="text-base w-full px-30">{content.description}</h3>
      </section>
      <UpcomingConcert content={content.concertsUpcoming1} headingVariant="concertsUpcomingPage" />
      {/* <UpcomingConcert content={content.concertsUpcoming2} headingVariant="concertsUpcomingPage" /> */}
      {/* <SemesterTwoConcert /> */}
      {/* <Calendar /> */}
    </div>
  );
}
