"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type HeaderProps = {
  content: {
    title?: string;
    logo?: { url: string; alt?: string };
    navLinks?: { url?: string; label?: string }[];
  };
};

const Header = ({ content }: HeaderProps) => {
  const logo =
    typeof content.logo === "object" && content.logo !== null && "url" in content.logo
      ? content.logo
      : null;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex flex-col xl:flex-row absolute z-30 items-start xl:items-center justify-between py-4 sm:py-6 px-4 sm:px-12 w-full">
        <div className="flex items-center justify-between w-full xl:w-auto mb-4 xl:mb-0">
          <div className="flex items-center space-x-4">
            {logo?.url && <Image src={logo.url} alt={logo.alt || "Logo"} width={60} height={60} />}
            <span
              className="text-lg font-medium"
              dangerouslySetInnerHTML={{ __html: content.title || "" }}
            />
          </div>
          {/*hamburger/cross menu that appears for small screens */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="hidden xl:flex flex-wrap items-center gap-4 sm:gap-12">
          {content.navLinks?.map((link, i) => (
            <a key={i} href={link.url || "#"} className="text-sm hover:underline block">
              {link.label}
            </a>
          ))}
        </div>
        {isOpen && (
          <div className="xl:hidden mt-2 ābsolute flex flex-col gap-2 w-full">
            {content.navLinks?.map((link, i) => (
              <a key={i} href={link.url || "#"} className="text-sm hover:underline block">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
