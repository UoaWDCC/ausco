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

type TimelineItem = {
  year: number;
  title: string;
  image: Media | string | null;
  presidents: President;
  vicePresidents?: VicePresident;
  conductors?: Conductor;
  content: any;
};

type TimelineProps = {
  content?: TimelineItem[] | null;
};

const Timeline = ({ content }: TimelineProps) => {
  return (
    <section className="w-full flex flex-col text-left text-(--navy) ">
      <div className="flex flex-row pb-18">
        <div className="w-1/2 flex flex-col">
          {/* Text */}
          <div className="relative flex items-center h-14 gap-4 pb-6">
            <h2 className="font-medium text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
              {content?.[0].year}: {content?.[0].title}
            </h2>
            {/* Horizontal Line */}
            <div className="flex-1 relative">
              <div className="absolute right-0 top-0 h-0.5 w-full bg-(--navy) rounded-full" />
            </div>
          </div>

          <div className="pr-20 text-sm">
            <div className="flex flex-col space-y-4 w-1/2 pb-6">
              {/* President */}
              {content?.[0].presidents.role === "co-president" ? (
                <div>
                  <p className="font-semibold">PRESIDENTx</p>
                  <p>
                    <span className="italic">SEM 1:</span>
                    {content?.[0]?.presidents?.semesterName?.nameOne}
                  </p>
                  <p>
                    <span className="italic">SEM 2:</span>
                    {content?.[0]?.presidents?.semesterName?.nameOne}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-semibold">PRESIDENTx</p>
                  <p>{content?.[0].presidents.fullYearName}</p>
                </div>
              )}

              {/* Vice-President */}
              {content?.[0]?.vicePresidents?.exists &&
                (content?.[0]?.vicePresidents?.termLength === "fullYear" ? (
                  <div>
                    <p className="font-semibold">VICE-PRESIDENTx</p>
                    <p>{content?.[0]?.vicePresidents?.fullYearName}</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-semibold">VICE-PRESIDENTS</p>
                    <p>
                      <span className="italic">SEM 1:</span>
                      {content?.[0]?.vicePresidents?.semesterName?.nameOne}
                    </p>
                    <p>
                      <span className="italic">SEM 2:</span>
                      {content?.[0]?.vicePresidents?.semesterName?.nameOne}
                    </p>
                  </div>
                ))}

              {/* Conductor */}
              {content?.[0]?.conductors?.termLength === "fullYear" ? (
                <div>
                  <p className="font-semibold">CONDUCTOR</p>
                  <p>{content?.[0]?.conductors?.fullYearName}</p>
                </div>
              ) : (
                <div>
                  <p className="font-semibold">CONDUCTORS</p>
                  <p>
                    <span className="italic">SEM 1:</span>
                    {content?.[0]?.conductors?.semesterName?.nameOne}
                  </p>
                  <p>
                    <span className="italic">SEM 2:</span>
                    {content?.[0]?.conductors?.semesterName?.nameOne}
                  </p>
                </div>
              )}
            </div>
            {/* Content */}
            <RichText data={content?.[0]?.content} />
          </div>
        </div>

        <div className="w-1/2 pl-20 flex items-center justify-center">
          {typeof content?.[0]?.image === "object" && content?.[0]?.image?.url && (
            <Image
              src={content?.[0].image.url}
              alt={content?.[0].image.alt}
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

export default Timeline;
