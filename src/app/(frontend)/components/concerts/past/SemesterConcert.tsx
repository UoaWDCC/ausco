import { ArrowUpRight } from "lucide-react";
import { Youtube } from "react-bootstrap-icons";

import { Button } from "@components/ui/button";
import { Media } from "@/payload-types";

import Image from "next/image";
import Link from "next/link";

import { getImageUrl, getImageAlt } from "@/app/(frontend)/util/media";

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
  const posterUrl = getImageUrl(content.poster);
  const posterAlt = getImageAlt(content.poster, "Past Semester Poster");

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
    <div className="flex w-full gap-4 sm:gap-5 md:gap-7 lg:w-1/2">
      {/* Poster */}
      <div className="w-3/7">
        <div className="group relative w-full overflow-hidden rounded-md">
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={posterAlt}
              width={420}
              height={594}
              className="h-auto w-full rounded-md border border-(--brown) object-cover"
            />
          )}

          {/* Overlay */}
          {photoAlbumLink && (
            <div className="absolute inset-0 flex items-center justify-center bg-(--brown) text-center text-(--cream) opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
      <div className="flex w-4/7 flex-col gap-1 text-(--brown) md:gap-2">
        <p className="text-xs font-medium sm:text-sm md:text-base">Semester {semester}</p>
        <h3 className="m-0! text-lg font-semibold! italic sm:text-xl md:text-2xl!">
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
            className="h-8 gap-1.5 px-2 text-xs sm:h-9 sm:gap-2 sm:px-3 sm:text-sm md:h-11 md:px-4 md:text-base"
          >
            <Youtube className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
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
        <p className="text-xs font-normal italic sm:text-sm">
          ${content.charity.donation} donated to{" "}
          <a href={content.charity.url} target="_blank" rel="noopener noreferrer">
            <Button variant="link" className="text-xs font-normal! sm:text-sm">
              {content.charity.name}
            </Button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default SemesterConcert;
