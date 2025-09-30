import { getOurPeople } from "@/actions/getOurPeople";
import Image from "next/image";

//define frame structure
type FrameStructure = {
  name: string;
  description: string;
  image?: string | null;
};

// past presidents frame feature component
const PastPresidentsFrame = ({ name, description, image }: FrameStructure) => {
    return (
        <div className="text-center justify-center items-center">
                {image && typeof image !== "string" ? (
                    <Image 
                        src={image ?? ""}
                        alt={name ?? "Profile Picture"}
                        width={400}
                        height={300}
                        className="hover:opacity-0 transition-opacity duration-500"
                    />
                ) : null}
            <div className="bg-[var(--blue)] flex flex-col justify-center items-center w-[200px] h-[300px] rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-l md:text-xl">
                    {name}
                </h3>
                <p className="text-m md:text-l">
                    {description}
                </p>
            </div>
        </div>
    )
}

// founders frame feature component
const FoundersFrame = ({ name, description, image }: FrameStructure) => {
    return (
        <div className="text-center justify-center items-center">
                {image && typeof image !== "string" ? (
                    <Image 
                        src={image ?? ""}
                        alt={name ?? "Profile Picture"}
                        width={400}
                        height={300}
                        className="hover:opacity-0 transition-opacity duration-500"
                    />
                ) : null}
            <div className="bg-[var(--blue)] flex flex-col justify-center items-center w-[200px] h-[300px] opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-l md:text-xl">
                    {name}
                </h3>
                <p className="text-m md:text-l">
                    {description}
                </p>
            </div>
        </div>
    )
}

const HallOfFame = async () => {
    const { hallOfFame } = await getOurPeople();
    // checks if hallOfFame is an array and has at least one element, then destructures pastPresidents and founders from the first element; otherwise, assigns empty arrays
    const { pastPresidents = [], founders = [] } = Array.isArray(hallOfFame) && hallOfFame.length > 0 ? hallOfFame[0] : {};
  return (
    <div className="text-center bg-[var(--cream)] text-[var(--navy)] gap-16 justify-center items-center mx-auto py-9 px-4">
        
        <h1 className="font-bold text-2xl md:text-5xl mt-10 mb-4">
            Hall of Fame
        </h1>
        <br />
        <hr className="w-full border-t-[1.5px] border-[var(--navy)]" />

        <h3 className="text-l md:text-2xl mt-4">
            Past Presidents
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-6 mb-10">
            {(pastPresidents ?? []).map((frame, i) => (
                <PastPresidentsFrame
                    key={i}
                    name={frame.name ?? ""}
                    description={frame.description ?? ""}
                />
            ))}
        </div>

        <hr className="w-full border-t-[1.5px] border-[var(--navy)]" />

        <h3 className="text-l md:text-2xl mt-4">
            Founders
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-6 mb-10">
            {(founders ?? []).map((frame, i) => (
                <FoundersFrame
                    key={i}
                    name={frame.name ?? ""}
                    description={frame.description ?? ""}
                />
            ))}
        </div>
    </div>
  );
};

export default HallOfFame;
