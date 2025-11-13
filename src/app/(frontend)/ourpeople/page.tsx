import OurPeople from "@components/ourpeople/OurPeople";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import Players from "@components/ourpeople/Players";
import Conductors from "@components/ourpeople/Conductors";
import HallOfFame from "@components/ourpeople/HallOfFame";

export default async function OurPeoplePage() {
  return (
    <>
      <OurPeople />
      <ExecutiveTeam />
      <Conductors />
      <Players />
      <HallOfFame />
      <Footer />
    </>
  );
}
