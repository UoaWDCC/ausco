import { getLandingPage } from "@/actions/getLandingPage";
import { Media } from "@/payload-types";
import Image from "next/image";
import Ticket from "./Ticket";

// Type guard to check if poster is a Media object
function isMedia(poster: string | Media | null | undefined): poster is Media {
  return typeof poster === "object" && poster !== null && "url" in poster;
}

const UpcomingConcert = async () => {
  const [content] = await Promise.all([getLandingPage()]);

  return (
    <section className="bg-[var(--beige)] text-[var(--brown)] mx-auto pt-30 pb-20">
      {/* name of the upcoming concert */}
      <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p className="inline-block mr-4">Our Upcoming Concert,&nbsp;</p>
        <p className="inline-block italic"> {content.upcomingConcert?.title} </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 align-center justify-center items-center lg:items-start my-9">
        {/* poster for the upcoming concert */}
        {isMedia(content.upcomingConcert?.poster) ? (
          // TODO: the width and height will need to be adjusted based on the actual image size, currently hardcoded as next/image requires dimension for app to run
          <Image
            width={320}
            height={480}
            src={content.upcomingConcert.poster.url ?? ""}
            alt={content.upcomingConcert.poster.alt ?? "Concert poster"}
            className="lg:w-80 md:w-94 w-75 h-auto lg:mr-4 mr-1 border-2 border-[var(--brown)] rounded-md mt-0"
          />
        ) : (
          <p>No valid poster available</p>
        )}

        <div className="flex flex-col">
          <div className="lg:w-96 w-64 flex flex-col gap-6 text-xs text-left mt-0 pt-0">
            {/* description for the upcoming concert*/}
            <p className="mt-0 pt-0"> {content.upcomingConcert?.description1} </p>
            <p className="mt-0 pt-0"> {content.upcomingConcert?.description2} </p>
            <hr className="border-t-[1.5px] border-[var(--brown)] lg:mt-6 mt-3" />
          </div>
          <div className="lg:pt-9 pt-4">
            <Ticket matineeData={content.matinee} concertData={content.concert} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcert;
