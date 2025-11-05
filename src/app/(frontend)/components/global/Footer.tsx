import Image from "next/image";
import { Facebook, Instagram, Spotify, Youtube } from "react-bootstrap-icons";
import { JSX } from "react";
import { Button } from "../ui/button";
import type { Media } from "@/payload-types";

type FooterProps = {
  content: {
    title: string;
    sections:
      | {
          title: string;
          options:
            | {
                label: string;
                url: string;
              }[]
            | null;
        }[]
      | null;
    primaryLogo: string | Media;
  };
};

const Footer = ({ content }: FooterProps) => {
  const platformIconMap: Record<string, JSX.Element> = {
    facebook: <Facebook width={20} height={20} />,
    youtube: <Youtube width={20} height={20} />,
    spotify: <Spotify width={20} height={20} />,
    instagram: <Instagram width={20} height={20} />,
  };

  return (
    <footer id="footer">
      <div className="flex flex-col lg:flex-row justify-between px-8 pt-16 lg:px-16 items-start h-auto lg:h-56 gap-20 lg:gap-0">
        <div className="flex items-start gap-6">
          <div className="h-24 mt-2 lg:min-w-18">
            {/* Prevents Next errors by checking image has a valid URL */}
            {typeof content.logo === "object" && typeof content.logo.url === "string" && (
              <Image src={content.logo.url} alt={content.logo.alt} width={86} height={144} />
            )}
          </div>
          <div className="flex flex-col h-24 justify-evenly gap-1">
            <div className="w-50 font-bold mb-2 text-xl lg:text-xl">{content.title}</div>
            <div className="flex gap-3">
              {content.socials?.map((social, index) => (
                <a key={index} href={social.url}>
                  {platformIconMap[social.platform]}
                </a>
              ))}
            </div>
          </div>
        </div>
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
