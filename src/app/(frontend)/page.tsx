import UpcomingConcert from "@components/home/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import PastConcert from "@components/home/PastConcert";
import Footer from "@components/home/Footer";
import HeroSection from "@components/home/HeroSection";
import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";

const headerContent = await getHeader();

export default async function HomePage() {
  return (
    <>
      <Header content={headerContent} />
      <HeroSection />
      <UpcomingConcert />
      <InfoCards />
      <PastConcert />
      <Footer />
    </>
  );
}
