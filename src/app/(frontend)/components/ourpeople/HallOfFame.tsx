import { getOurPeople } from "@/actions/getOurPeoplePage";
import { Media } from "@/payload-types";

//define contact structure
type FrameStructure = {
  name: string;
  image?: string | Media;
  description: string;
};

const PastPresidentsFrame = ({ name, description, }: FrameStructure) => {
  return (
    <div className="flex flex-col justify-center bg-[#c6d5e8] w-full sm:w-[25%] md:w-[16%] min-h-[200px] sm:min-h-[250px] lg:min-h-[340px] p-6 lg:p-8 text-center text-[#042b50] space-y-5 lg:space-y-6 rounded-[50%]">

      {/* name */}
      <h2 className="text-md sm:text-l lg:text-xl font-serif">{name}</h2>

      {/* description */}
      <div className="flex flex-col gap-4 sm:gap-2 lg:gap-3">
        <p className="text-xs sm:xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FoundersFrame = ({ name, description, }: FrameStructure) => {
  return (
    <div className="flex flex-col justify-center bg-[#EEEADE] w-full sm:w-[25%] md:w-[16%] min-h-[200px] sm:min-h-[250px] lg:min-h-[340px] p-6 lg:p-8 text-center text-[#042b50] space-y-5 lg:space-y-6">

      {/* name */}
      <h2 className="text-md sm:text-l lg:text-xl font-serif">{name}</h2>

      {/* description */}
      <div className="flex flex-col gap-4 sm:gap-2 lg:gap-3">
        <p className="text-xs sm:xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HallOfFame = async () => {
    const [content] = await Promise.all([getOurPeople()]);
    
    const pastPresidents = content.hallOfFame?.pastPresidents as FrameStructure[];  
    const founders = content.hallOfFame?.founders as FrameStructure[];
    return(
        <div className="bg-[#eee5d8] text-[#042b50] justify-center text-center items-center mx-auto py-9 px-4">
            {/* Title of section is Hall of Fame */}
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif"> Hall of Fame </h2>
            <hr className="border-t-[1.5px] border-[#042b50] mt-12"/>

            {/* Past Presidents */}
            <div>
                <h5 className="text-sm sm:text-sm md:text-md lg:text-l xl:text-xl py-9"> Past Presidents </h5>
                <div className="flex flex-row justify-center gap-6">
                    {pastPresidents.map(({ name, image, description }) => (
                        <PastPresidentsFrame
                            key={name}
                            name={name}
                            image={(image as Media)?.url || ""}
                            description={description}
                        />
                    ))}
                </div>
                
            </div>

            <hr className="border-t-[1.5px] border-[#042b50] mt-12"/>

            {/* Founders */}
            <div>
                <h5 className="text-sm sm:text-sm md:text-md lg:text-l xl:text-xl py-9"> Founders </h5>
                <div className="flex flex-row justify-center gap-6">
                    {founders.map(({ name, image, description }) => (
                        <FoundersFrame
                        key={name}
                        name={name}
                        image={(image as Media)?.url || ""}
                        description={description}
                        />
                    ))}
                </div>
            </div>


        </div>
    );
}

export default HallOfFame;