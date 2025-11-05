import Image from "next/image";
import { Facebook, Instagram, Spotify, Youtube } from "react-bootstrap-icons";
import { JSX } from "react";
import { Button } from "../ui/button";
import type { Media } from "@/payload-types";

type FooterProps = {
  content: {
    title: string;
    sections: {
      title: string;
      options: {
        label: string;
        url: string;
      }[];
    }[];
    primaryLogo: Media;
    socialMedia?: {
      platform: string;
      url: string;
    }[];
  };
};

const Footer = ({ content }: FooterProps) => {
  const iconMap: Record<string, JSX.Element> = {
    facebook: <Facebook width={20} height={20} />,
    youtube: <Youtube width={20} height={20} />,
    spotify: <Spotify width={20} height={20} />,
    instagram: <Instagram width={20} height={20} />,
  };

  return (
    <footer id="footer">
      <div className="flex flex-col lg:flex-row justify-between px-8 pt-16 lg:px-16 items-start h-auto lg:h-56 gap-20 lg:gap-0">
        {/* Logo + Title + Social Media Icons */}
        <div className="flex items-stretch gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            {content.primaryLogo?.url && (
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

        {/* 3 column sections */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 lg:gap-8">
          {content.sections?.map((section, secId) => (
            <div key={secId} className="w-full md:w-48 lg:w-60 flex flex-col">
              <h3 className="font-bold mb-1.5">{section.title}</h3>
              {section.links?.map((link, linkId) => (
                <Button key={linkId} variant="link" asChild className="mb-1.5">
                  <a href={link.url}>{link.label}</a>
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
