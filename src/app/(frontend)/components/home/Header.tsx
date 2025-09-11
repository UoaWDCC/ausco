"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "../ui/button";
import type { Media } from "@/payload-types";

type SubNavigateItem = {
  url?: string | null;
  label?: string | null;
};

type NavigateItem = {
  url?: string | null;
  label?: string | null;
  subItem?: SubNavigateItem[] | null;
};

type HeaderProps = {
  content: {
    title?: string | null;
    logo?: string | Media | null;
    navLinks?: NavigateItem[] | null;
  };
};

const Header = ({ content }: HeaderProps) => {
  const logo =
    typeof content.logo === "object" &&
    content.logo !== null &&
    "url" in content.logo
      ? content.logo
      : null;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      /* for devs: adjusting this y value will change how far user needs to scroll for header background to change */
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={clsx(
          "flex flex-col xl:flex-row absolute z-30 items-start xl:items-center justify-between py-4 sm:py-6 px-4 sm:px-12 w-full",
          scrolled ? "fixed bg-[#F6F4EC] shadow-md" : "absolute bg-transparent",
        )}
      >
        <div className="flex items-center justify-between w-full xl:w-auto mb-4 xl:mb-0">
          <div className="flex items-center space-x-4">
            {logo?.url && (
              <Image
                src={logo.url}
                alt={logo.alt || "Logo"}
                width={60}
                height={60}
              />
            )}
            <span
              className={clsx(
                "text:md md:text-lg font-medium",
                scrolled ? "text-[#264C84]" : "text-white",
              )}
              dangerouslySetInnerHTML={{ __html: content.title || "" }}
            />
          </div>

          {/*hamburger/cross menu that appears for small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "xl:hidden",
              scrolled ? "text-[#264C84]" : "text-white",
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={clsx(
            "hidden xl:flex flex-wrap items-center gap-4 sm:gap-12",
            scrolled ? "text-[#264C84]" : "text-white",
          )}
        >
          {content.navLinks?.map((link, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Button variant="link" asChild>
                <a
                  className={clsx(
                    "text-sm",
                    scrolled ? "text-[#264C84]" : "text-white",
                  )}
                  href={link.url || "#"}
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    {link.subItem && link.subItem.length > 0 && (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </a>
              </Button>

              {link.subItem &&
                link.subItem.length > 0 &&
                hoveredItem === i && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-[#F6F4EC] rounded-lg shadow-lg border border-gray-200 py-2 z-40 text-[#264C84]">
                    <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                    {link.subItem.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.url || "#"}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>

        {isOpen && (
          <div
            className={clsx(
              "xl:hidden mt-2 absolute flex flex-col gap-2 w-full",
              scrolled ? "text-[#264C84]" : "text-white",
            )}
          >
            {content.navLinks?.map((link, i) => (
              <div key={i}>
                <a
                  href={link.url || "#"}
                  className={clsx(
                    "text-sm hover:underline block",
                    scrolled ? "text-[#264C84]" : "text-white",
                  )}
                >
                  {link.label}
                </a>
                {link.subItem && link.subItem.length > 0 && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.subItem.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.url || "#"}
                        className={clsx(
                          "text-xs block py-1",
                          scrolled ? "text-[#264C84]" : "text-white",
                        )}
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;