import HeroSection from "@components/concerts/upcoming/HeroSection";
import SemesterOneConcert from "@components/concerts/upcoming/SemesterOneConcert";
import Calendar from "@components/concerts/upcoming/Calendar";
import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";

export default async function Upcoming() {
  const headerContent = await getHeader();

  return (
    <>
      <Header content={headerContent} />
      <HeroSection />
      <SemesterOneConcert />
      <Calendar />
    </>
  );
}
