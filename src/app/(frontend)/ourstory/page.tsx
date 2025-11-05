import OurStoryHeroSection from "@components/ourstory/OurStoryHeroSection";
import Timeline from "@components/ourstory/Timeline";

export default function OurStoryPage() {
  return (
    <div className="bg-[var(--cream)] h-full">
      <OurStoryHeroSection />
      <Timeline />
    </div>
  );
}
