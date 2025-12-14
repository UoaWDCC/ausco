import { Media } from "@/payload-types";
import Image from "next/image";

type ExecutiveTeamProps = {
  content?: {
    description?: string | null;
    members?:
      | {
          name: string;
          role: string;
          degree: string;
          description: string;
          profilePicture: Media | string | null;
        }[]
      | null;
  };
};

const ExecutiveTeam = ({ content }: ExecutiveTeamProps) => {
  return (
    <section className="w-full pb-18 flex flex-col items-center text-(--navy)">
      <div className="flex justify-between items-center w-full pb-7">
        <h2 className="font-medium text-3xl m-0 shrink-0">Executive Team</h2>
        {content?.description && <p className="pl-36 flex-1">{content.description}</p>}
      </div>

      {/* Executive Team Members */}
      <div className="mt-6 pb-18 grid grid-cols-4 gap-8 justify-items-center">
        {content?.members?.map((member, index) => {
          return (
            <div key={index} className="flex flex-col items-start w-full">
              {typeof member.profilePicture === "object" && member.profilePicture?.url && (
                <Image
                  src={member.profilePicture.url}
                  alt={`Profile Picture of ${member.name}`}
                  height={400}
                  width={400}
                  className="w-full object-cover mb-6 rounded-md"
                />
              )}

              <div className="flex flex-col text-sm w-full gap-1">
                <p className="font-semibold">{member.name}</p>
                <p>Role: {member.role}</p>
                <p>Degree: {member.degree}</p>
                <p>Fun Fact: {member.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-(--navy) mb-18" style={{ height: "1px" }} />
    </section>
  );
};

export default ExecutiveTeam;
