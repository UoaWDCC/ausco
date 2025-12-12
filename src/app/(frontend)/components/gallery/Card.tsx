import Image from "next/image";
import Link from "next/link";

import { Media } from "@/payload-types";

type CardProps = {
  title: keyof typeof cardLinks;
  background: Media | string | null;
};

const cardLinks = {
  "Concert Photos": "/gallery/concert",
  "Annual Camp Photos": "/gallery/annual",
  "Executive Camp Photos": "/gallery/executive",
  "Other Photos": "/gallery/other",
} as const;

const Card = ({ title, background }: CardProps) => {
  const link = cardLinks[title];

  return (
    <Link href={link} className="relative w-1/2 aspect-2/1 overflow-hidden rounded-lg group">
      {typeof background === "object" && background?.url && (
        <Image
          src={background.url}
          alt={background.alt || title}
          fill
          priority
          loading="eager"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
        />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
        <h3
          className="text-3xl font-semibold text-center relative inline-block 
                       after:absolute after:left-0 after:-bottom-0.5 
                       after:h-px after:w-0 after:bg-current 
                       after:transition-[width] after:duration-300 
                       group-hover:after:w-full"
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
