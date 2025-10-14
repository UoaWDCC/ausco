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
      <div className="ticket-section bg-[#EEE5D8] rounded w-1/3">
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
        <Button variant="brown" size="lg" className="mt-6">
          Tickets <ArrowUpRight size={18} />
        </Button>
      </div>

      {/* Concert Section */}
      <div className="ticket-section bg-[#EEE5D8] rounded w-1/3">
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
        <Button variant="brown" size="lg" className="mt-6">
          Tickets <ArrowUpRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Ticket;
