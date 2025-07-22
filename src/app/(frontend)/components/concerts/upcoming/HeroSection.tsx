import { getUpcomingConcerts } from "@/actions/getUpcomingConcerts";

const HeroSection = async () => {
  const concerts = await getUpcomingConcerts();
  return (
    <div className="w-full bg-[var(--cream)]  pt-40 pb-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-[var(--brown)] text-center">Upcoming Concerts</h1>
      </div>
    </div>
  );
};

export default HeroSection;
