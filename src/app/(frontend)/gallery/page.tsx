import { Media } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

import { getGalleryPage } from "@/actions/pageActions";

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
  const content = await getGalleryPage();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center gap-8">
        <h1 className="font-semibold! text-4xl! m-0! text-(--navy) mb-2">Gallery</h1>

        <div className="flex flex-row justify-between items-center gap-8 w-full mb-8">
          {/* Concert Photos */}
          <Link
            href="/gallery/concert"
            className="relative w-1/2 aspect-2/1 overflow-hidden rounded-lg group"
          >
            {typeof content.concert === "object" && content.concert?.url && (
              <Image
                src={content.concert.url}
                alt={content.concert.alt || "Concert Image"}
                fill
                priority
                loading="eager"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
              <h3 className="text-3xl font-semibold text-center relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Concert Photos
              </h3>
            </div>
          </Link>

          {/* Annual Camp Photos */}
          <Link
            href="/gallery/annual"
            className="relative w-1/2 aspect-2/1 overflow-hidden rounded-lg group"
          >
            {typeof content.annual === "object" && content.annual?.url && (
              <Image
                src={content.annual.url}
                alt={content.annual.alt || "Concert Image"}
                fill
                priority
                loading="eager"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
              <h3 className="text-3xl font-semibold text-center relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Annual Camp Photos
              </h3>
            </div>
          </Link>
        </div>

        <div className="flex flex-row justify-between items-center gap-8 w-full mb-8">
          {/* Executive Camp Photos */}
          <Link
            href="/gallery/executive"
            className="relative w-1/2 aspect-2/1 overflow-hidden rounded-lg group"
          >
            {typeof content.executive === "object" && content.executive?.url && (
              <Image
                src={content.executive.url}
                alt={content.executive.alt || "Executive Image"}
                fill
                priority
                loading="eager"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
              <h3 className="text-3xl font-semibold text-center relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Executive Camp Photos
              </h3>
            </div>
          </Link>

          {/* Other Photos */}
          <Link
            href="/gallery/other"
            className="relative w-1/2 aspect-2/1 overflow-hidden rounded-lg group"
          >
            {typeof content.other === "object" && content.other?.url && (
              <Image
                src={content.other.url}
                alt={content.other.alt || "Other Image"}
                fill
                priority
                loading="eager"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
              <h3 className="text-3xl font-semibold text-center relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Other Photos
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
