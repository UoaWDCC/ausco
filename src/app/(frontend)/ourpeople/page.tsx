import Header from "@components/global/Header";
import OurPeople from "@components/ourpeople/OurPeople";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import { getHeader } from "@/actions/getHeader";
import Players from "@components/ourpeople/Players";
import Footer from "@components/global/Footer";
import Conductors from "@components/ourpeople/Conductors";

export default async function OurPeoplePage() {
  const headerContent = await getHeader();

  return (
    <>
      <Header content={headerContent} />
      <OurPeople />
      <ExecutiveTeam />
      <Conductors />
      <Players />
      <Footer />
    </>
  );
}
