import OurPeople from "@components/ourpeople/OurPeople";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import Players from "@components/ourpeople/Players";
import Conductors from "@components/ourpeople/Conductors";

export default async function OurPeoplePage() {
  return (
    <>
      <OurPeople />
      <Conductors />
      <ExecutiveTeam />
      <Players />
    </>
  );
}
