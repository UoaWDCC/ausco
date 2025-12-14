import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import Players from "@components/ourpeople/Players";
import Conductors from "@components/ourpeople/Conductors";
import HallOfFame from "@components/ourpeople/HallOfFame";
import { getOurPeople } from "@/actions/pageActions";

import Header from "@components/ourpeople/Header";

export default async function OurPeoplePage() {
  const content = await getOurPeople();
  return (
    <section className="bg-(--cream)">
      <div className="max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center">
        <Header content={content.header} />

        <div className="bg-(--navy) mb-18" style={{ height: "0.5px" }} />

        <ExecutiveTeam content={content.executive} />
        {/* <Conductors />
        <Players />
        <HallOfFame /> */}
      </div>
    </section>
  );
}
