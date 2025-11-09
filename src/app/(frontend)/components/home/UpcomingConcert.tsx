import { Media } from "@/payload-types";
import Image from "next/image";
import Ticket from "./Ticket";
import { Button } from "../ui/button";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

type UpcomingConcertProps = {
  content: {
    title: string;
    poster: Media | string | null;
    description: string;
    tickets: {
      matinee: {
        matineeDate: string;
        matineeLocation: string;
        matineeTicketUrl: string;
      };
      concert: {
        concertDate: string;
        concertLocation: string;
        concertTicketUrl: string;
      };
    };
  };
};

const UpcomingConcert = async ({ content }: UpcomingConcertProps) => {
  return (
    <section className="bg-[var(--beige)] text-[var(--brown)] pt-28 pb-32">
      {/* Upcoming Concert Title */}
      <div className="flex justify-center">
        <h1 className="!font-semibold !text-4xl !m-0">Our Upcoming Concert,&nbsp;</h1>
        <h1 className="!font-light !text-4xl !m-0 italic">{content.title}</h1>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-stretch justify-center pt-10">
        {/* LEFT: Poster */}
        {typeof content.poster === "object" && content.poster?.url && (
          <Image
            src={content.poster.url}
            alt={content.poster.alt || "Poster"}
            width={376}
            height={532}
            className="border border-[var(--brown)] rounded-md"
          />
        )}

        {/* RIGHT: Text + Tickets */}
        {/* TODO: combine into one file/component*/}
        <div className="flex flex-col justify-between lg:w-[28rem] w-72">
          <div className="flex flex-col gap-6 text-base text-left whitespace-pre-line">
            {content.description}
          </div>

          <div className="h-px bg-[var(--brown)] w-full" />

          <div>
            {/* Matinee Section */}
            <div className="ticket-section bg-[#EEE5D8] rounded w-1/3">
              <h2 className="text-lg font-bold mb-2 text-[#602C0F]">Matinee</h2>
              <div className="details text-[#602C0F]">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="stroke-[#602C0F]" />
                  <span>{content.tickets.matinee.matineeDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="stroke-[#602C0F]" />
                  <span>{content.tickets.matinee.matineeLocation}</span>
                </div>
              </div>
              <Button variant="brown" size="lg" className="mt-6">
                Tickets <ArrowUpRight size={18} />
              </Button>
            </div>

            {/* Concert Section */}
            <div className="ticket-section bg-[#EEE5D8] rounded w-1/3">
              <h2 className="text-lg font-bold mb-2 text-[#602C0F]">Concert</h2>
              <div className="details text-[#602C0F]">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="stroke-[#602C0F]" />
                  <span>{content.tickets.concert.concertDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="stroke-[#602C0F]" />
                  <span>{content.tickets.concert.concertLocation}</span>
                </div>
              </div>
              <Button variant="brown" size="lg" className="mt-6">
                Tickets <ArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingConcert;
