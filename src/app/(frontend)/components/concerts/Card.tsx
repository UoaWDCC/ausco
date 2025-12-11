import Image from "next/image";
import Link from "next/link";

import { Archive, ArrowUpRight, CalendarClock } from "lucide-react";

import { Media } from "@/payload-types";

type CardProps = {
  background: Media | string | null;
  type: "upcoming" | "past";
};

const Card = ({ background, type }: CardProps) => {
  const link = type === "upcoming" ? "/concerts/upcoming" : "/concerts/past";
  const label = type === "upcoming" ? "Upcoming" : "Past";
  const icon =
    type === "upcoming" ? (
      <CalendarClock size={48} className="mb-4" />
    ) : (
      <Archive size={48} className="mb-4" />
    );

  return (
    <Link href={link} className="relative w-1/2 aspect-5/4 overflow-hidden rounded-lg group">
      {typeof background === "object" && background?.url && (
        <Image
          src={background.url}
          alt={background.alt || `${label} Concerts Image`}
          fill
          priority
          loading="eager"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
        />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
        {icon}
        <h3
          className="mb-2 text-3xl font-semibold text-center relative inline-block
            after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current
            after:transition-[width] after:duration-300 group-hover:after:w-full"
        >
          {label}
        </h3>
        <h3
          className="flex items-center text-3xl font-semibold text-center relative
            after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current
            after:transition-[width] after:duration-300 group-hover:after:w-full"
        >
          Concerts <ArrowUpRight size={40} className="ml-1" />
        </h3>
      </div>
    </Link>
  );
};

export default Card;
