"use client";

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
    links: Record<string, string>;
  };
};

const iconMap: Record<string, JSX.Element> = {
  facebook: <Facebook className="h-7 w-7 lg:h-5 lg:w-5" />,
  youtube: <Youtube className="h-7 w-7 lg:h-5 lg:w-5" />,
  spotify: <Spotify className="h-7 w-7 lg:h-5 lg:w-5" />,
  instagram: <Instagram className="h-7 w-7 lg:h-5 lg:w-5" />,
};

const Footer = ({ content }: FooterProps) => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-stretch px-6 py-12 lg:flex-row lg:justify-between lg:pr-22 lg:pl-10"
    >
      {/* LEFT: Logo + Title + Social Media Icons */}
      <div className="flex items-stretch gap-4">
        {/* Logo */}
        <div className="hidden shrink-0 lg:block">
          {typeof content.primaryLogo === "object" && content.primaryLogo?.url && (
            <Image
              src={content.primaryLogo.url}
              alt={content.primaryLogo.alt || "Footer Logo"}
              width={136}
              height={136}
              unoptimized={content.primaryLogo.url.endsWith(".svg")}
            />
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between">
          {/* Title */}
          <div className="hidden w-80 text-xl font-bold whitespace-pre-line lg:block lg:text-xl">
            {content.title}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 lg:gap-4">
            {content.links &&
              Object.entries(content.links).map(([platform, url]) => {
                const icon = iconMap[platform];

                if (!icon) return null; // Skip any unknown platforms

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseUp={(e) => e.currentTarget.blur()}
                  >
                    {icon}
                  </a>
                );
              })}
          </div>
        </div>
      </div>

      {/* Mobile: divider between social icons and info columns*/}
      <div className="my-8 block h-px w-full bg-(--navy) lg:hidden" />

      {/* RIGHT: Columns */}
      <div className="grid w-full grid-cols-2 gap-8 lg:ml-auto lg:flex lg:w-auto lg:gap-14 xl:gap-24">
        {content.sections?.map((section, index) => (
          <div key={index} className={`flex flex-col ${index < 2 ? "" : "col-span-2"} lg:w-auto`}>
            {/* Column Header */}
            <h3 className="mb-2 font-bold">{section.title}</h3>

            {/* Column Options */}
            {section.options?.map((option, index) => (
              <Button key={index} variant="link" asChild className="mb-1">
                <a href={option.url} onMouseUp={(e) => e.currentTarget.blur()}>
                  {option.label}
                </a>
              </Button>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
