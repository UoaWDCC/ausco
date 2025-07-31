import { Calendar, MapPin} from "lucide-react";

type ComingSoonProps = {
  title?: string | null;
  description?: string | null;
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

const ComingSoon = ({ title, description, matineeData, concertData }: ComingSoonProps) => {
  return (
    <section className="bg-[#EEE5D8] p-8 rounded-lg">
      {/* Header Section */}
      <div className="mb-8">
        <div className="inline-block bg-[#602C0F] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          Semester 2
        </div>
        <h1 className="text-4xl lg:text-5xl font-light italic text-[#602C0F] mb-4">
          {title || "Coming soon!"}
        </h1>
        <p className="text-[#602C0F] max-w-md leading-relaxed">
          {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."}
        </p>
      </div>

      <div className="border-t border-[#602C0F] pt-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Matinee Section */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-[#602C0F]">
              {matineeData?.title || "Matinee"}
            </h2>
            <div className="space-y-3 text-[#602C0F]">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="stroke-[#602C0F]" />
                <span>{matineeData?.date || "Date TBC"}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="stroke-[#602C0F]" />
                <span>{matineeData?.location || "Location TBC"}</span>
              </div>
            </div>
          </div>

          {/* Concert Section */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-[#602C0F]">
              {concertData?.title || "Concert"}
            </h2>
            <div className="space-y-3 text-[#602C0F]">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="stroke-[#602C0F]" />
                <span>{concertData?.date || "Date TBC"}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="stroke-[#602C0F]" />
                <span>{concertData?.location || "Location TBC"}</span>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="flex-1 lg:flex-none lg:w-80">
            <div className="bg-[#602C0F] rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-xl font-medium">Coming soon! 😊</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;