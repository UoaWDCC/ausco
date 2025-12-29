import { ArrowUpRight } from "lucide-react";
import { Youtube } from "react-bootstrap-icons";

import { Button } from "@components/ui/button";
import { Media } from "@/payload-types";

import Image from "next/image";
import Link from "next/link";

type SemesterConcertProps = {
  semester: string;
  content: {
    poster: string | Media;
    title: string;
    description: string;
    url: string;
    photoAlbum?: string | null;
    charity: { name: string; url: string; donation: number };
  };
};

const SemesterConcert = ({ semester, content }: SemesterConcertProps) => {
  const posterUrl =
    typeof content.poster === "object" && content.poster !== null && "url" in content.poster
      ? content.poster.url
      : typeof content.poster === "string"
        ? content.poster
        : "";

  const posterAlt =
    typeof content.poster === "object" && content.poster !== null && "alt" in content.poster
      ? content.poster.alt
      : `${semester} Concert Poster`;

  const photoAlbumLink = (() => {
    if (!content.photoAlbum || content.photoAlbum.trim() === "") return null;

    try {
      const url = new URL(content.photoAlbum, "https://ausco.wdcc.co.nz");
      return url.pathname !== "/" ? url.pathname : null;
    } catch {
      return null;
    }
  })();

  return (
    <div className="flex w-full lg:w-1/2 gap-4 sm:gap-5 md:gap-7">
      {/* Poster */}
      <div className="w-3/7">
        <div className="relative group overflow-hidden rounded-md w-full">
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={posterAlt}
              width={420}
              height={594}
              className="w-full h-auto object-cover border border-(--brown) rounded-md"
            />
          )}

          {/* Overlay */}
          {photoAlbumLink && (
            <div className="absolute inset-0 bg-(--brown) opacity-0 group-hover:opacity-100 flex items-center justify-center text-(--cream) text-center transition-opacity duration-300">
              <Link href={photoAlbumLink}>
                <Button variant="link">
                  View the
                  <br />
                  photos for this
                  <br />
                  concert <ArrowUpRight size={18} className="inline-block" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="w-4/7 flex flex-col text-(--brown) gap-1 md:gap-2">
        <p className="font-medium text-xs sm:text-sm md:text-base">Semester {semester}</p>
        <h3 className="font-semibold! text-lg sm:text-xl md:text-2xl! m-0! italic">
          {content.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base">{content.description}</p>
        <a
          href={content.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-1 pb-1.5 md:pt-1.5 md:pb-2.5"
        >
          <Button
            size="lg"
            variant="invertedBrown"
            className="text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-11 px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            {/* Mobile */}
            <span className="block sm:hidden">Concert</span>

            {/* Small+ */}
            <span className="hidden sm:block md:hidden">Watch Concert</span>

            {/* Medium */}
            <span className="hidden md:block lg:hidden">Watch Concert</span>

            {/* Large+ */}
            <span className="hidden lg:block">Watch the Concert Video</span>
          </Button>
        </a>
        <p className="italic text-xs sm:text-sm font-normal">
          ${content.charity.donation} donated to{" "}
          <a href={content.charity.url} target="_blank" rel="noopener noreferrer">
            <Button variant="link" className="text-xs sm:text-sm font-normal!">
              {content.charity.name}
            </Button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default SemesterConcert;
