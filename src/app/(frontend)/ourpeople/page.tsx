import { getOurPeople } from "@/actions/pageActions";

import Header from "@components/ourpeople/Header";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import Conductors from "@components/ourpeople/Conductors";
import Players from "@components/ourpeople/Players";
import HallOfFame from "@components/ourpeople/HallOfFame";

export default async function OurPeoplePage() {
  const content = await getOurPeople();
  return (
    <section className="bg-(--cream)">
      <div className="max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center">
        <Header content={content.header} />
        <ExecutiveTeam content={content.executive} />
        <Conductors content={content.conductors} />
        <Players content={content.players} />
        <HallOfFame content={content.hallOfFame} />
      </div>
    </section>
  );
}
