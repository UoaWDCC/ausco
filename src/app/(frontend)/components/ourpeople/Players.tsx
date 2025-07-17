import { getOurPeople } from "@/actions/getOurPeople";

const Players = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  const sections = content.sections as {
    sectionTitle: string;
    photo: { url: string };
    players: { name: string }[];
  }[];

  const largeGroups = sections.filter((section: any) => section.blockType === "large-group");
  const smallGroups = sections.filter((section: any) => section.blockType === "small-group");
  const chunkedSmallGroups = [];
  for (let i = 0; i < smallGroups.length; i += 2) {
    chunkedSmallGroups.push(smallGroups.slice(i, i + 2));
  }

  return (
    <div className="w-5/6 rounded-xl bg-[var(--beige)] text-[var(--brown)] pt-20 pb-10">
      <div className="flex flex-row">
        <div className="w-1/4 mt-0 md:mt-33 ml-10">
          <div className="text-4xl mb-6">Players</div>
          <div>{content.playerDescription}</div>
        </div>

        <div className="flex flex-row justify-evenly w-3/4">
          {largeGroups.map((section: any, idx: number) => (
            <div className="flex flex-col items-center gap-0" key={idx}>
              <img
                className="mb-10"
                src={section.photo.url}
                alt={section.sectionTitle}
                width={108}
              />
              <h2 className="mb-6 text-2xl">{section.sectionTitle}</h2>
              {section.players.map((player: any, i: number) => (
                <p className="mb-0 leading-tight" key={i}>
                  {player.name}
                </p>
              ))}
            </div>
          ))}

          {chunkedSmallGroups.map((groupPair: any[], colIdx: number) => (
            <div key={`small-col-${colIdx}`} className="flex flex-col h-full">
              {groupPair.map((section, idx) => (
                <div
                  key={`small-${colIdx}-${idx}`}
                  className="flex flex-col items-center h-1/2 justify-center"
                >
                  <img
                    className="mb-6"
                    src={section.photo.url}
                    alt={section.sectionTitle}
                    width={108}
                  />
                  <h2 className="mb-4 text-xl">{section.sectionTitle}</h2>
                  {section.players.map((player: any, i: number) => (
                    <p className="mb-0 leading-tight" key={i}>
                      {player.name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
