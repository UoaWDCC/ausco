import Image from "next/image";

import { Media } from "@/payload-types";

type ExecutiveTeamProps = {
  content?: {
    description?: string | null;
    members?:
      | {
          name: string;
          role: string;
          degree: string;
          description: string;
          image: Media | string | null;
        }[]
      | null;
  };
};

const ExecutiveTeam = ({ content }: ExecutiveTeamProps) => {
  return (
    <section className="flex w-full flex-col items-center pb-8 text-(--navy) sm:pb-12 md:pb-16">
      <div className="flex w-full items-center justify-between pb-4 md:pb-7">
        <h2 className="shrink-0 text-xl font-medium sm:text-2xl md:text-3xl">Executive Team</h2>
        {content?.description && (
          <p className="hidden flex-1 md:block md:pl-36">{content.description}</p>
        )}
      </div>

      {/* Executive Team Members */}
      <div className="grid grid-cols-3 justify-items-center gap-2 pb-8 sm:gap-5 sm:pb-12 md:grid-cols-4 md:gap-8 md:pb-16">
        {content?.members?.map((member, index) => {
          return (
            <div key={index} className="flex w-full flex-col items-start">
              <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-md sm:mb-6">
                {typeof member.image === "object" && member.image?.url && (
                  <Image
                    src={member.image.url}
                    alt={`Profile Picture of ${member.name}`}
                    fill
                    className="object-cover object-center"
                  />
                )}
              </div>

              <div className="flex w-full flex-col gap-1.5 text-sm">
                <p className="font-bold wrap-break-word">{member.name}</p>
                <p className="text-xs sm:text-sm">Role: {member.role}</p>
                <p className="text-xs sm:text-sm">Degree: {member.degree}</p>
                <p className="text-xs sm:text-sm">Fun Fact: {member.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-(--navy)" style={{ height: "1px" }} />
    </section>
  );
};

export default ExecutiveTeam;
