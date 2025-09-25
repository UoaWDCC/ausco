"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Media } from "@/payload-types";

interface CardProps {
  image?: string;
  alt: string;
  icon: React.ReactNode;
  title: string;
  shortDesc?: string;
  fullDesc?: string;
  sponsorLogos?: { logo: string | Media; id?: string | null }[] | null;
  size?: string;
  link?: string;
}

const Card = ({
  image,
  alt,
  icon,
  title,
  shortDesc,
  fullDesc,
  sponsorLogos,
  size = "md:w-1/2 lg:w-1/2",
  link,
}: {
  image: string | undefined;
  alt: string;
  icon: React.ReactNode;
  title: string;
  shortDesc?: string;
  fullDesc?: string;
  sponsorLogos?: { logo: string | Media; id?: string | null }[] | null;
  size?: string;
  link?: string;
}) => {
  const Wrapper = link ? "a" : "div"; // use <a> if link exists, else <div>
  const isSmallCard = size === "md:w-2/5 lg:w-2/5";

  return (
    <Wrapper
      href={link}
      className={`group relative w-full ${size} h-[400px] rounded-lg overflow-hidden shadow-sm ${link ? "cursor-pointer" : ""}`}
    >
      {image && (
        <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      )}

      {/* overlays */}
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-colors duration-300" />
      <div className="absolute inset-0 group-hover:bg-[var(--hovercardblue)] transition-colors duration-300" />

      {/* content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-center text-[var(--headerblue)] px-4 py-6 lg:p-12">
        <div className="flex items-center justify-center mb-2 mt-6">
          <div className="h-12 w-12 flex items-center justify-center text-[var(--headerblue)]">
            {icon}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <h3 className="text-3xl lg:text-5xl font-bold mb-6 group-hover:hidden">{title}</h3>
          {shortDesc && (
            <p className="text-sm md:text-base group-hover:hidden break-words whitespace-pre-line w-2/3">
              {shortDesc}
            </p>
          )}
          {sponsorLogos && sponsorLogos.length > 0 && (
            <div className="hidden group-hover:flex bg-[var(--headerblue)] py-3 px-6 mb-4 rounded-md gap-6 flex-wrap justify-center items-center mt-4">
              {sponsorLogos.map((item, idx) => {
                let logoUrl: string | undefined;
                if (typeof item.logo === "string") logoUrl = item.logo;
                else if (item.logo?.url) logoUrl = item.logo.url;
                if (!logoUrl) return null;
                return (
                  <img
                    key={idx}
                    src={logoUrl}
                    className="h-8 w-auto object-contain"
                    style={{ maxWidth: 64 }}
                  />
                );
              })}
            </div>
          )}
          {fullDesc && (
            <p
              className={`${isSmallCard ? "text-4xl" : "text-sm md:text-base"} hidden group-hover:flex break-words whitespace-pre-line`}
            >
              {fullDesc}
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
