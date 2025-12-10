import { getOurPeople } from "@/actions/ourPeopleActions";

const Players = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  const sections = content.sections as {
    sectionTitle: string;
    photo: { url: string };
    players: { name: string }[];
  }[];

  const largeGroups = sections.filter((section: any) => section.blockType === "large-group");
  const smallGroups = sections.filter((section: any) => section.blockType === "small-group");
  const chunkedSmallGroups = []; // this is necessary to map the small groups into columns of length 2.
  for (let i = 0; i < smallGroups.length; i += 2) {
    chunkedSmallGroups.push(smallGroups.slice(i, i + 2));
  }

  return (
    <div className="bg-[var(--cream)] w-full flex flex-col items-center">
      <div className="w-5/6 rounded-xl bg-[var(--beige)] text-[var(--brown)] pt-20 pb-10 mt-10 mb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-1/4 mt-0 mb-10 lg:mb-0 lg:mt-33 lg:ml-10">
            <div className="font-heading text-center lg:text-left text-4xl mb-6">Players</div>
            <div className="text-center lg:text-left">{content.playerDescription}</div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-row items-start justify-evenly w-5/6 lg:w-3/4 gap-y-10">
            {largeGroups.map((section: any, idx: number) => (
              <div className="flex w-[48%] md:w-auto flex-col items-center gap-0" key={idx}>
                <img
                  className="mb-10"
                  src={section.photo.url}
                  alt={section.sectionTitle}
                  width={108}
                />
                <h2 className="mb-6 font-heading text-2xl">{section.sectionTitle}</h2>
                {section.players.map((player: any, i: number) => (
                  <p className="mb-0 leading-tight" key={i}>
                    {player.name}
                  </p>
                ))}
              </div>
            ))}

            {chunkedSmallGroups.map(
              (
                groupPair: any[],
                colIdx: number, // group pair is one set of 2 (ie one column)
              ) => (
                <div
                  key={`small-col-${colIdx}`}
                  className="flex flex-col w-[48%] md:w-auto h-full  gap-10 md:gap-16"
                >
                  {groupPair.map((section, idx) => (
                    <div
                      key={`small-${colIdx}-${idx}`}
                      className="flex flex-col items-center h-1/2"
                    >
                      <img
                        className="mb-10"
                        src={section.photo.url}
                        alt={section.sectionTitle}
                        width={108}
                      />
                      <h2 className="mb-6 font-heading text-2xl">{section.sectionTitle}</h2>
                      {section.players.map((player: any, i: number) => (
                        <p className="mb-0 leading-tight" key={i}>
                          {player.name}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
