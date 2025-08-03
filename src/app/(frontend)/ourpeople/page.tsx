import Header from "@components/home/Header";
import OurPeople from "@components/ourpeople/OurPeople";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import { getHeader } from "@/actions/getHeader";
import Players from "@components/ourpeople/Players";

export default async function OurPeoplePage() {
  const headerContent = await getHeader();

  return (
    <>
      <Header content={headerContent} />
      <OurPeople />
      <ExecutiveTeam />
      <Players />
    </>
  );
}
