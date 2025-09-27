//component for upcoming concerts page heading + short description
import { getUpcomingConcerts } from "@/actions/concertsActions";

const HeroSection = async () => {
  //fetch description from payload
  const concerts = await getUpcomingConcerts();
  return (
    <div className="m w-full bg-[var(--cream)] pt-33 sm:pt-44 md:pt-52 pb-4 ">
      <div className="max-w-xl lg:max-w-3xl text-[var(--brown)] text-center mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Upcoming Concerts</h1>
        <p className="text-xs sm:text-sm md:text-base ">{concerts.hero}</p>
      </div>
    </div>
  );
};

export default HeroSection;
