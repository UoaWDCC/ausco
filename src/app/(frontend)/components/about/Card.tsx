import React from "react";
import { Media } from "@/payload-types";

export type CardProps = {
  icon: React.ReactNode;
  background: string | null;
  alt: string;
  title: string;
  summary: string;
  description: string;
  link?: string | undefined;
  sponsorLogos?: { logo: Media | string | null }[] | null;
};

const Card = ({
  icon,
  background,
  alt,
  title,
  summary,
  description,
  link,
  sponsorLogos,
}: CardProps) => {
  const isLinked = link ? link.trim() !== "" : false;
  const Wrapper: React.ElementType = isLinked ? "a" : "div"; // use <a> if link exists, else <div>

  // TODO: check css colour style on "headerblue"
  //       {...(isLinked && { href: link, target: "_blank", rel: "noopener noreferrer" })}

  return (
    <div className="group relative block w-full h-[400px] overflow-hidden rounded-lg text-(--headerblue) py-18 px-18">
      {/* On Display: Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* On Display: Content */}
      <div className="relative z-10 h-full flex flex-col items-center text-center">
        <div className="flex flex-col justify-between items-center h-1/2 w-full">
          <div className="flex justify-center">{icon}</div>

          <h1 className="font-semibold! text-4xl! m-0!">{title}</h1>
        </div>

        <div className="h-1/2 w-full flex items-start mt-4">
          {isLinked ? (
            <p className="text-base">{summary}</p>
          ) : (
            <p className="text-base">{summary}</p>
          )}
        </div>
      </div>

      {/* Hovered Background Colour */}
      <div className="absolute inset-0 group-hover:bg-(--navy) transition-colors duration-500" />
    </div>
  );
};

export default Card;

// {/* content */}
//       <div className="relative z-10 flex flex-col justify-center h-full text-center text-[var(--headerblue)] px-4 py-6 lg:p-12">
//         <div className="flex items-center justify-center mb-2 mt-6">
//           <div className="h-12 w-12 flex items-center justify-center text-[var(--headerblue)]">
//             {icon}
//           </div>
//         </div>

//         <div className="flex-1 flex flex-col items-center justify-center">
//           <h3 className="text-3xl lg:text-5xl font-bold mb-6 group-hover:hidden">{title}</h3>
//           {summary && (
//             <p className="text-[clamp(0.8rem,1vw,1rem)] leading-snug group-hover:hidden break-words whitespace-pre-line w-2/3">
//               {summary}
//             </p>
//           )}
//           {sponsorLogos && sponsorLogos.length > 0 && (
//             <div className="hidden group-hover:flex bg-[var(--headerblue)] py-3 px-6 mb-4 rounded-md gap-6 flex-wrap justify-center items-center mt-4">
//               {sponsorLogos.map((item, idx) => {
//                 let logoUrl: string | undefined;
//                 if (typeof item.logo === "string") logoUrl = item.logo;
//                 else if (item.logo?.url) logoUrl = item.logo.url;
//                 if (!logoUrl) return null;
//                 return (
//                   <img
//                     key={idx}
//                     src={logoUrl}
//                     className="h-8 w-auto object-contain"
//                     style={{ maxWidth: 64 }}
//                   />
//                 );
//               })}
//             </div>
//           )}
//           <p className={`hidden group-hover:flex break-words leading-snug whitespace-pre-line`}>
//             {description}
//           </p>
//         </div>
//       </div>
