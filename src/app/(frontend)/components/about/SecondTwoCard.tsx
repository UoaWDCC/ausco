import { BookText, Handshake } from "lucide-react";

const SecondTwoCard = () => {
  return (
    <div className="w-full bg-[#F6F4EC] py-10">
      <div className="flex w-full max-w-4xl mx-auto gap-6">
        <a
          href=""
          className="relative flex-1 max-w-[40%] min-w-[180px] h-96 rounded-lg overflow-hidden group cursor-pointer block flex flex-col items-center justify-center text-center sm:h-96 h-72 w-full sm:w-auto mb-4 sm:mb-0"
          style={{ minWidth: 180 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
            style={{
              backgroundImage: "url('/assets/about-us-01.jpg')",
              opacity: 0.2,
            }}
          />
          <div className="absolute inset-0 bg-[#6C96CD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-6 w-full space-y-4">
            <BookText size={40} className="mb-4 text-[#2d3a4a]" />
            <h2 className="text-xl font-bold mb-2 text-[#2d3a4a]">Constitution</h2>
            <p className="text-[#2d3a4a] mb-4">
              Read our constitution and learn about our mission and values.
            </p>
            <span className="text-[#2d3a4a] underline font-medium">Read more</span>
          </div>
        </a>
        <div
          className="relative flex-[1.3] min-w-[220px] h-96 rounded-lg overflow-hidden group cursor-pointer flex flex-col items-center justify-center text-center sm:h-96 h-72 w-full sm:w-auto"
          style={{ minWidth: 220 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
            style={{
              backgroundImage: "url('/assets/about-us-01.jpg')",
              opacity: 0.2,
            }}
          />
          <div className="absolute inset-0 bg-[#EEE5D8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full">
            <Handshake size={40} className="mb-4 text-[#2d3a4a]" />
            <h2 className="text-xl font-bold mb-2 text-[#2d3a4a]">Sponsors and Partnership</h2>
            <p className="text-[#2d3a4a]">Discover our sponsors and partnership opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTwoCard;
