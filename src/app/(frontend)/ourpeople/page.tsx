import { getOurPeople } from "@/actions/pageActions";

import Header from "@components/ourpeople/Header";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import Conductors from "@components/ourpeople/Conductors";
import Players from "@components/ourpeople/Players";
import HallOfFame from "@components/ourpeople/HallOfFame";

export default async function OurPeoplePage() {
  const content = await getOurPeople();

  // TODO: REFACTOR CLASSNAMES, DIV STRUCTURE FOR THIS FILE
  return (
    <section className="flex flex-col items-center bg-(--cream)">
      <div className="w-full pt-28 md:mx-auto md:flex md:max-w-6xl md:flex-col md:items-center md:px-6 md:pt-44">
        <Header content={content.header} />
      </div>
      {/* 
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-8 sm:pb-12 md:pb-16">
        <ExecutiveTeam content={content.executive} />
        <Conductors content={content.conductors} />
      </div> */}

      <div className="w-full flex-col items-center md:mx-auto md:flex md:max-w-6xl md:px-6">
        <Players content={content.players} />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-8 sm:pb-12 md:pb-16">
        <HallOfFame content={content.hallOfFame} />
      </div>
    </section>
  );
}
