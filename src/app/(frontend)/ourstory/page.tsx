import { getOurStory } from "@/actions/pageActions";

import Header from "@components/ourstory/Header";
import Establishment from "@components/ourstory/Establishment";
import TimelineItem from "@components/ourstory/TimelineItem";

const Timeline = ({ children }: { children: React.ReactNode }) => {
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
        <Timeline>
          <Establishment content={content.establishment} />
          <TimelineItem content={content?.timeline?.[0]} flipLayout={0 % 2 === 0} />
        </Timeline>
      </div>
    </section>
  );
}
