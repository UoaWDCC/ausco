import HeroSection from "@components/concerts/upcoming/HeroSection";
import SemesterOneConcert from "@components/concerts/upcoming/SemesterOneConcert";
import SemesterTwoConcert from "@components/concerts/upcoming/SemesterTwoConcert";
import Calendar from "@components/concerts/upcoming/Calendar";

export default async function Upcoming() {
  return (
    <>
      <HeroSection />
      <SemesterOneConcert />
      <SemesterTwoConcert />
      <Calendar />
    </>
  );
}
