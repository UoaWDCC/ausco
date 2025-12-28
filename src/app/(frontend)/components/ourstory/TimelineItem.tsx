import { RichText } from "@payloadcms/richtext-lexical/react";
import { Media } from "@/payload-types";

import Image from "next/image";

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
  flipLayout: boolean;
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
        <span className="italic">SEM 1:</span>{" "}
        {semesterNames && listToReadableString(semesterNames?.nameOne)}
      </p>
      <p>
        <span className="italic">SEM 2:</span>{" "}
        {semesterNames && listToReadableString(semesterNames?.nameTwo)}
      </p>
    </div>
  );
};

// TODO: abstract into global util function
const stringToList = (members: string) =>
  members
    .split(/[,;]+/) // split by comma or semicolon
    .map((member) => member.trim()) // remove extra spaces
    .filter(Boolean); // remove empty strings

// Converts a comma- or semicolon-separated list of names into a human-readable string using “&” before the final name
const listToReadableString = (members: string) => {
  const list = stringToList(members);

  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} & ${list[1]}`;

  return `${list.slice(0, -1).join(", ")} & ${list.at(-1)}`;
};

const TimelineItem = ({ content, flipLayout }: TimelineItemProps) => {
  if (!content) return null;

  // Destructure
  const { year, title, image, presidents, vicePresidents, conductors, text: richText } = content;

  return (
    <section className="relative w-full flex flex-col text-left text-(--navy) pb-8 sm:pb-12 md:pb-16">
      {/* Title */}
      <div className="flex w-full">
        <div
          className={`flex items-center min-w-0 w-full sm:w-1/2 h-auto min-h-14 gap-4 pb-6 ${flipLayout ? "sm:ml-auto sm:flex-row-reverse sm:justify-end" : ""}`}
        >
          {/* Dot - Small screens only */}
          <div className="absolute sm:hidden left-0 h-1.5 w-1.5 bg-(--navy) rounded-full -translate-x-1/2 -ml-4" />
          <h2 className="font-medium text-xl md:text-2xl overflow-hidden sm:whitespace-nowrap sm:text-ellipsis sm:shrink">
            {year}: {title}
          </h2>
          {/* Horizontal Line - Small screen and above */}
          <div
            className={`hidden sm:block h-0.5 ${
              flipLayout ? "w-16" : "flex-1 min-w-16"
            } bg-(--navy) rounded-full`}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col sm:flex-row min-w-0 ${flipLayout ? "sm:flex-row-reverse" : ""}`}
      >
        <div className="flex flex-col order-2 sm:order-1 w-full sm:w-1/2 min-w-0">
          {/* Text */}
          <div className={`text-sm px-0 ${flipLayout ? "sm:pl-20 sm:pr-0" : "sm:pr-20 sm:pl-0"}`}>
            <div className="flex flex-col space-y-4 pb-6">
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

        <div
          className={`flex order-1 sm:order-2 min-w-0 w-full sm:w-1/2 px-0 items-center justify-center pb-6 sm:pb-0 sm:-mt-7 ${flipLayout ? "sm:pr-20 sm:pl-0" : "sm:pl-20 sm:pr-0"}`}
        >
          {typeof image === "object" && image?.url && (
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width || 800}
              height={image.height || 600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default TimelineItem;
