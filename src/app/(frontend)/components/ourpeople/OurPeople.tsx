import { getOurPeople } from "@/actions/getOurPeople";
import Image from "next/image";

const OurPeople = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  return (
    <div className="bg-[var(--cream)] px-0 mx-0 pt-40 pb-9">
      {/* mobile view */}
      <div className="relative justify-center items-center mx-0 p-0 lg:hidden text-[var(--white)]">
        {content.image && typeof content.image !== "string" ? (
          <Image 
            src={content.image.url ?? ""}
            alt={content.image.alt ?? "Concert poster"}
            width={500}
            height={300}
            className="relative w-full h-auto mx-0 my-0 py-0 px-0 object-cover"
          />
        ) : null}
        <h1 className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl"> Our People </h1>
      </div>

      {/* desktop view */}
      <div className="text-[var(--navy)] hidden lg:flex flex-col gap-16 justify-center items-center mx-auto px-4 lg:flex-row">
        {content.image && typeof content.image !== "string" ? (
          <Image 
            src={content.image.url ?? ""}
            alt={content.image.alt ?? "Concert poster"}
            width={658}
            height={405}
          />
        ) : null}

        <div className="text-center mt-0 pt-0">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Our People</h1>
          <p className="text-xs text-left max-w-md"> {content.description}</p>
        </div>
      </div>
    </div>
    
  );
};

export default OurPeople;
