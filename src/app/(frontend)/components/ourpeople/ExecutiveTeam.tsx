import { getOurPeople } from "@/actions/ourPeopleActions";
import Image from "next/image";

const ExecutiveTeam = async () => {
  // stores payload data, empty array if there are no execs
  const [content] = await Promise.all([getOurPeople()]);
  const execs = content.execs || [];

  return (
    <div className="w-full bg-[var(--cream)] pt-20 md:pt-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-0 text-[var(--navy)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Executive Team
          </h2>
          <p className="text-sm max-w-full md:max-w-xl font-light">{content.generalDescription}</p>
        </div>
        <div className="my-6 sm:my-10 md:my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
          {/*maps execs in array to grid, renders grid*/}
          {execs.map((exec, i) => {
            //handles both string and media cases for Image
            const imageUrl = typeof exec.image === "string" ? exec.image : exec.image?.url;
            return (
              <div key={i} className="flex flex-col items-start justify-between">
                <Image
                  src={imageUrl || ""}
                  alt={exec.name}
                  height={200}
                  width={200}
                  className="w-full object-cover mb-6"
                />
                {/*displaying exec info*/}
                <div className="text-xs text-[var(--navy)] w-full leading-5">
                  <div className="font-semibold text-[var(--navy)]">Name: {exec.name}</div>
                  <div>Role: {exec.role}</div>
                  <div>Degree: {exec.degree}</div>
                  <div>Fun Fact / Description: {exec.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="border-t-[1.5px] border-[var(--navy)]" />
      </div>
    </div>
  );
};

export default ExecutiveTeam;
