import { getUpcomingConcerts } from "@/actions/getUpcomingConcerts";

const HeroSection = async () => {
  const concerts = await getUpcomingConcerts();
  return (
    <div className="w-full bg-[var(--cream)] pt-50 pb-5">
      <div className="max-w-3xl  mx-auto">
        <h1 className="text-[var(--brown)] text-center">Upcoming Concerts</h1>
        <p className="text-[var(--brown)] text-center">{concerts.hero}</p>
      </div>
    </div>
  );
};

export default HeroSection;
