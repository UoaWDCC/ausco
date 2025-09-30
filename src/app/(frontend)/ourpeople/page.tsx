import Header from "@components/home/Header";
import OurPeople from "@components/ourpeople/OurPeople";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import { getHeader } from "@/actions/getHeader";
import Players from "@components/ourpeople/Players";
import Footer from "@components/home/Footer";
import Conductors from "@components/ourpeople/Conductors";
import HallOfFame from "@components/ourpeople/HallOfFame";

export default async function OurPeoplePage() {
  const headerContent = await getHeader();

  return (
    <>
      <Header content={headerContent} />
      <OurPeople />
      <ExecutiveTeam />
      <Conductors />
      <Players />
      <HallOfFame />
      <Footer />
    </>
  );
}
