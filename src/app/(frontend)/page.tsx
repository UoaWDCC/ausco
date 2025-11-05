import Header from "@components/global/Header";
import HeroSection from "@components/home/HeroSection";
import UpcomingConcert from "@components/home/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import PastConcert from "@components/home/PastConcert";
import Footer from "@components/global/Footer";
import { getHeader } from "@/actions/getHeader";

const headerContent = await getHeader();

export default async function HomePage() {
  // const landingPageData = await getLandingPage();

  return (
    <>
      <HeroSection />
      <UpcomingConcert />
      <InfoCards />
      <PastConcert />
    </>
  );
}
