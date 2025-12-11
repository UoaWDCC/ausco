import Header from "@components/concerts/Header";
import UpcomingConcert1 from "@components/concerts/upcoming/UpcomingConcert1";
import UpcomingConcert2 from "@components/concerts/upcoming/UpcomingConcert2";

import { getConcertsUpcoming } from "@/actions/pageActions";

export default async function Upcoming() {
  const content = await getConcertsUpcoming();

  return (
    <div className="bg-(--cream)">
      <Header title="Upcoming Concerts" description={content.description} />

      {/* Semester 1 */}
      <UpcomingConcert1 content={content.concertsUpcoming1} headingVariant="concertsUpcomingPage" />
      <div className="py-9"></div>

      {/* Semester 2 */}
      <UpcomingConcert2 content={content.concertsUpcoming2} headingVariant="concertsUpcomingPage" />
      <div className="py-9"></div>

      {/* Embded Google Calendar */}
      {content.googleCalendarEmail && (
        <section className="w-full max-w-6xl mx-auto overflow-hidden flex items-center justify-center pb-18">
          <iframe
            src={`https://calendar.google.com/calendar/embed?src=${content.googleCalendarEmail}&ctz=Pacific/Auckland`}
            className="w-full h-[700px] rounded-lg"
            title="Google Calendar"
          />
        </section>
      )}
    </div>
  );
}
