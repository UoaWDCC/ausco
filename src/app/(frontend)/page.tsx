import UpcomingConcert from "@components/home/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import PastConcert from "@components/home/PastConcert";
import Footer from "@components/home/Footer";
import HeroSection from "@components/home/HeroSection";
import Ticket from "@components/home/Ticket";
import { getLandingPage } from "@/actions/getLandingPage";
export default async function HomePage() {
  const landingPageData = await getLandingPage();
  return (
    <>
      <HeroSection />
      <UpcomingConcert />
      <InfoCards />
      <PastConcert />
      <Footer />
      <Ticket matineeData={landingPageData.matinee}/>
    </>
  );
}
