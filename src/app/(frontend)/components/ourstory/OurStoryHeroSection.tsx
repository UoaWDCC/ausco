import { getOurStory } from "@/actions/ourStoryActions";

const OurStoryHeroSection = async () => {
  const content = await getOurStory();

  return (
    <div className="flex flex-col items-center gap-4 pt-40">
      <div className="text-[var(--navy)] text-4xl">{content.OurStoryTitle}</div>
      <div className="text-[var(--navy)] text-md">{content.OurStoryDescription}</div>
    </div>
  );
};

export default OurStoryHeroSection;
