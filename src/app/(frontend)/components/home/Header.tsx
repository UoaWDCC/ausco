"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/ausco-logo.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  isHomePage?: boolean;
};

const Header = ({ content, isHomePage = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const router = useRouter();

  const textColor = clsx(scrolled || !isHomePage ? "text-[var(--navy)]" : "text-white");

  const navBg = clsx(
    scrolled ? (isHomePage ? "bg-[var(--beige)]" : "bg-[var(--headerblue)]") : "bg-transparent",
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={clsx(
          "flex flex-col xl:flex-row absolute z-30 items-start xl:items-center justify-between py-4 sm:py-6 px-4 sm:px-12 w-full transition-colors duration-300",
          scrolled ? "fixed shadow-md" : "absolute",
          navBg,
          isOpen && "min-h-[300px]",
        )}
      >
        <div className="flex items-center justify-between w-full xl:w-auto mb-4 xl:mb-0">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            {typeof content.logo === "object" &&
            content.logo !== null &&
            "url" in content.logo &&
            content.logo.url ? (
              <Image
                src={content.logo.url}
                alt={content.logo.alt || "Logo"}
                width={60}
                height={60}
              />
            ) : (
              <Image src={logo} alt="AUSCO logo" width={60} height={60} />
            )}
            <span className={clsx("text:md md:text-lg font-medium", textColor)}>
              {(content.title || "").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx("xl:hidden z-20 cursor-pointer", textColor)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={clsx("hidden xl:flex flex-wrap items-center gap-4 sm:gap-12", textColor)}>
          {content.navLinks?.map((link, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Button variant="link" asChild>
                <a className={clsx("text-sm", textColor)} href={link.url || "#"}>
                  <span className="flex items-center gap-1">
                    {link.label}
                    {link.subItem && link.subItem.length > 0 && <ChevronDown size={16} />}
                  </span>
                </a>
              </Button>
              {link.subItem && link.subItem.length > 0 && hoveredItem === i && (
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
          <div className={clsx("xl:hidden absolute flex flex-col gap-2 w-full pt-20", textColor)}>
            {content.navLinks?.map((link, i) => (
              <div key={i}>
                <a
                  href={link.url || "#"}
                  className={clsx("text-sm hover:underline block", textColor)}
                >
                  {link.label}
                </a>
                {link.subItem && link.subItem.length > 0 && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.subItem.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.url || "#"}
                        className={clsx("text-xs block py-1", textColor)}
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#footer" className={clsx("text-sm hover:underline block", textColor)}>
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
