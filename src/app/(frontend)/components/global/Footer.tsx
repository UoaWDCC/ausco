import { JSX } from "react";
import Image from "next/image";
import { Facebook, Instagram, Spotify, Youtube } from "react-bootstrap-icons";

import { Media } from "@/payload-types";
import { Button } from "../ui/button";

type FooterProps = {
  content: {
    title: string;
    sections?:
      | {
          title: string;
          options?:
            | {
                label: string;
                url: string;
              }[]
            | null;
        }[]
      | null;
    primaryLogo?: Media | string | null;
    socialMedia?:
      | {
          platform: string;
          url: string;
        }[]
      | null;
  };
};

const iconMap: Record<string, JSX.Element> = {
  facebook: <Facebook className="w-7 h-7 md:w-5 md:h-5" />,
  youtube: <Youtube className="w-7 h-7 md:w-5 md:h-5" />,
  spotify: <Spotify className="w-7 h-7 md:w-5 md:h-5" />,
  instagram: <Instagram className="w-7 h-7 md:w-5 md:h-5" />,
};

const Footer = ({ content }: FooterProps) => {
  return (
    <footer
      id="footer"
      className="flex flex-col lg:flex-row lg:justify-between items-stretch py-12 pl-10 pr-22"
    >
      {/* LEFT: Logo + Title + Social Media Icons */}
      <div className="flex items-stretch gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 hidden md:block">
          {typeof content.primaryLogo === "object" && content.primaryLogo?.url && (
            <Image
              src={content.primaryLogo.url}
              alt={content.primaryLogo.alt || "Footer Logo"}
              width={136}
              height={136}
            />
          )}
        </div>

        <div className="flex flex-col flex-1 justify-between">
          {/* Title */}
          <div className="hidden md:block w-80 font-bold text-xl lg:text-xl whitespace-pre-line">
            {content.title}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 md:gap-4">
            {content.socialMedia?.map((social, index) => {
              const icon = iconMap[social.platform.toLowerCase()];

              return (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: divider between social icons and info columns*/}
      <div className="my-8 h-px w-full bg-(--navy) block md:hidden" />

      {/* RIGHT: Columns */}
      <div className="w-full grid grid-cols-2 gap-8 md:flex md:gap-24 lg:w-auto lg:ml-auto">
        {content.sections?.map((section, index) => (
          <div key={index} className={`flex flex-col ${index < 2 ? "" : "col-span-2"} md:w-auto`}>
            {/* Column Header */}
            <h3 className="font-bold mb-2">{section.title}</h3>

            {/* Column Options */}
            {section.options?.map((option, index) => (
              <Button key={index} variant="link" asChild className="mb-1">
                <a href={option.url}>{option.label}</a>
              </Button>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
