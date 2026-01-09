import Hero from "@components/concerts/Hero";
import UpcomingConcert from "@components/concerts/upcoming/UpcomingConcert";

import { getConcertsUpcoming } from "@/actions/pageActions";

export default async function Upcoming() {
  const content = await getConcertsUpcoming();

  return (
    <div className="bg-(--cream)">
      <div className="mx-auto max-w-6xl px-6 pt-44">
        <Hero title="Upcoming Concerts" description={content.description} />

        {/* Semester 1 */}
        <UpcomingConcert
          content={content.concertsUpcoming1}
          headingVariant="concertsUpcomingPage"
          semester="1"
        />
        <div className="pb-8 sm:pb-12 md:pb-16" />

        {/* Semester 2 */}
        <UpcomingConcert
          content={content.concertsUpcoming2}
          headingVariant="concertsUpcomingPage"
          semester="2"
        />
        <div className="pb-8 sm:pb-12 md:pb-16" />

        {/* Embded Google Calendar */}
        {content.googleCalendarEmail && (
          <section className="mx-auto flex w-full max-w-6xl items-center justify-center overflow-hidden pb-8 sm:pb-12 md:pb-16">
            <iframe
              src={`https://calendar.google.com/calendar/embed?src=${content.googleCalendarEmail}&ctz=Pacific/Auckland`}
              className="h-[700px] w-full rounded-lg"
              title="Google Calendar"
            />
          </section>
        )}
      </div>
    </div>
  );
}
