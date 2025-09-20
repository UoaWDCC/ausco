import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";

import { getGalleryLanding } from "@/actions/getGalleryLanding";
import { Media } from "@/payload-types";
import Link from "next/link";

const headerContent = await getHeader();

const [content] = await Promise.all([getGalleryLanding()]);

const getImageUrl = (imageField: string | Media | null | undefined): string | undefined => {
  if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
    return imageField.url ?? undefined;
  }
  if (typeof imageField === "string") {
      return imageField;
  }
  return undefined; // Return undefined if no image is found
};

export default async function Gallery() {
    return (
    <>
      <Header content={headerContent} />
      <div className="w-full bg-[var(--cream)] pt-20 md:pt-25 md:h-[max(880px,100dvh)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-[var(--navy)] text-center">Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-stretch gap-4 md:gap-6 pt-10 pb-30">
          {/* CONCERT PHOTOS */}
          <Link
            href="" /* to be replaced with actual link */
            className="group relative aspect-19/7 rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--navy)]"
            aria-label="View concert photos"
          >
            {content.concertPhotosCard?.["background-image"] && (
              <img
                src={getImageUrl(content.concertPhotosCard["background-image"])}
                alt={
                  typeof content.concertPhotosCard["background-image"] === "object"
                    ? content.concertPhotosCard["background-image"].alt
                    : "Concert Photos Background"
                }
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[var(--cream)] px-2 py-4 lg:p-16">
              <h3 className="text-3xl lg:text-4xl font-bold my-4">Concert Photos</h3>
            </div>
          </Link>

          {/* ANNUAL CAMP PHOTOS */}
          <Link
            href="" /* to be replaced with actual link */
            className="group relative aspect-19/7 rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--navy)]"
            aria-label="View annual camp photos"
          >
            {content.annCampCard?.["background-image"] && (
              <img
                src={getImageUrl(content.annCampCard["background-image"])}
                alt={
                  typeof content.annCampCard["background-image"] === "object"
                    ? content.annCampCard["background-image"].alt
                    : "Annual Camp Photos Background"
                }
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[var(--cream)] px-2 py-4 lg:p-16">
              <h3 className="text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Annual Camp</h3>
              <span className="flex items-center justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold">Photos</h3>
              </span>
            </div>
          </Link>

          {/* EXECUTIVE CAMP PHOTOS */}
          <Link
            href="" /* to be replaced with actual link */
            className="group relative aspect-19/7 rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--navy)]"
            aria-label="View executive camp photos"
          >
            {content.execCampCard?.["background-image"] && (
              <img
                src={getImageUrl(content.execCampCard["background-image"])}
                alt={
                  typeof content.execCampCard["background-image"] === "object"
                    ? content.execCampCard["background-image"].alt
                    : "Executive Camp Photos Background"
                }
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[var(--cream)] px-2 py-4 lg:p-16">
              <h3 className="text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Executive Camp</h3>
              <span className="flex items-center justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold">Photos</h3>
              </span>
            </div>
          </Link>

          {/* OTHER PHOTOS */}
          <Link
            href="" /* to be replaced with actual link */
            className="group relative aspect-19/7 rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--navy)]"
            aria-label="View other photos"
          >
            {content.otherPhotosCard?.["background-image"] && (
              <img
                src={getImageUrl(content.otherPhotosCard["background-image"])}
                alt={
                  typeof content.otherPhotosCard["background-image"] === "object"
                    ? content.otherPhotosCard["background-image"].alt
                    : "Other Photos Background"
                }
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[var(--cream)] px-2 py-4 lg:p-16">
              <h3 className="text-3xl lg:text-4xl font-bold my-4">Other Photos</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}









