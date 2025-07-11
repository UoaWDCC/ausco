import { getOurPeople } from "@/actions/getOurPeople";
import Image from "next/image";

const ExecutiveTeam = async () => {
  // stores payload data, empty array if there are no execs
  const [content] = await Promise.all([getOurPeople()]);
  const execs = content.execs || [];

  return (
    <div className="w-full bg-[#F6F4EC]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-8">
        <div className="flex items-end justify-between gap-4 md:gap-0 text-[var(--navy)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Executive Team
          </h2>
          <p className="text-xs max-w-full md:max-w-lg font-light">{content.generalDescription}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/*maps execs in array to grid, renders grid*/}
          {execs.map((exec, i) => {
            //handles both string and media cases for Image
            const imageUrl = typeof exec.image === "string" ? exec.image : exec.image?.url;
            return (
              <div key={i} className="flex max-w-[200px] flex-col items-center">
                <Image
                  src={imageUrl || ""}
                  alt={exec.name}
                  height={200}
                  width={200}
                  className="max-h-[200px] object-cover mb-2"
                  priority
                />
                {/*displaying exec info*/}
                <div className="text-xs text-[var(--navy)]">
                  <div className="font-semibold text-[var(--navy)]">Name: {exec.name}</div>
                  <div>Role: {exec.role}</div>
                  <div>Degree: {exec.degree}</div>
                  <div>Fun Fact / Description: {exec.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTeam;
