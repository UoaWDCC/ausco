import Image from "next/image";

import { Media } from "@/payload-types";

type PlayersProps = {
  content?: {
    description?: string | null;
    sections?:
      | (
          | {
              blockType: "large-group";
              title: string;
              image: Media | string | null;
              players: string;
            }
          | {
              blockType: "small-group";
              title: string;
              image: Media | string | null;
              players: string;
            }
        )[]
      | null;
  };
};

const Players = ({ content }: PlayersProps) => {
  const largeGroups =
    content?.sections?.filter((section: any) => section.blockType === "large-group") ?? [];

  const smallColumns =
    content?.sections?.filter((section: any) => section.blockType === "small-group") ?? [];
  // Map 2 small groups into 1 column
  const smallGroups: (typeof smallColumns)[] = [];
  for (let i = 0; i < smallColumns.length; i += 2) {
    smallGroups.push(smallColumns.slice(i, i + 2));
  }

  // Map players into a list
  const listOfPlayers = (players: string) =>
    players
      .split(/[,;]+/)
      .map((player) => player.trim())
      .filter(Boolean);

  return (
    <section className="pb-18">
      <div className="bg-(--beige) w-full flex rounded-lg text-(--brown) gap-16 p-16">
        {/* LEFT: Title + Dscription */}
        <div className="text-left w-3/16 flex flex-col h-full justify-center">
          <h2 className="font-medium text-3xl m-0 shrink-0 pb-7">Players</h2>
          {content?.description && <p className="">{content.description}</p>}
        </div>

        {/* RIGHT: Players Columns */}
        <div className="flex-1 flex justify-between text-center">
          {/* Large Groups - Each gets its own column */}
          {largeGroups.map((group, index) => (
            <div key={index} className="w-40 flex flex-col gap-4">
              {typeof group.image === "object" && group.image?.url && (
                <Image
                  src={group.image.url}
                  alt={group.image.alt}
                  width={110}
                  height={110}
                  className="mx-auto"
                />
              )}

              <h3 className="text-lg font-semibold">{group.title}</h3>

              <ul className="space-y-3">
                {listOfPlayers(group.players).map((player, index) => (
                  <li key={index} className="text-sm leading-none wrap-break-word hyphens-auto">
                    {player}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Small Groups - 2 per column */}
          {smallGroups.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-10">
              {column.map((group, index) => (
                <div key={index} className="w-40 flex flex-col gap-4">
                  {typeof group.image === "object" && group.image?.url && (
                    <Image
                      src={group.image.url}
                      alt={group.image.alt}
                      width={110}
                      height={110}
                      className="mx-auto"
                      key={index}
                    />
                  )}

                  <h3 className="text-lg font-semibold">{group.title}</h3>

                  <ul className="space-y-3">
                    {listOfPlayers(group.players).map((player, index) => (
                      <li key={index} className="text-sm leading-none wrap-break-word hyphens-auto">
                        {player}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Players;
