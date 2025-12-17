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

export type VicePresident = {
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
  image: string | Media | null;
  presidents: President;
  vicePresidents?: VicePresident;
  conductors?: Conductor;
  content: any;
};

type TimelineProps = {
  content?: TimelineItem[] | null;
};

const Timeline = ({ content }: TimelineProps) => {
  return <section></section>;
};

export default Timeline;
