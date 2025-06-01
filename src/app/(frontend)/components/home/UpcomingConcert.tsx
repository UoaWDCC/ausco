import { getLandingPage } from "@/actions/getLandingPage";
import { Media } from "@/payload-types";
import Image from "next/image";

// Type guard to check if poster is a Media object
function isMedia(poster: string | Media | null | undefined): poster is Media {
  return typeof poster === "object" && poster !== null && "url" in poster;
}

const UpcomingConcert = async () => {
  const [content] = await Promise.all([getLandingPage()]);

  return (
    <section className="bg-[#eee5d8] text-[#602c0f] mx-auto py-4">
      {/* name of the upcoming concert */}
      <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p className="inline-block mr-4">Our Upcoming Concert,</p>
        <p className="inline-block italic"> {content.upcomingConcert?.title} </p>
      </div>

      <div className="flex flex-row gap-16 justify-center item-start my-9">
        {/* poster for the upcoming concert */}
        {isMedia(content.upcomingConcert?.poster) ? (
          // TODO: the width and height will need to be adjusted based on the actual image size, currently hardcoded as next/image requires dimension for app to run
          <Image
            width={320}
            height={480}
            src={content.upcomingConcert.poster.url ?? ""}
            alt={content.upcomingConcert.poster.alt ?? "Concert poster"}
            className="w-80 h-auto mr-4 border-2 border-[#602c0f] rounded-md mt-0"
          />
        ) : (
          <p>No valid poster available</p>
        )}

        <div className="w-96 text-xs text-left mt-0 pt-0">
          {/* description for the upcoming concert*/}
          <p className="mt-0 pt-0"> {content.upcomingConcert?.description} </p>

          <hr className="border-t-[1.5px] border-[#602c0f] mt-12" />
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcert;
