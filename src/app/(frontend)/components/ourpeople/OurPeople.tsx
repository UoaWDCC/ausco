import { getOurPeople } from "@/actions/getOurPeoplePage";
import { Media } from "@/payload-types";
import Image from "next/image";

const OurPeople = async () => {
  const [content] = await Promise.all([getOurPeople()]);
  return (
    <div className="bg-[#eee5d8] text-[#042b50] flex flex-col gap-16 justify-center items-center mx-auto py-9 px-4 lg:flex-row">
      <Image 
        src={content.image.url ?? ""}
        alt={content.image.alt ?? "Concert poster"}
        // TODO: the width and height will need to be adjusted based on the actual image size, currently hardcoded as next/image requires dimension for app to run
        width={400}
        height={300}
      />

      <div className="text-center mt-0 pt-0">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif">Our People</h1>
        <p className="text-xs text-left max-w-md"> {content.description}</p>
      </div>
    </div>
  );
};

export default OurPeople;
