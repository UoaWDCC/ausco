import { getOurStory } from "@/actions/pageActions";

import Hero from "@components/ourstory/Hero";
import Timeline from "@components/ourstory/Timeline";
import Establishment from "@components/ourstory/Establishment";
import TimelineItem from "@components/ourstory/TimelineItem";

export default async function OurStoryPage() {
  const content = await getOurStory();

  return (
    <section className="bg-(--cream)">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-44 pb-8 sm:pb-12 md:pb-16">
        <Hero description={content.description} />

        <Timeline>
          <Establishment content={content.establishment} />
          {content?.timeline
            ?.slice()
            .sort((a, b) => a.year - b.year) // oldest year first
            .map((item, index) => (
              <TimelineItem
                key={index}
                content={item}
                flipLayout={index % 2 === 0}
                isLast={index === (content?.timeline?.length ?? 0) - 1}
              />
            ))}
        </Timeline>
      </div>
    </section>
  );
}
