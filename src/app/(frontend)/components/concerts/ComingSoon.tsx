import EventInfo from "./upcoming/EventInfo";

type ComingSoonProps = {
  title?: string | null;
  description?: string | null;
  matineeData?: {
    title?: string | null;
    date?: string | null;
    location?: string | null;
    ticketUrl?: string | null;
  };
  concertData?: {
    title?: string | null;
    date?: string | null;
    location?: string | null;
    ticketUrl?: string | null;
  };
};

const ComingSoon = ({ title, description, matineeData, concertData }: ComingSoonProps) => {
  return (
    <div className="bg-[#EEE5D8] min-h-screen p-8 flex items-center justify-center">
      <section className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left section*/}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block bg-[#602C0F] text-white px-7 py-3.5 rounded-2xl text-sm font-medium">
                  Semester 2
                </div>
                <h1
                  className="text-[45px] text-[#602C0F]"
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: "150%",
                    letterSpacing: "-1.1%",
                  }}
                >
                  {title || "Coming soon!"}
                </h1>
              </div>
              <p className="text-[#602C0F] max-w-md leading-relaxed">
                {description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."}
              </p>
            </div>

            <div className="border-t border-[#602C0F] pt-8">
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 text-[var(--brown)]">
                {/* Matinee Section */}
                <div className="flex-1">
                  <EventInfo
                    title={matineeData?.title || "Matinee"}
                    date={matineeData?.date || "Date TBC"}
                    location={matineeData?.location || "Location TBC"}
                    ticketUrl={matineeData?.ticketUrl || undefined}
                  />
                </div>

                {/* Concert Section */}
                <div className="flex-1">
                  <EventInfo
                    title={concertData?.title || "Concert"}
                    date={concertData?.date || "Date TBC"}
                    location={concertData?.location || "Location TBC"}
                    ticketUrl={concertData?.ticketUrl || undefined}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#602C0F] rounded-2xl p-8 h-full min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-xl font-medium">Coming soon! 😉</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
