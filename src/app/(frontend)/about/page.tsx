import Header from "@components/home/Header";
import HeroSection from "@components/about/HeroSection";
import FirstTwoCard from "@components/about/FirstTwoCard";
import SecondTwoCard from "@components/about/SecondTwoCard";
import { getHeader } from "@/actions/getHeader";

const headerContent = await getHeader();

export default async function AboutPage() {
  return (
    <>
      <Header content={headerContent} />
      <HeroSection />
      <FirstTwoCard />
      <SecondTwoCard />
    </>
  );
}
