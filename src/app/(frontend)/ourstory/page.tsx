import { getOurStory } from "@/actions/pageActions";

import Header from "@components/ourstory/Header";
import Timeline from "@components/ourstory/Timeline";
import Establishment from "@components/ourstory/Establishment";
import TimelineItem from "@components/ourstory/TimelineItem";

export default async function OurStoryPage() {
  const content = await getOurStory();

  return (
    <section className="bg-(--cream)">
      <div className="max-w-6xl mx-auto pt-44 pb-8 sm:pb-12 md:pb-16 px-6 flex flex-col items-center">
        <Header description={content.description} />
        <Timeline>
          <Establishment content={content.establishment} />
          {/* {content?.timeline?.map((year, index) => {
            return <TimelineItem key={index} content={year} flipLayout={index % 2 === 0} />;
          })} */}
        </Timeline>
      </div>
    </section>
  );
}
