import HeroSection from "@components/concerts/upcoming/HeroSection";
import SemesterOneConcert from "@components/concerts/upcoming/SemesterOneConcert";
import SemesterTwoConcert from "@components/concerts/upcoming/SemesterTwoConcert";
import Calendar from "@components/concerts/upcoming/Calendar";
import Header from "@components/home/Header";
import Footer from "@components/home/Footer";
import { getHeader } from "@/actions/getHeader";

export default async function Upcoming() {
  const headerContent = await getHeader();

  return (
    <>
      <Header content={headerContent} />
      <HeroSection />
      <SemesterOneConcert />
      <SemesterTwoConcert />
      <Calendar />
      <Footer />
    </>
  );
}
