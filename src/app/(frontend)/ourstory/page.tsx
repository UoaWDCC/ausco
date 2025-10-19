import Header from "@components/home/Header";
import OurStoryHeroSection from "@components/ourstory/OurStoryHeroSection";
import { getHeader } from "@/actions/getHeader";
import Footer from "@components/home/Footer";
import Timeline from "@components/ourstory/Timeline";

const headerContent = await getHeader();

export default function OurStoryPage() {
  return (
    <div className="bg-[var(--cream)] h-full">
      <Header content={headerContent} />
      <OurStoryHeroSection />
      <Timeline />
      <Footer />
    </div>
  );
}
