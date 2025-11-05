import HeroSection from "@components/home/HeroSection";
import UpcomingConcert from "@components/home/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import PastConcert from "@components/home/PastConcert";

export default async function HomePage() {

  return (
    <>
      <HeroSection />
      <UpcomingConcert />
      <InfoCards />
      <PastConcert />
    </>
  );
}
