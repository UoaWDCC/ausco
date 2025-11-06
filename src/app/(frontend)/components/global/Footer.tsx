import { JSX } from "react";
import Image from "next/image";
import { Facebook, Instagram, Spotify, Youtube } from "react-bootstrap-icons";

import type { Media } from "@/payload-types";
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
  facebook: <Facebook width={20} height={20} />,
  youtube: <Youtube width={20} height={20} />,
  spotify: <Spotify width={20} height={20} />,
  instagram: <Instagram width={20} height={20} />,
};

const Footer = ({ content }: FooterProps) => {
  return (
    <footer
      id="footer"
      className="flex flex-col lg:flex-row justify-between items-stretch py-12 pl-10 pr-[5.5rem]"
    >
      {/* LEFT: Logo + Title + Social Media Icons */}
      <div className="flex items-stretch gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
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
          <div className="w-60 font-bold text-xl lg:text-xl">{content.title}</div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
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

      {/* RIGHT: Columns */}
      <div className="flex flex-col md:flex-row items-start gap-24">
        {content.sections?.map((section, index) => (
          <div key={index} className="flex flex-col w-auto">
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
