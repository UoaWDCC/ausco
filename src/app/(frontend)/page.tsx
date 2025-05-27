import _Header from "@components/home/Header";
import UpcomingConcert from "@components/home/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import PastConcert from "@components/home/PastConcert";
import Footer from "@components/home/Footer";
import HeroSection from "@components/home/HeroSection";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <UpcomingConcert />
      <InfoCards />
      <PastConcert />
      <Footer />
    </>
  );
}
