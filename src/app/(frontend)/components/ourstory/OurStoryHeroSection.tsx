import { getOurStory } from "@/actions/ourStoryActions";

const OurStoryHeroSection = async () => {
  const content = await getOurStory();

  return (
    <div className="flex flex-col items-center gap-4 pt-40">
      <div className="text-[var(--navy)] md:text-4xl text-xl">{content.OurStoryTitle}</div>
      <div className="text-[var(--navy)] md:text-md text-xs w-7/8 text-center">
        {content.OurStoryDescription}
      </div>
    </div>
  );
};

export default OurStoryHeroSection;
