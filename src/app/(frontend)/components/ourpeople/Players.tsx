import { Media } from "@/payload-types";
import Image from "next/image";

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
    <section className="pb-16">
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

// return (
//     <div className="bg-[var(--cream)] w-full flex flex-col items-center">
//       <div className="w-5/6 rounded-xl bg-[var(--beige)] text-[var(--brown)] pt-20 pb-10 mt-10 mb-20">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start">
//           <div className="w-1/4 mt-0 mb-10 lg:mb-0 lg:mt-33 lg:ml-10">
//             <div className="text-center lg:text-left text-4xl mb-6">Players</div>
//             <div className="text-center lg:text-left">{content.playerDescription}</div>
//           </div>

//           <div className="flex flex-wrap md:flex-nowrap flex-row items-start justify-evenly w-5/6 lg:w-3/4 gap-y-10">
//             {largeGroups.map((section: any, idx: number) => (
//               <div className="flex w-[48%] md:w-auto flex-col items-center gap-0" key={idx}>
//                 <img
//                   className="mb-10"
//                   src={section.photo.url}
//                   alt={section.sectionTitle}
//                   width={108}
//                 />
//                 <h2 className="mb-6 text-2xl">{section.sectionTitle}</h2>
//                 {section.players.map((player: any, i: number) => (
//                   <p className="mb-0 leading-tight" key={i}>
//                     {player.name}
//                   </p>
//                 ))}
//               </div>
//             ))}

//             {chunkedSmallGroups.map(
//               (
//                 groupPair: any[],
//                 colIdx: number, // group pair is one set of 2 (ie one column)
//               ) => (
//                 <div
//                   key={`small-col-${colIdx}`}
//                   className="flex flex-col w-[48%] md:w-auto h-full  gap-10 md:gap-16"
//                 >
//                   {groupPair.map((section, idx) => (
//                     <div
//                       key={`small-${colIdx}-${idx}`}
//                       className="flex flex-col items-center h-1/2"
//                     >
//                       <img
//                         className="mb-10"
//                         src={section.photo.url}
//                         alt={section.sectionTitle}
//                         width={108}
//                       />
//                       <h2 className="mb-6 text-2xl">{section.sectionTitle}</h2>
//                       {section.players.map((player: any, i: number) => (
//                         <p className="mb-0 leading-tight" key={i}>
//                           {player.name}
//                         </p>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               ),
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
