import { Button } from "../ui/button";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

type TicketProps = {
  matineeData?: {
    title?: string | null;
    date?: string | null;
    location?: string | null;
  };
  concertData?: {
    title?: string | null;
    date?: string | null;
    location?: string | null;
  };
};

const Ticket = ({ matineeData, concertData }: TicketProps) => {
  return (
    <section className="flex justify-between bg-[#EEE5D8]">
      {/* Matinee Section */}
      <div className="ticket-section bg-[#EEE5D8] py-4 rounded w-1/3">
        <h2 className="text-lg font-bold mb-2 text-[#602C0F]">{matineeData?.title}</h2>
        <div className="details text-[#602C0F]">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="stroke-[#602C0F]" />
            <span>{matineeData?.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="stroke-[#602C0F]" />
            <span>{matineeData?.location}</span>
          </div>
        </div>
        <Button className="mt-6 -ml-2 lg:ml-0 h-10 lg:h-12 w-24 lg:w-28 bg-transparent text-[var(--brown)] border border-[#602C0F] hover:bg-[var(--brown)] hover:text-[var(--beige)] py-4 rounded-lg flex items-center gap-2">
          Tickets <ArrowUpRight size={20} />
        </Button>
      </div>

      {/* Concert Section */}
      <div className="ticket-section bg-[#EEE5D8] py-4 rounded w-1/3">
        <h2 className="text-lg font-bold mb-2 text-[#602C0F]">{concertData?.title}</h2>
        <div className="details text-[#602C0F]">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="stroke-[#602C0F]" />
            <span>{concertData?.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="stroke-[#602C0F]" />
            <span>{concertData?.location}</span>
          </div>
        </div>
        <Button className="mt-6 -ml-2 lg:ml-0 h-10 lg:h-12 w-24 lg:w-28 bg-transparent text-[var(--brown)] border hover:bg-[var(--brown)] hover:text-[var(--beige)] border-[#602C0F] px-8 py-4 rounded-lg flex items-center gap-2">
          Tickets <ArrowUpRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Ticket;
