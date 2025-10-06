import { getOurStory } from "@/actions/ourStoryActions";

const Timeline = async () => {
  const ourStoryData = await getOurStory();

  if (!ourStoryData?.timeline) return null;

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-8 hidden md:block">
        {/* Timeline */}
        <div>
          {ourStoryData.timeline.map((item, index) => {
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
                          className="rounded-lg shadow max-w-sm w-full h-auto object-cover"
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
                    {item.presidents?.length ? (
                      <p>
                        <strong>Presidents:</strong>{" "}
                        {item.presidents?.map((p) => p.president).join(", ")}
                      </p>
                    ) : null}

                    {item.vicePresidents?.length ? (
                      <p>
                        <strong>Vice Presidents:</strong>{" "}
                        {item.vicePresidents?.map((vp) => vp.vicePresident).join(", ")}
                      </p>
                    ) : null}

                    {item.conductors?.length ? (
                      <p>
                        <strong>Conductors:</strong>{" "}
                        {item.conductors?.map((c) => c.conductor).join(", ")}
                      </p>
                    ) : null}
                  </div>
                  <p className={`mt-4 space-y-1 text-[var(--navy)] ${isLeft ? "pl-24" : "pr-24"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*NARROW TIMELINE*/}
      <div className="md:hidden flex flex-col justify-center items-center mt-10">
        {ourStoryData.timeline.map((item, index) => {
          return (
            <div key={index} className="relative flex w-5/6 h-full">
              {/* vertical line */}
              <div className="w-0.5 bg-[var(--navy)] self-stretch"></div>

              {/* year content */}
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div className="h-0.5 bg-[var(--navy)] flex-grow"></div>
                  <div className="text-[var(--navy)] text-2xl font-bold -mt-4">
                    {item.year}: {item.title}
                  </div>
                </div>
                {/* Image */}
                <div className="ml-8 py-8">
                  {item.image && (
                    <div className="w-1/2 flex justify-center items-center pb-24">
                      {/* choose correct src whether item.image is a string or an object */}
                      {(() => {
                        const imageSrc =
                          typeof item.image === "string" ? item.image : item.image?.url;
                        if (!imageSrc) return null;

                        return (
                          <img
                            src={imageSrc}
                            alt={item.title || item.year}
                            className="rounded-lg shadow max-w-sm w-full h-auto object-cover"
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
                      {item.presidents?.length ? (
                        <p>
                          <strong>Presidents:</strong>{" "}
                          {item.presidents?.map((p) => p.president).join(", ")}
                        </p>
                      ) : null}

                      {item.vicePresidents?.length ? (
                        <p>
                          <strong>Vice Presidents:</strong>{" "}
                          {item.vicePresidents?.map((vp) => vp.vicePresident).join(", ")}
                        </p>
                      ) : null}

                      {item.conductors?.length ? (
                        <p>
                          <strong>Conductors:</strong>{" "}
                          {item.conductors?.map((c) => c.conductor).join(", ")}
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 space-y-1 text-[var(--navy)]">{item.description}</p>
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
