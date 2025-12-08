import { getConcertsPage } from "@/actions/pageActions";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { Archive } from "lucide-react";
import { CalendarClock } from "lucide-react";

export default async function Concerts() {
  const content = await getConcertsPage();

  return (
    <section className="w-full max-w-6xl mx-auto bg-(--cream) pt-44 pb-16 px-6 flex flex-col items-center ">
      <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-5">Concerts</h1>

      <div className="flex flex-row justify-between items-center">
        {/* Upcoming Concerts Button */}
        <Link href="/concerts/upcoming" className="rounded-lg">
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

          <div className="flex flex-col items-center">
            <CalendarClock size={18} />
            <h3>
              Upcoming\nConcerts
              <ArrowUpRight size={18} />
            </h3>
          </div>
        </Link>

        {/* Past Concerts Button */}
        <Link href="/concerts/past" className="rounded-lg">
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

          <div className="flex flex-col items-center">
            <Archive size={18} />
            <h3>
              Past\nConcerts
              <ArrowUpRight size={18} />
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
