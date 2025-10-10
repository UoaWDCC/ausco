//component displays concert event details
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@components/ui/button";

interface EventInfoProps {
  title?: string | null;
  date?: string | null;
  location?: string | null;
  ticketUrl?: string | null;
}

//event info and icon rendering
//ticket button rendered if ticketUrl is provided
const EventInfo = ({ title, date, location, ticketUrl }: EventInfoProps) => (
  <div className="flex-1 flex flex-col min-w-0">
    {/*event title, date, location + respective icons*/}
    <div className="font-bold mb-2 truncate">{title}</div>
    <div className="flex items-center gap-2 mb-1 min-w-0">
      <Calendar size={18} className="stroke-[var(--brown)] stroke-[3px] flex-shrink-0" />
      <span className="truncate">{date}</span>
    </div>
    <div className="flex items-center gap-2 mb-2 md:mb-3 text-[var(--brown)] min-w-0">
      <MapPin size={18} className="stroke-[var(--brown)] stroke-[3px] flex-shrink-0" />
      <span className="truncate">{location}</span>
    </div>
    {/*optional ticket button*/}
    {ticketUrl && (
      <Button className="mt-2 h-10 lg:h-12 w-24 lg:w-28 bg-transparent text-[var(--brown)] border-2 border-[var(--brown)] hover:bg-[var(--brown)] hover:text-[var(--beige)] px-8 py-4 rounded-lg">
        <a href={ticketUrl} className="flex items-center gap-2">
          <span>Tickets</span>
          <ArrowUpRight size={20} />
        </a>
      </Button>
    )}
  </div>
);

export default EventInfo;
