import { getOurPeople } from "@/actions/getOurPeople";

const Players = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  const sections = content.sections as {
    sectionTitle: string;
    photo: { url: string };
    players: { name: string }[];
  }[];

  return (
    <div className="w-5/6 bg-[#EEE5D8] pt-20 pb-10">
      <div className="flex flex-row justify-evenly">
        <div className="w-1/4">
          <div>Players</div>
          <div>{content.playerDescription}</div>
        </div>

        {sections.map((section: any, idx: number) => (
          <div className="flex flex-col items-center gap-0" key={idx}>
            <h3>{section.sectionTitle}</h3>
            <img src={section.photo.url} alt={section.sectionTitle} width={108} />
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
