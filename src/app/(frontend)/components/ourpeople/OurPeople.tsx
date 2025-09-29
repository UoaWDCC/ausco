import { getOurPeople } from "@/actions/getOurPeople";
import { Media } from "@/payload-types";
import Image from "next/image";

const OurPeople = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  return (
    <div className="bg-[var(--cream)] text-[var(--navy)] flex flex-col gap-16 justify-center items-center mx-auto py-9 px-4 lg:flex-row">
      {content.image && typeof content.image !== "string" ? (
        <Image 
          src={content.image.url ?? ""}
          alt={content.image.alt ?? "Concert poster"}
          width={400}
          height={300}
        />
      ) : null}

      <div className="text-center mt-0 pt-0">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Our People</h1>
        <p className="text-xs text-left max-w-md"> {content.description}</p>
      </div>
    </div>
  );
};

export default OurPeople;
