import { getOurStory } from "@/actions/ourStoryActions";
import RoleSection from "./RoleSection";

type MeetingRecord = {
  title: string;
  content: string;
};

type MeetingMinutes = {
  meetingRecords?: MeetingRecord[];
  establishmentText?: string;
  establishmentQuote?: string;
};

function extractMeetingInfo(meetingMinutes?: MeetingMinutes[] | null) {
  if (!meetingMinutes) {
    return {
      allMeetingRecords: [] as MeetingRecord[],
      allEstablishmentTexts: [] as string[],
      allEstablishmentQuotes: [] as string[],
    };
  }

  const allMeetingRecords = meetingMinutes.flatMap((m) => m.meetingRecords ?? []);
  const allEstablishmentTexts = meetingMinutes
    .map((m) => m.establishmentText)
    .filter((t): t is string => Boolean(t));
  const allEstablishmentQuotes = meetingMinutes
    .map((m) => m.establishmentQuote)
    .filter((q): q is string => Boolean(q));

  return {
    allMeetingRecords,
    allEstablishmentTexts,
    allEstablishmentQuotes,
  };
}

const Timeline = async () => {
  const ourStoryData = await getOurStory();

  if (!ourStoryData?.timeline) return null;

  const timeline = [...ourStoryData.timeline].sort(
    (a, b) => parseInt(a.year, 10) - parseInt(b.year, 10),
  );

  return (
    <div>
      {/* DESKTOP TIMELINE */}
      <div className="max-w-5xl mx-auto px-4 py-8 hidden md:block">
        <div>
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 1;

            const { allMeetingRecords, allEstablishmentTexts, allEstablishmentQuotes } =
              extractMeetingInfo(item.meetingMinutes);

            return (
              <div
                key={index}
                className={`relative flex w-full h-full ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* IMAGE */}
                {item.image && (
                  <div
                    className={`w-1/2 flex justify-center items-center pb-24 ${
                      isLeft ? "pr-24" : "pl-24"
                    }`}
                  >
                    <img
                      src={
                        typeof item.image === "string" ? item.image : (item.image?.url ?? undefined)
                      }
                      alt={item.title || item.year}
                      className="shadow max-w-sm w-full h-auto object-cover"
                    />
                  </div>
                )}

                {/* VERTICAL LINE */}
                <div className="w-0.5 bg-[var(--navy)] self-stretch"></div>

                {/* TEXT CONTENT */}
                <div className="w-1/2">
                  <div className={`flex gap-2 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`h-0.5 bg-[var(--navy)] flex-grow`}></div>
                    <div className="text-[var(--navy)] text-2xl font-bold -mt-4">
                      {item.year}: {item.title}
                    </div>
                  </div>

                  <div
                    className={`mt-4 space-y-1 flex flex-col text-sm text-[var(--navy)] ${isLeft ? "pl-24" : "pr-24"}`}
                  >
                    {item.dateInfo && <p className="font-bold mb-2 text-[18px]">{item.dateInfo}</p>}
                    <div className="flex flex-row gap-4">
                      <div>
                        {allMeetingRecords.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {allMeetingRecords.map((rec, i) => (
                              <div key={i}>
                                <p className="font-bold">{rec.title}</p>
                                <p className="whitespace-pre-line">{rec.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="text-[18px]">
                        {allEstablishmentTexts.length > 0 && (
                          <div className="mt-4 space-y-2 font-semibold italic">
                            {allEstablishmentTexts.map((text, i) => (
                              <p key={i}>{text}</p>
                            ))}
                          </div>
                        )}

                        {allEstablishmentQuotes.length > 0 && (
                          <div className="italic">
                            {allEstablishmentQuotes.map((quote, i) => (
                              <blockquote key={i}>“{quote}”</blockquote>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* EXEC ROLES */}
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

                  {/* YEAR DESCRIPTION PARAGRAPHS */}
                  <div
                    className={`mt-4 pb-8 flex flex-col gap-2 leading-5 text-[var(--navy)] ${isLeft ? "pl-24" : "pr-24"}`}
                  >
                    {item.description?.map((p: any, idx: number) => (
                      <p key={idx}>{p.paragraph}</p>
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
                  <div className="text-[var(--navy)] text-lg font-bold -mt-2 ml-2">
                    {item.year}: {item.title}
                  </div>
                </div>
                {/* Image */}
                <div className="ml-6 pb-8 pt-6">
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
                    <div className="mt-4 space-y-1 text-xs text-[var(--navy)]">
                      {item.dateInfo && (
                        <p className="text-sm font-bold text-[var(--navy)] mb-2">{item.dateInfo}</p>
                      )}
                      {(() => {
                        const { allMeetingRecords, allEstablishmentTexts, allEstablishmentQuotes } =
                          extractMeetingInfo(item.meetingMinutes);

                        return (
                          <div className="flex flex-row gap-2">
                            <div>
                              {allMeetingRecords.length > 0 && (
                                <div className="mt-4 space-y-2">
                                  {allMeetingRecords.map((rec, i) => (
                                    <div key={i}>
                                      <p className="font-semibold">{rec.title}</p>
                                      <p className="whitespace-pre-line">{rec.content}</p>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="text-[14px]">
                              {allEstablishmentTexts.length > 0 && (
                                <div className="mt-4 space-y-2 font-semibold">
                                  {allEstablishmentTexts.map((text, i) => (
                                    <p key={i}>{text}</p>
                                  ))}
                                </div>
                              )}

                              {allEstablishmentQuotes.length > 0 && (
                                <div className="space-y-2 italic">
                                  {allEstablishmentQuotes.map((quote, i) => (
                                    <blockquote key={i}>“{quote}”</blockquote>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })()}
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
                          <p key={idx} className="text-xs">
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
