import { getPastConcerts } from "@/actions/getPastConcerts";
import { Media } from "@/payload-types";
import { Youtube, ArrowUpRight } from "lucide-react";

const PastConcerts = async () => {
  const past = await getPastConcerts();
  const {years, headerSection} = past;

  const getImageUrl = (imageField: string | Media | null | undefined): string | undefined => {
    if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
      return imageField.url ?? undefined;
    }
    if (typeof imageField === "string") {
      return imageField;
    }
    return undefined; // Return undefined if no image is found
  };

  return (
    <div className="w-full bg-[var(--cream)] pt-10 sm:pt-16 md:pt-24 pb-4 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-[var(--brown)] text-center md:text-left flex-col lg:w-3/5 mb-12 lg:mb-18">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{headerSection["title"]}</h1>
        <p className="text-xs sm:text-sm md:text-base">{headerSection["short-desc"]}</p>
        </div>

        <div>
          {years && years.map((yearData) => (
            <div key={yearData.year}>
              <div className="flex-col items-center">
                <div className="flex-grow border-t-2 border-[var(--brown)]"></div>
                <h1 className="text-[var(--brown)] text-2xl sm:text-3xl md:text-4xl font-bold">{yearData.year}</h1>
              </div>

              <div className="flex-col md:flex-row relative bg-[var(--beige)] w-full mt-10 mb-16 lg:mt-14 lg:mb-20 aspect-[16/7] rounded-lg overflow-hidden shadow-sm">
                <div className="flex-col md:flex-row relative w-1/2">
                  <div>
                    {/*Poster image div*/}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PastConcerts;

