import Image from "next/image";
import Link from "next/link";

import { Archive, ArrowUpRight, CalendarClock } from "lucide-react";

import { getConcertsPage } from "@/actions/pageActions";
import Header from "@components/concerts/Header";

export default async function Concerts() {
  const content = await getConcertsPage();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center">
        <Header title="Concerts" />
        
        <div className="flex flex-row justify-between items-center gap-8 w-full">
          {/* Upcoming Concerts Button */}
          <Link
            href="/concerts/upcoming"
            className="relative w-1/2 aspect-5/4 overflow-hidden rounded-lg group"
          >
            {typeof content.upcoming === "object" && content.upcoming?.url && (
              <Image
                src={content.upcoming.url}
                alt={content.upcoming.alt || "Upcoming Concerts Image"}
                fill
                priority
                loading="eager"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
              <CalendarClock size={48} className="mb-4" />
              <h3 className="mb-2 text-3xl font-semibold text-center relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Upcoming
              </h3>
              <h3 className="flex items-center text-3xl font-semibold text-center relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Concerts
                <ArrowUpRight size={40} className="ml-1" />
              </h3>
            </div>
          </Link>

          {/* Past Concerts Button */}
          <Link
            href="/concerts/past"
            className="relative w-1/2 aspect-5/4 overflow-hidden rounded-lg group"
          >
            {typeof content.past === "object" && content.past?.url && (
              <Image
                src={content.past.url}
                alt={content.past.alt || "Past Concerts Image"}
                fill
                priority
                loading="eager"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-107"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-(--cream)">
              <Archive size={48} className="mb-4" />
              <h3 className="mb-2 text-3xl font-semibold text-center relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Past
              </h3>
              <h3 className="flex items-center text-3xl font-semibold text-center relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 group-hover:after:w-full">
                Concerts
                <ArrowUpRight size={40} className="ml-1" />
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
