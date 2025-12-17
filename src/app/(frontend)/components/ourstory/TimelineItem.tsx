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
    text: any;
  };
};

type RoleProps = {
  title: string;
  fullYearNames: string[];
  semesterNames?: SemesterNames;
  termLength?: "fullYear" | "semester" | null;
  exists?: boolean;
};

const RoleBlock = ({
  title,
  fullYearNames,
  semesterNames,
  termLength,
  exists = true,
}: RoleProps) => {
  if (!exists) return null;

  if (termLength === "fullYear") {
    return (
      <div>
        <p className="font-semibold">{fullYearNames.length < 2 ? title : `${title}S`}</p>
        {fullYearNames.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="font-semibold">{title}</p>
      <p>
        <span className="italic">SEM 1:</span> {semesterNames?.nameOne}
      </p>
      <p>
        <span className="italic">SEM 2:</span> {semesterNames?.nameTwo}
      </p>
    </div>
  );
};

const TimelineItem = ({ content }: TimelineItemProps) => {
  if (!content) return null;

  // Destructure
  const { year, title, image, presidents, vicePresidents, conductors, text: richText } = content;

  const stringToList = (players: string) =>
    players
      .split(/[,;]+/) // split by comma or semicolon
      .map((player) => player.trim()) // remove extra spaces
      .filter(Boolean); // remove empty strings

  return (
    <section className="w-full flex flex-col text-left text-(--navy) ">
      <div className="flex flex-row pb-18">
        <div className="w-1/2 flex flex-col">
          {/* Text */}
          <div className="relative flex items-center h-14 gap-4 pb-6">
            <h2 className="font-medium text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
              {year}: {title}
            </h2>
            {/* Horizontal Line */}
            <div className="flex-1 relative">
              <div className="absolute right-0 top-0 h-0.5 w-full bg-(--navy) rounded-full" />
            </div>
          </div>

          <div className="pr-20 text-sm">
            <div className="flex flex-col space-y-4 w-1/2 pb-6">
              {/* President */}
              <RoleBlock
                title="PRESIDENT"
                fullYearNames={
                  presidents.termLength === "fullYear"
                    ? stringToList(presidents.fullYearName || "")
                    : []
                }
                semesterNames={presidents.semesterName}
                termLength={presidents.termLength}
              />

              {/* Vice-President */}
              <RoleBlock
                title="VICE-PRESIDENT"
                fullYearNames={
                  vicePresidents?.termLength === "fullYear"
                    ? stringToList(vicePresidents?.fullYearName || "")
                    : []
                }
                semesterNames={vicePresidents?.semesterName}
                termLength={vicePresidents?.termLength}
                exists={vicePresidents?.exists === "true"}
              />

              {/* Conductor */}
              <RoleBlock
                title="CONDUCTOR"
                fullYearNames={
                  conductors?.termLength === "fullYear"
                    ? stringToList(conductors?.fullYearName || "")
                    : []
                }
                semesterNames={conductors?.semesterName}
                termLength={conductors?.termLength}
              />
            </div>

            {/* Text Content */}
            <RichText data={richText} />
          </div>
        </div>

        <div className="w-1/2 pl-20 flex items-center justify-center">
          {typeof image === "object" && image?.url && (
            <Image
              src={image.url}
              alt={image.alt}
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
