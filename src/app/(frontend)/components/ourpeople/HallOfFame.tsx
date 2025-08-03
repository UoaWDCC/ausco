import { getOurPeople } from "@/actions/getOurPeoplePage";
import { Media } from "@/payload-types";
import pastPresidentsFrame from "../../assets/pastPresidentsFrame.png";
import foundersFrame from "../../assets/fourndersFrame.png";

// Define cards structure
type CardStructure = {
  name: string;
  image?: string | Media;
  description: string;
};

const PastPresidentsCard = ({ name, image, description }: CardStructure) => {
  const imageUrl = typeof image === "string" ? image : image?.url;
  return (
    <div className="group border-2 flex flex-col justify-center bg-cover bg-center bg-no-repeat hover:bg-[#c6d5e8] w-[220px] h-[280px] p-6 lg:p-8 text-center text-[#042b50] space-y-5 lg:space-y-6 rounded-[50%] shadow-sm">
       
      {/* name */}
      <h2 className="text-md sm:text-l lg:text-xl font-serif hidden group-hover:block ">{name}</h2>

      {/* description */}
      <div className="flex flex-col gap-4 sm:gap-2 lg:gap-3 hidden group-hover:block">
        <p className="text-xs sm:xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FoundersCard = ({ name, description }: CardStructure) => {
  return (
    <div className="group flex flex-col justify-center bg-[#EEEADE] w-[200px] h-[260px] text-center text-[#042b50] space-y-5 lg:space-y-6 shadow-sm">

      {/* name */}
      <h2 className="text-md sm:text-l lg:text-xl font-serif hidden group-hover:block">{name}</h2>

      {/* description */}
      <div className="flex flex-col gap-4 sm:gap-2 lg:gap-3 hidden group-hover:block">
        <p className="text-xs sm:xs leading-relaxed hidden group-hover:block">{description}</p>
      </div>
    </div>
  );
};

const HallOfFame = async () => {
    const [content] = await Promise.all([getOurPeople()]);
    
    const pastPresidents = content.hallOfFame?.pastPresidents as CardStructure[];  
    const founders = content.hallOfFame?.founders as CardStructure[];
    return(
        <div className="bg-[#eee5d8] text-[#042b50] justify-center text-center items-center mx-auto py-9 px-4">
            {/* Title of section is Hall of Fame */}
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif"> Hall of Fame </h2>
            <hr className="border-t-[1.5px] border-[#042b50] mt-12"/>

            {/* Past Presidents */}
            <div>
                <h5 className="text-sm sm:text-sm md:text-md lg:text-l xl:text-xl py-9"> Past Presidents </h5>
                <div className="flex flex-wrap justify-center gap-6">
                    {pastPresidents.map(({ name, image, description }) => (
                        <PastPresidentsCard
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
                        <FoundersCard
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