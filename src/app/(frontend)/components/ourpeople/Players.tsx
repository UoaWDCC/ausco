import { getOurPeople } from "@/actions/getOurPeople";

const Players = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  const sections = content.sections as {
    sectionTitle: string;
    photo: { url: string };
    players: { name: string }[];
  }[];

  return (
    <div className="w-5/6 bg-[var(--beige)] text-[var(--brown)] pt-20 pb-10">
      <div className="flex flex-row justify-evenly">
        <div className="w-1/4 mt-0 md:mt-33">
          <div className="text-4xl mb-6">Players</div>
          <div>{content.playerDescription}</div>
        </div>

        {sections.map((section: any, idx: number) => (
          <div className="flex flex-col items-center gap-0" key={idx}>
            <img className="mb-10" src={section.photo.url} alt={section.sectionTitle} width={108} />
            <h2 className="mb-6 text-xl">{section.sectionTitle}</h2>
            {section.players.map((player: any, i: number) => (
              <p className="mb-0 leading-tight" key={i}>
                {player.name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
