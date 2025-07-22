import OurPeople from "@components/ourpeople/OurPeople";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import Players from "@components/ourpeople/Players";

export default async function OurPeoplePage() {
  return (
    <>
      <OurPeople />
      <ExecutiveTeam />
      <Players />
    </>
  );
}
