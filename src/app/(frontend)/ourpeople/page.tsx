import { getOurPeople } from "@/actions/pageActions";

import Header from "@components/ourpeople/Header";
import ExecutiveTeam from "@components/ourpeople/ExecutiveTeam";
import Conductors from "@components/ourpeople/Conductors";
import Players from "@components/ourpeople/Players";
import HallOfFame from "@components/ourpeople/HallOfFame";

type SectionWrapperProps = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-8 sm:pb-12 md:pb-16">
      {children}
    </div>
  );
};

export default async function OurPeoplePage() {
  const content = await getOurPeople();

  return (
    <section className="flex flex-col items-center bg-(--cream)">
      <div className="w-full pt-28 md:max-w-6xl md:px-6 md:pt-44">
        <Header content={content.header} />
      </div>

      <SectionWrapper>
        <ExecutiveTeam content={content.executive} />
        <Conductors content={content.conductors} />
      </SectionWrapper>

      <div className="w-full pb-8 sm:pb-12 md:max-w-6xl md:px-6 md:pb-16">
        <Players content={content.players} />
      </div>

      <SectionWrapper>
        <HallOfFame content={content.hallOfFame} />
      </SectionWrapper>
    </section>
  );
}
