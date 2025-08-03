import { getPastConcerts } from "@/actions/getPastConcerts";

const PastConcerts = async () => {
  const [content] = await Promise.all([getPastConcerts()]);

  return (
    <div className="w-full bg-[var(--cream)] pt-10 sm:pt-16 md:pt-24 pb-4 h-[max(880px,100dvh)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[var(--brown)] text-center md:text-left flex-col lg:w-3/5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{content.headerSection["title"]}</h1>
        <p className="text-xs sm:text-sm md:text-base">{content.headerSection["short-desc"]}</p>
        </div>
      </div>
    </div>
  );
};
export default PastConcerts;

