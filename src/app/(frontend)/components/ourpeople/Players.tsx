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
    <section className="pb-8 sm:pb-12 md:pb-16">
      <div className="flex w-full gap-2 bg-(--beige) px-6 py-6 text-(--brown) sm:gap-9 md:gap-16 md:rounded-lg md:px-16 md:py-16">
        {/* LEFT: Title + Dscription */}
        <div className="flex h-full w-auto flex-col md:w-3/16">
          {/* Title */}
          <h2 className="text-center text-xl sm:text-2xl md:hidden">
            P<br />L<br />A<br />Y<br />E<br />R<br />S
          </h2>
          <h2 className="hidden font-medium md:block md:text-left md:text-3xl">Players</h2>
          {content?.description && (
            <p className="hidden pt-2 text-left md:block">{content.description}</p>
          )}
        </div>

        {/* RIGHT: Players Columns */}
        <div className="grid w-full grid-cols-4 justify-items-center text-center">
          {/* Large Groups - Each gets its own column */}
          {largeGroups.map((group, index) => (
            <div key={index} className="flex w-20 flex-col gap-2 sm:w-30 sm:gap-3 md:w-40 md:gap-4">
              {typeof group.image === "object" && group.image?.url && (
                <Image
                  src={group.image.url}
                  alt={group.image.alt}
                  width={group.image.width || 800}
                  height={group.image.height || 800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="mx-auto"
                />
              )}

              <h3 className="text-base font-bold md:text-lg">{group.title}</h3>

              <ul className="space-y-2 md:space-y-3">
                {listOfPlayers(group.players).map((player, index) => (
                  <li
                    key={index}
                    className="text-xs leading-none wrap-break-word hyphens-auto md:text-sm"
                  >
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
                <div key={index} className="flex w-40 flex-col gap-4">
                  {typeof group.image === "object" && group.image?.url && (
                    <Image
                      src={group.image.url}
                      alt={group.image.alt}
                      width={group.image.width || 800}
                      height={group.image.height || 800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="mx-auto"
                      key={index}
                    />
                  )}

                  <h3 className="text-base font-bold md:text-lg">{group.title}</h3>

                  <ul className="space-y-2 md:space-y-3">
                    {listOfPlayers(group.players).map((player, index) => (
                      <li
                        key={index}
                        className="text-xs leading-none wrap-break-word hyphens-auto md:text-sm"
                      >
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
