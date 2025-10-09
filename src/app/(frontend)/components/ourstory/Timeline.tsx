import { getOurStory } from "@/actions/ourStoryActions";
import RoleSection from "./RoleSection";

const Timeline = async () => {
  const ourStoryData = await getOurStory();

  if (!ourStoryData?.timeline) return null;

  // Sort by year (ascending)
  const timeline = [...ourStoryData.timeline].sort((a, b) => {
    const yearA = parseInt(a.year, 10);
    const yearB = parseInt(b.year, 10);
    return yearA - yearB;
  });

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-8 hidden md:block">
        {/* Timeline */}
        <div>
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 1;

            return (
              <div
                key={index}
                className={`relative flex w-full h-full ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                {item.image && (
                  <div
                    className={`w-1/2 flex justify-center items-center pb-24 ${isLeft ? "pr-24" : "pl-24"}`}
                  >
                    {/* choose correct src whether item.image is a string or an object */}
                    {(() => {
                      const imageSrc =
                        typeof item.image === "string" ? item.image : item.image?.url;
                      if (!imageSrc) return null;

                      return (
                        <img
                          src={imageSrc}
                          alt={item.title || item.year}
                          className="shadow max-w-sm w-full h-auto object-cover"
                        />
                      );
                    })()}
                  </div>
                )}

                {/* vertical line */}
                <div className="w-0.5 bg-[var(--navy)] self-stretch"></div>

                {/* Text Content */}
                <div className="w-1/2">
                  <div className={`flex gap-2 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div
                      className={`h-0.5 bg-[var(--navy)] flex-grow ${isLeft ? "w-27" : "w-full"}`}
                    ></div>
                    <div
                      className={`text-[var(--navy)] text-2xl font-bold -mt-4 ${isLeft ? "w-full" : "w-auto flex-shrink-0"}`}
                    >
                      {item.year}: {item.title}
                    </div>
                  </div>
                  <div
                    className={`mt-4 space-y-1 text-sm text-[var(--navy)] ${isLeft ? "pl-24" : "pr-24"}`}
                  >
                    {item.dateInfo && (
                      <p className="text-sm font-bold text-[var(--navy)] mb-2">{item.dateInfo}</p>
                    )}
                    <RoleSection
                      title="Presidents"
                      people={item.presidents ?? []}
                      roleKey="president"
                    />
                    <RoleSection
                      title="Vice Presidents"
                      people={item.vicePresidents ?? []}
                      roleKey="vicePresident"
                    />
                    <RoleSection
                      title="Conductors"
                      people={item.conductors ?? []}
                      roleKey="conductor"
                    />
                  </div>
                  <div
                    className={`mt-4 pb-8 flex flex-col leading-5 text-[var(--navy)] ${isLeft ? "pl-24" : "pr-24"} gap-2`}
                  >
                    {item.description?.length > 0 &&
                      item.description.map((p: any, idx: number) => (
                        <p key={idx} className="text-sm">
                          {p.paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*NARROW TIMELINE*/}
      <div className="md:hidden relative flex flex-col items-center my-10 w-full">
        <div className="absolute left-[8.3%] w-0.5 bg-[var(--navy)] h-full"></div>
        {timeline.map((item, index) => {
          return (
            <div key={index} className="relative flex w-5/6 h-full">
              {/* year content */}
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div className="bg-[var(--navy)] w-3 h-3 rounded-full -ml-1.25 mb-2"></div>
                  <div className="text-[var(--navy)] text-2xl font-bold -mt-3 ml-2">
                    {item.year}: {item.title}
                  </div>
                </div>
                {/* Image */}
                <div className="ml-8 pb-8 pt-6">
                  {item.image && (
                    <div className="w-1/2 flex justify-center items-center">
                      {/* choose correct src whether item.image is a string or an object */}
                      {(() => {
                        const imageSrc =
                          typeof item.image === "string" ? item.image : item.image?.url;
                        if (!imageSrc) return null;

                        return (
                          <img
                            src={imageSrc}
                            alt={item.title || item.year}
                            className="shadow max-w-sm w-full h-auto object-cover"
                          />
                        );
                      })()}
                    </div>
                  )}
                  {/* Text Content */}
                  <div>
                    <div className="mt-4 space-y-1 text-sm text-[var(--navy)]">
                      {item.dateInfo && (
                        <p className="text-sm font-bold text-[var(--navy)] mb-2">{item.dateInfo}</p>
                      )}
                      <RoleSection
                        title="Presidents"
                        people={item.presidents ?? []}
                        roleKey="president"
                      />
                      <RoleSection
                        title="Vice Presidents"
                        people={item.vicePresidents ?? []}
                        roleKey="vicePresident"
                      />
                      <RoleSection
                        title="Conductors"
                        people={item.conductors ?? []}
                        roleKey="conductor"
                      />
                    </div>
                    <div className={`mt-4 pb-4 leading-5 text-[var(--navy)] space-y-8`}>
                      {item.description?.length > 0 &&
                        item.description.map((p: any, idx: number) => (
                          <p key={idx} className="text-sm">
                            {p.paragraph}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
