"use client";

import { useState } from "react";

import Link from "next/link";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";

import { Media } from "@/payload-types";
import LogoCarousel from "./LogoCarousel";

type CardType = "vision" | "sponsors" | "story" | "constitution";

type PhoneCardProps = {
  type: CardType;
  content?: string;
  sponsorLogos?: { logo?: Media | string | null }[] | null;
  link?: string;
};

const CARD_MAP = {
  vision: {
    title: "Our Vision",
    collapsible: true,
  },
  sponsors: {
    title: "Sponsors & Partnerships",
    collapsible: true,
  },
  story: {
    title: "Our Story",
    collapsible: false,
  },
  constitution: {
    title: "Constitution",
    collapsible: false,
  },
};

const PhoneCard = ({ type, content, sponsorLogos, link }: PhoneCardProps) => {
  const card = CARD_MAP[type];
  const [open, setOpen] = useState(false);

  const isExternal = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  if (card.collapsible) {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between px-6 py-8 text-left text-2xl font-semibold sm:text-3xl"
        >
          <span>{card.title}</span>
          {open ? <X strokeWidth={3.25} size={30} /> : <ChevronDown strokeWidth={3.25} size={30} />}
        </button>

        {open && (
          <div className="flex flex-col gap-8 px-6 pb-8">
            <p className="text-sm">{content}</p>
            {sponsorLogos && <LogoCarousel logos={sponsorLogos} />}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {link && isExternal(link) ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between px-6 py-8 text-left text-2xl font-semibold sm:text-3xl"
        >
          <span>{card.title}</span>
          <ArrowUpRight strokeWidth={3.25} size={30} />
        </a>
      ) : (
        <Link
          href={link ?? "#"}
          className="flex w-full items-center justify-between px-6 py-8 text-left text-2xl font-semibold sm:text-3xl"
        >
          <span>{card.title}</span>
          <ArrowUpRight strokeWidth={3.25} size={30} />
        </Link>
      )}
    </>
  );
};

export default PhoneCard;
