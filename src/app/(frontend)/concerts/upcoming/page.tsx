import HeroSection from "@components/concerts/upcoming/HeroSection";
import SemesterOneConcert from "@components/concerts/upcoming/SemesterOneConcert";
import ComingSoon from "@/app/(frontend)/components/concerts/ComingSoon";
import Calendar from "@components/concerts/upcoming/Calendar";
import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";
import { getComingSoon } from "@/actions/concertsActions";

export default async function Upcoming() {
  const headerContent = await getHeader();
  const data = await getComingSoon();

  return (
    <>
      <Header content={headerContent} />
      <HeroSection />
      <SemesterOneConcert />
      <ComingSoon
        title={data.header?.title}
        description={data.header?.description}
        matineeData={data.matinee}
        concertData={data.concert}
      />
      <Calendar />
    </>
  );
}
