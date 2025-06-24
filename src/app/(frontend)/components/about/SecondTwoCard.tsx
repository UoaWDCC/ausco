"use client";
import { BookText, Handshake } from "lucide-react";
import { useEffect, useState } from "react";

async function fetchSecondTwoCard() {
  const res = await fetch("/api/globals/second-two-card");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

const SecondTwoCard = () => {
  const [data, setData] = useState<any>(null);
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    fetchSecondTwoCard().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <div className="w-full bg-[#F6F4EC] py-10">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl mx-auto gap-6">
        <a
          href=""
          className="relative flex-1 max-w-[40%] min-w-[180px] sm:h-96 h-64 rounded-lg overflow-hidden group cursor-pointer block flex flex-col items-center justify-center text-center w-full sm:w-auto mb-4 sm:mb-0"
          style={{ minWidth: 180 }}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
              opacity: 0.2,
            }}
          />
          <div className="absolute inset-0 bg-[#6C96CD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-6 w-full space-y-4">
            <BookText size={40} className="mb-4 text-[#2d3a4a] mt-2" />
            <h2 className="text-xl font-bold mb-2 text-[#2d3a4a]">{data.leftBox.title}</h2>
            <p className="text-[#2d3a4a] mb-4">
              {hovered === "left" ? data.leftBox.fullText : data.leftBox.shortDescription}
            </p>
            <span className="text-[#2d3a4a] underline font-medium">Read more</span>
          </div>
        </a>
        <div
          className="relative flex-[1.3] min-w-[220px] sm:h-96 h-64 rounded-lg overflow-hidden group cursor-pointer flex flex-col items-center justify-center text-center w-full sm:w-auto"
          style={{ minWidth: 220 }}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
              opacity: 0.2,
            }}
          />
          <div className="absolute inset-0 bg-[#EEE5D8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full">
            <Handshake size={40} className="mb-4 text-[#2d3a4a] mt-6" />
            <h2 className="text-xl font-bold mb-2 text-[#2d3a4a]">{data.rightBox.title}</h2>
            {/* Sponsor Logos BELOW the title */}
            {Array.isArray(data.rightBox.sponsorLogos) && data.rightBox.sponsorLogos.length > 0 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
                {data.rightBox.sponsorLogos.map((item: any, idx: number) => {
                  const logo = item.logo;
                  const logoUrl = typeof logo === "object" && logo?.url ? logo.url : undefined;
                  if (!logoUrl) return null;
                  return (
                    <img
                      key={idx}
                      src={logoUrl}
                      alt="Sponsor logo"
                      className="h-8 w-auto object-contain"
                      style={{ maxWidth: 64 }}
                    />
                  );
                })}
              </div>
            )}
            <p className="text-[#2d3a4a]">
              {hovered === "right" ? data.rightBox.fullText : data.rightBox.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTwoCard;
