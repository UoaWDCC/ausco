import HeroSection from "@components/concerts/upcoming/HeroSection";
import SemesterOneConcert from "@components/concerts/upcoming/SemesterOneConcert";
import Calendar from "@components/concerts/upcoming/Calendar";

export default function Upcoming() {
  return (
    <>
      <HeroSection />
      <SemesterOneConcert />
      <Calendar />
    </>
  );
}
