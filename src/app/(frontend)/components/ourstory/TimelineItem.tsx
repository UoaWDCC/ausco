import { Media } from "@/payload-types";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";

// TODO: sort all imports
type SemesterNames = {
  nameOne: string;
  nameTwo: string;
};

type President = {
  role: "president" | "co-president";
  termLength: "fullYear" | "semester";
  fullYearName?: string | null;
  semesterName?: SemesterNames;
};

type VicePresident = {
  exists: "true" | "false";
  termLength?: "fullYear" | "semester" | null;
  fullYearName?: string | null;
  semesterName?: SemesterNames;
};

type Conductor = {
  termLength: "fullYear" | "semester";
  fullYearName?: string | null;
  semesterName?: SemesterNames;
};

type TimelineItemProps = {
  content?: {
    year: number;
    title: string;
    image: Media | string | null;
    presidents: President;
    vicePresidents?: VicePresident;
    conductors?: Conductor;
    content: any;
  };
};

const TimelineItem = ({ content }: TimelineItemProps) => {
  const stringToList = (players: string) =>
    players
      .split(/[,;]+/) // split by comma or semicolon
      .map((player) => player.trim()) // remove extra spaces
      .filter(Boolean); // remove empty strings

  const presidents =
    content?.presidents.termLength === "fullYear"
      ? stringToList(content?.presidents.fullYearName || "")
      : [];

  const vicePresidents =
    content?.vicePresidents?.termLength === "fullYear"
      ? stringToList(content?.vicePresidents?.fullYearName || "")
      : [];

  const conductors =
    content?.conductors?.termLength === "fullYear"
      ? stringToList(content?.conductors?.fullYearName || "")
      : [];

  return (
    <section className="w-full flex flex-col text-left text-(--navy) ">
      <div className="flex flex-row pb-18">
        <div className="w-1/2 flex flex-col">
          {/* Text */}
          <div className="relative flex items-center h-14 gap-4 pb-6">
            <h2 className="font-medium text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
              {content?.year}: {content?.title}
            </h2>
            {/* Horizontal Line */}
            <div className="flex-1 relative">
              <div className="absolute right-0 top-0 h-0.5 w-full bg-(--navy) rounded-full" />
            </div>
          </div>

          <div className="pr-20 text-sm">
            <div className="flex flex-col space-y-4 w-1/2 pb-6">
              {/* President */}
              {content?.presidents.termLength === "fullYear" ? (
                <div>
                  <p className="font-semibold">
                    {presidents.length < 2 ? "PRESIDENT" : "PRESIDENTS"}
                  </p>
                  {presidents.map((name, index) => (
                    <p key={index}>{name}</p>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="font-semibold">PRESIDENTx</p>
                  <p>
                    <span className="italic">SEM 1:</span>
                    {content?.presidents?.semesterName?.nameOne}
                  </p>
                  <p>
                    <span className="italic">SEM 2:</span>
                    {content?.presidents?.semesterName?.nameOne}
                  </p>
                </div>
              )}

              {/* Vice-President */}
              {content?.vicePresidents?.exists &&
                (content?.vicePresidents?.termLength === "fullYear" ? (
                  <div>
                    <p className="font-semibold">
                      {vicePresidents.length < 2 ? "VICE-PRESIDENT" : "VICE-PRESIDENTS"}
                    </p>
                    {vicePresidents.map((name, index) => (
                      <p key={index}>{name}</p>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="font-semibold">VICE-PRESIDENTS</p>
                    <p>
                      <span className="italic">SEM 1:</span>
                      {content?.vicePresidents?.semesterName?.nameOne}
                    </p>
                    <p>
                      <span className="italic">SEM 2:</span>
                      {content?.vicePresidents?.semesterName?.nameOne}
                    </p>
                  </div>
                ))}

              {/* Conductor */}
              {content?.conductors?.termLength === "fullYear" ? (
                <div>
                  <p className="font-semibold">
                    {conductors.length < 2 ? "CONDUCTOR" : "CONDUCTORS"}
                  </p>
                  {conductors.map((name, index) => (
                    <p key={index}>{name}</p>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="font-semibold">CONDUCTORS</p>
                  <p>
                    <span className="italic">SEM 1:</span>
                    {content?.conductors?.semesterName?.nameOne}
                  </p>
                  <p>
                    <span className="italic">SEM 2:</span>
                    {content?.conductors?.semesterName?.nameOne}
                  </p>
                </div>
              )}
            </div>
            {/* Content */}
            <RichText data={content?.content} />
          </div>
        </div>

        <div className="w-1/2 pl-20 flex items-center justify-center">
          {typeof content?.image === "object" && content?.image?.url && (
            <Image
              src={content?.image.url}
              alt={content?.image.alt}
              width={500}
              height={500}
              className="rounded-lg max-w-full max-h-full object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineItem;
