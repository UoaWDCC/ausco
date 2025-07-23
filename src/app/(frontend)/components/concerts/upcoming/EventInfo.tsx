import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@components/ui/button";

interface EventInfoProps {
  title?: string | null;
  date?: string | null;
  location?: string | null;
  ticketUrl?: string | null;
}

const EventInfo = ({ title, date, location, ticketUrl }: EventInfoProps) => (
  <div className="flex-1 flex flex-col">
    <div className="font-bold mb-2">{title}</div>
    <div className="flex items-center gap-2 mb-1">
      <Calendar size={18} className="stroke-[var(--brown)] stroke-[3px]" />
      <span>{date}</span>
    </div>
    <div className="flex items-center gap-2 mb-3 text-[var(--brown)]">
      <MapPin size={18} className="stroke-[var(--brown)] stroke-[3px]" />
      <span>{location}</span>
    </div>
    {ticketUrl && (
      <Button className="mt-2 -ml-2 lg:ml-0 h-10 lg:h-12 w-24 lg:w-28 bg-transparent text-[var(--brown)] border border-[var(--brown)] hover:bg-[var(--brown)] hover:text-[var(--beige)] px-8 py-4 rounded-lg">
        <a href={ticketUrl} className="flex items-center gap-2">
          <span>Tickets</span>
          <ArrowUpRight size={20} />
        </a>
      </Button>
    )}
  </div>
);

export default EventInfo;
