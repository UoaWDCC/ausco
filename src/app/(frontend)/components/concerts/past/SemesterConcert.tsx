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

  return (
    <div className="flex w-1/2 gap-7">
      {/* Poster */}
      <div className="w-3/7">
        <div className="relative group overflow-hidden rounded-md w-full">
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={posterAlt}
              width={420}
              height={594}
              className="w-full h-auto object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-(--brown) opacity-0 group-hover:opacity-100 flex items-center justify-center text-(--cream) text-center transition-opacity duration-300">
            <Link href="/">
              <Button variant="link">
                View the
                <br />
                photos for this
                <br />
                concert <ArrowUpRight size={18} className="inline-block" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-4/7 flex flex-col text-(--brown) gap-2">
        <p>Semester {semester}</p>
        <h3 className="font-semibold! text-2xl! m-0! italic">{content.title}</h3>
        <p>{content.description}</p>
        <a href={content.url} target="_blank" rel="noopener noreferrer" className="pt-1.5 pb-2.5">
          <Button size="lg" variant="brown" className="text-base!">
            <Youtube size={18} />
            Watch the Concert Video
          </Button>
        </a>
        <p className="italic text-sm font-normal">
          ${content.charity.donation} donated to{" "}
          <a href={content.charity.url} target="_blank" rel="noopener noreferrer">
            <Button variant="link" className="text-sm! font-normal!">
              {content.charity.name}
            </Button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default SemesterConcert;
