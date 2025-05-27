import HeroSection from "@components/about/HeroSection";
import FirstTwoCard from "@components/about/FirstTwoCard";
import SecondTwoCard from "@components/about/SecondTwoCard";

export default async function AboutPage() {
  return (
    <>
      <HeroSection />
      <FirstTwoCard />
      <SecondTwoCard />
    </>
  );
}
