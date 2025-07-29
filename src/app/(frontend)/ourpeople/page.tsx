import Header from "@components/home/Header";
import OurPeople from "@components/ourpeople/OurPeople";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import { getHeader } from "@/actions/getHeader";

const headerContent = await getHeader();

export default async function OurPeoplePage() {
  return (
    <>
      <Header content={headerContent} />
      <OurPeople />
      <ExecutiveTeam />
    </>
  );
}
