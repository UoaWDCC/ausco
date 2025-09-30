import { getOurPeople } from "@/actions/getOurPeople";
import Image from "next/image";

const HallOfFame = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  return (
    <div className="text-center bg-[var(--cream)] text-[var(--navy)] gap-16 justify-center items-center mx-auto py-9 px-4">
        
        <h1 className="font-bold text-2xl md:text-5xl mt-10 mb-4">
            Hall of Fame
        </h1>
        <br />
        <hr className="w-full border-t-[1.5px] border-[var(--navy)]" />

        <h3 className="mt-4">
            Past Presidents
        </h3>
        <div>

        </div>

        <hr className="w-full border-t-[1.5px] border-[var(--navy)]" />

        <h3 className="mt-4">
            Founders
        </h3>
    </div>
  );
};

export default HallOfFame;
