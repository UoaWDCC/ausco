import { getOurPeople } from "@/actions/getOurPeople";
const ExecutiveTeam = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  return (
    <div className="w-full bg-[#F6F4EC]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-8">
        <div className="flex items-end justify-between gap-4 md:gap-0 text-[var(--navy)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Executive Team
          </h2>
          {/*note for del: add desc text to payload*/}
          <p className="text-xs  max-w-full md:max-w-lg font-light">{content.generalDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTeam;
