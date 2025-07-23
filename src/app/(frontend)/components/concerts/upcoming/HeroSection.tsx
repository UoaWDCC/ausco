import { getUpcomingConcerts } from "@/actions/getUpcomingConcerts";

const HeroSection = async () => {
  const concerts = await getUpcomingConcerts();
  return (
    <div className="w-full bg-[var(--cream)] pt-50 pb-5">
      <div className="max-w-3xl text-[var(--brown)] text-center mx-auto">
        <h1>Upcoming Concerts</h1>
        <p>{concerts.hero}</p>
      </div>
    </div>
  );
};

export default HeroSection;
