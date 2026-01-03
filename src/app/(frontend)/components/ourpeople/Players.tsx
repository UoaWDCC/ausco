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

  const totalColumns = Math.min(4, largeGroups.length + smallGroups.length);

  // Map players into a list
  const listOfPlayers = (players: string) =>
    players
      .split(/[,;]+/)
      .map((player) => player.trim())
      .filter(Boolean);

  return (
    <section className="flex w-full gap-2 bg-(--beige) px-6 py-6 text-(--brown) sm:gap-9 md:gap-16 md:rounded-lg md:px-16 md:py-16">
      {/* LEFT: Title + Dscription */}
      <div className="flex h-full w-auto flex-col md:w-3/16">
        {/* Title */}
        <h2 className="text-center text-xl font-medium sm:text-2xl md:hidden">
          P<br />L<br />A<br />Y<br />E<br />R<br />S
        </h2>
        <h2 className="hidden font-medium md:block md:text-left md:text-3xl">Players</h2>
        {content?.description && (
          <p className="hidden pt-2 text-left md:block">{content.description}</p>
        )}
      </div>

      {/* RIGHT: Players Columns */}
      <div
        className="grid w-full justify-items-center text-center"
        style={{ gridTemplateColumns: `repeat(${totalColumns}, minmax(0, 1fr))` }}
      >
        {/* Large Groups - Each gets its own column */}
        {largeGroups.map((group, index) => (
          <div key={index} className="flex w-full max-w-40 flex-col gap-3 sm:gap-4 md:gap-5">
            {typeof group.image === "object" && group.image?.url && (
              <Image
                src={group.image.url}
                alt={group.image.alt}
                width={group.image.width || 800}
                height={group.image.height || 800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mx-auto px-2.5 sm:px-2 md:px-1.5"
              />
            )}

            <h3 className="px-1 pt-2 text-sm font-bold sm:px-2 sm:pt-2.5 sm:text-base md:px-3 md:pt-3 md:text-lg">
              {group.title}
            </h3>

            <ul className="space-y-2 px-0.5 sm:px-1.5 md:space-y-3 md:px-3">
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
          <div key={columnIndex} className="flex w-full max-w-40 flex-col gap-6 sm:gap-8 md:gap-10">
            {column.map((group, index) => (
              <div key={index} className="flex w-full max-w-40 flex-col gap-3 sm:gap-4 md:gap-5">
                {typeof group.image === "object" && group.image?.url && (
                  <Image
                    src={group.image.url}
                    alt={group.image.alt}
                    width={group.image.width || 800}
                    height={group.image.height || 800}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="mx-auto px-2.5 sm:px-2 md:px-1.5"
                    key={index}
                  />
                )}

                <h3 className="px-1 pt-2 text-sm font-bold sm:px-2 sm:pt-2.5 sm:text-base md:px-3 md:pt-3 md:text-lg">
                  {group.title}
                </h3>

                <ul className="space-y-2 px-0.5 sm:px-1.5 md:space-y-3 md:px-3">
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
    </section>
  );
};

export default Players;
