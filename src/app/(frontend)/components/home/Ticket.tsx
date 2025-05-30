import config from "@/payload.config";
import { Button } from "../ui/button";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const Ticket = async ({matineeData, concertData}) => {
  return (

    <section className="flex justify-around p-6 bg-[#EEE5D8]">
      {/* Matinee Section */}
      <div className="ticket-section bg-[#EEE5D8] p-4 rounded w-1/3 text-center">
        <h2 className="text-lg font-bold mb-2 text-[#602C0F]">{matineeData?.title}</h2>
        <div className="details text-[#602C0F]">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="stroke-[#602C0F]" />
            <span>{matineeData?.date}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MapPin size={20} className="stroke-[#602C0F]" />
            <span>{matineeData?.location}</span>
          </div>
        </div>
        <Button className="mt-6 bg-transparent text-[#602C0F] border border-[#602C0F] px-8 py-4 rounded-lg flex items-center gap-2 mx-auto">
          Tickets <ArrowUpRight size={20} className="stroke-[#602C0F]" />
        </Button>
      </div>

      {/* Concert Section */}
      <div className="ticket-section bg-[EEE5D8] p-4 rounded w-1/3 text-center">
        <h2 className="text-lg font-bold mb-2 text-[#602C0F]">{concertData?.title}</h2>
        <div className="details text-[#602C0F]">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="stroke-[#602C0F]" />
            <span>{concertData?.date}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MapPin size={20} className="stroke-[#602C0F]" />
            <span>{concertData?.location}</span>
          </div>
        </div>
        <Button className="mt-6 bg-transparent text-[#602C0F] border border-[#602C0F] px-8 py-4 rounded-lg flex items-center gap-2 mx-auto">
          Tickets <ArrowUpRight size={20} className="stroke-[#602C0F]" />
        </Button>
      </div>
    </section>
  );
};

export default Ticket;
