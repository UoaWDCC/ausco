import Image from "next/image";

import { RichText } from "@payloadcms/richtext-lexical/react";
import { Media } from "@/payload-types";

import { stringToList, listToReadableString } from "@/app/(frontend)/util/list";

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
  isLast: boolean;
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

const TimelineItem = ({ content, flipLayout, isLast }: TimelineItemProps) => {
  if (!content) return null;

  // Destructure
  const { year, title, image, presidents, vicePresidents, conductors, text: richText } = content;

  return (
    <section className="relative flex w-full flex-col pb-8 pl-4 text-left text-(--navy) sm:pb-12 sm:pl-0 md:pb-16">
      {/* Vertical line - only on sm screens */}
      {!isLast && (
        <div className="absolute top-0 bottom-0 left-0 w-0.5 -translate-x-1/2 bg-(--navy) sm:hidden" />
      )}

      {/* Title */}
      <div className="flex w-full">
        <div
          className={`flex h-auto min-h-14 w-full min-w-0 items-center gap-4 pb-6 sm:w-1/2 ${flipLayout ? "sm:ml-auto sm:flex-row-reverse sm:justify-end" : ""}`}
        >
          <h2 className="relative text-xl leading-normal font-medium md:text-2xl">
            {/* Dot - Small screens only */}
            <span className="absolute top-0 -left-4 flex h-lh -translate-x-1/2 items-center sm:hidden">
              <span className="h-2 w-2 rounded-full bg-(--navy)" />
            </span>
            {/* Short Vertical Line - Small screens and last timeline item only */}
            <div className="absolute -top-px -left-4 h-[0.5lh] w-0.5 -translate-x-1/2 bg-(--navy) sm:hidden" />
            {year}: {title}
          </h2>

          {/* Horizontal Line - Small screen and above */}
          <div
            className={`hidden h-0.5 sm:block ${
              flipLayout ? "sm:w-6 md:w-16" : "flex-1 sm:min-w-12 md:min-w-16"
            } rounded-full bg-(--navy)`}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex min-w-0 flex-col sm:flex-row ${flipLayout ? "sm:flex-row-reverse" : ""}`}
      >
        <div className="order-2 flex w-full min-w-0 flex-col sm:order-1 sm:w-1/2">
          {/* Text */}
          <div
            className={`px-0 text-sm ${flipLayout ? "sm:pr-0 sm:pl-10 md:pr-0 md:pl-20" : "sm:pr-10 sm:pl-0 md:pr-20 md:pl-0"}`}
          >
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
          className={`order-1 flex w-full min-w-0 items-center justify-center px-0 pb-6 sm:order-2 sm:-mt-7 sm:w-1/2 sm:pb-0 ${flipLayout ? "sm:pr-10 sm:pl-0 md:pr-20 md:pl-0" : "sm:pr-0 sm:pl-10 md:pr-0 md:pl-20"}`}
        >
          {typeof image === "object" && image?.url && (
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width || 800}
              height={image.height || 600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full rounded-lg object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineItem;
