import { getOurStory } from "@/actions/pageActions";
import Establishment from "@components/ourstory/Establishment";
import Header from "@components/ourstory/Header";
import Timeline from "@components/ourstory/Timeline";

export default async function OurStoryPage() {
  const content = await getOurStory();

  return (
    <section className="bg-(--cream)">
      <div className="max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center">
        <Header description={content.description} />

        <div className="absolute left-1/2 top-0 h-full w-px bg-(--navy)"></div>
        <Establishment content={content.establishment} />
        {/* <Timeline /> */}
      </div>
    </section>
  );
}
