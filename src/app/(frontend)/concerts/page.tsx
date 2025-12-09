import { getConcertsPage } from "@/actions/pageActions";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { Archive } from "lucide-react";
import { CalendarClock } from "lucide-react";

export default async function Concerts() {
  const content = await getConcertsPage();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center">
        <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-10">Concerts</h1>

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
                className="object-cover object-center"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <CalendarClock size={52} className="pb-8" />
              <h3 className="text-3xl font-semibold text-center pb-2">Upcoming</h3>
              <h3 className="text-3xl font-semibold text-center">
                Concerts
                <ArrowUpRight size={40} />
              </h3>
            </div>
          </Link>

          {/* Past Concerts Button */}
          <Link
            href="/concerts/past"
            className="relative w-1/2 aspect-3/2 overflow-hidden rounded-lg group"
          >
            {typeof content.past === "object" && content.past?.url && (
              <Image
                src={content.past.url}
                alt={content.past.alt || "Past Concerts Image"}
                fill
                priority
                loading="eager"
                className="object-cover object-center"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
              <Archive size={18} />
              <h3 className="text-3xl font-semibold whitespace-pre-line">
                Past{"\n"}Concerts
                <ArrowUpRight size={18} />
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
