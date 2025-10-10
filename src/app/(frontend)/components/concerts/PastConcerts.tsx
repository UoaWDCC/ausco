import { getPastConcerts } from "@/actions/concertsActions";
import { Media } from "@/payload-types";
import { Youtube, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

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
          {years && years.map((yearData) => {
            const { concerts } = yearData;
            const { semester1, semester2 } = concerts;
            return (
              <div key={yearData.year}>
                <div>
                  <div className="border-t-2 border-[var(--brown)]"></div>
                  <h1 className="text-[var(--brown)] text-2xl sm:text-3xl md:text-4xl font-bold">{yearData.year}</h1>
                </div>

                <div className="flex flex-col md:flex-row relative bg-[var(--beige)] w-full mt-10 mb-16 lg:mt-14 lg:mb-20 gap-8 p-6 lg:p-8 lg:aspect-[16/7] rounded-lg overflow-hidden shadow-sm">
                  {/*Semester 1 concert info*/}
                  <div className="flex flex-col md:flex-row relative w-full md:w-1/2 h-full">
                    <div className="flex w-full md:w-1/2 h-full justify-center items-center p-4">
                      <div className="relative group w-full rounded-lg overflow-hidden aspect-[4/5]">
                        {semester1 && semester1.poster && (
                          <img
                            src={getImageUrl(semester1.poster)}
                            alt={
                              typeof semester1.poster === "object"
                                ? semester1.poster.alt
                                : "Semester 1 Concert Poster"
                            }
                            className="w-full h-full object-cover"
                          />
                        )}

                        <div className="absolute inset-0 bg-[var(--brown)] text-[var(--cream)] font-semibold flex flex-col items-center justify-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                          <p>View the</p> 
                          <p>photos for this</p> 
                          <span className="flex items-center justify-center">
                            concert <ArrowUpRight className="size-[20px]"/>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 md:my-8 lg:my-16 md:mx-8 text-[var(--brown)]">
                      <h3 className="font-semibold">{semester1.semester}</h3>
                      <h2 className="text-xl font-bold italic mt-2 mb-4">{semester1.concertTitle}</h2>
                      <p className="text-md leading-tight">{semester1.desc}</p>
                      <Button className="bg-[var(--brown)] text-[var(--cream)] my-6 hover:bg-[var(--beige)] hover:border-2 hover:border-[var(--brown)] hover:text-[var(--brown)] transition">
                        <Youtube className="size-[25px]" /> Watch the concert video
                      </Button>
                      <hr className="border-t-[1px] border-[var(--brown)] md:mb-4 sm:mb-6" />
                      <p className="italic md:leading-tight">${semester1.charity.donationAmount} donated to <Link href={semester1.charity.websiteURL} target="_blank" className="hover:underline">{semester1.charity.name}</Link></p>
                    </div>
                  </div>
                   
                  {/*Semester 2 concert info*/} 
                  <div className="flex flex-col md:flex-row relative w-full md:w-1/2 h-full">
                    <div className="flex w-full md:w-1/2 h-full justify-center items-center p-4">
                      <div className="relative group w-full rounded-lg overflow-hidden aspect-[4/5]">
                        {semester2 && semester2.poster && (
                          <img
                            src={getImageUrl(semester2.poster)}
                            alt={
                              typeof semester2.poster === "object"
                                ? semester2.poster.alt
                                : "Semester 2 Concert Poster"
                            }
                            className="w-full rounded-lg aspect-[4/5] object-cover"
                          />
                        )}

                        <div className="absolute inset-0 bg-[var(--brown)] text-[var(--cream)] font-semibold flex flex-col items-center justify-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                          <p>View the</p> 
                          <p>photos for this</p> 
                          <span className="flex items-center justify-center">
                            concert <ArrowUpRight className="size-[20px]"/>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 md:my-8 lg:my-16 md:mx-8 text-[var(--brown)]">
                      <h3 className="font-semibold">{semester2.semester}</h3>
                      <h2 className="text-xl font-bold italic mt-2 mb-4">{semester2.concertTitle}</h2>
                      <p className="text-md leading-tight">{semester2.desc}</p> 
                      <Button className="bg-[var(--brown)] text-[var(--cream)] my-6 hover:bg-[var(--beige)] hover:border-2 hover:border-[var(--brown)] hover:text-[var(--brown)] transition">
                        <Youtube className="size-[25px]" /> Watch the concert video
                      </Button>
                      <hr className="border-t-[1px] border-[var(--brown)] md:mb-4 sm:mb-6" />
                      <p className="italic md:leading-tight">${semester2.charity.donationAmount} donated to <Link href={semester2.charity.websiteURL} target="_blank" className="hover:underline">{semester2.charity.name}</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PastConcerts;

