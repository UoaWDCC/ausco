import { getOurStory } from "@/actions/pageActions";
import Establishment from "@components/ourstory/Establishment";
import Header from "@components/ourstory/Header";
import Timeline from "@components/ourstory/Timeline";

const TimelineRail = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {/* Single continuous vertical line */}
      <div className="absolute left-1/2 top-4 bottom-0 w-0.5 bg-(--navy) -translate-x-1/2 rounded-full" />
      {children}
    </div>
  );
};

export default async function OurStoryPage() {
  const content = await getOurStory();

  return (
    <section className="bg-(--cream)">
      <div className="max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center">
        <Header description={content.description} />
        <TimelineRail>
          <Establishment content={content.establishment} />
          <Timeline content={content.timeline} />
        </TimelineRail>
      </div>
    </section>
  );
}
