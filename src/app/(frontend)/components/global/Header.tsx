"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "../ui/button";
import type { Media } from "@/payload-types";

// TODO: add appropriate links into header options
const navBar = [
  {
    href: "/aboutus",
    label: "About Us",
    dropdown: [
      { href: "/ourstory", label: "Our Story" },
      { href: "https://www.google.com/", label: "Constitution" },
      { href: "https://www.google.com/", label: "Proof of Registration" },
    ],
  },
  { href: "/ourpeople", label: "Our People" },
  {
    href: "/concerts",
    label: "Concerts",
    dropdown: [
      { href: "/concerts/upcoming", label: "Upcoming Concerts" },
      { href: "/concerts/past", label: "Past Concerts" },
    ],
  },
  {
    href: "/gallery",
    label: "Gallery",
    dropdown: [
      { href: "/gallery/concerts", label: "Concert Photos" },
      { href: "/gallery/annual", label: "Annual Camp Photos" },
      { href: "/gallery/executive", label: "Executive Camp Photos" },
      { href: "/gallery/other", label: "Other Photos" },
    ],
  },
  { href: "#footer", label: "Contact Us" },
];

type NavItemProps = {
  item: (typeof navBar)[number];
  index: number;
  hoveredItem: number | null;
  setHoveredItem: (index: number | null) => void;
  scrolled: boolean;
  isHomePage: boolean;
};

const NavItem = ({
  item,
  index,
  hoveredItem,
  setHoveredItem,
  scrolled,
  isHomePage,
}: NavItemProps) => {
  const hasDropdown = Boolean(item.dropdown);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
      style={{
        color: isHomePage ? (scrolled ? "var(--navy)" : "var(--cream)") : "var(--navy)",
      }}
    >
      <div className="relative group">
        <Button variant="link" asChild className="flex items-center gap-1">
          <Link href={item.href} onMouseUp={(e) => e.currentTarget.blur()}>
            {item.label}
            {hasDropdown && <ChevronDown size={20} strokeWidth={2.1} />}
          </Link>
        </Button>

        {hasDropdown && (
          <>
            {/* Hover Buffer - prevent dropdown from flickering */}
            <div className="absolute left-0 top-full h-2 w-full" />

            <div
              className={clsx(
                "absolute left-0 top-full w-52 mt-2 py-2 px-4 rounded-lg bg-(--cream) z-50 tranition-colors duration-400",
                hoveredItem === index
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none",
                isHomePage ? (scrolled ? "bg-(--cream)" : "bg-transparent") : "bg-(--lightblue)",
              )}
            >
              {item.dropdown!.map((subitem, index) => (
                <div className="w-full text-left py-1" key={index}>
                  <Button variant="link" asChild>
                    <Link
                      href={subitem.href}
                      style={{
                        color: isHomePage
                          ? scrolled
                            ? "var(--navy)"
                            : "var(--cream)"
                          : "var(--navy)",
                        transition: "color 100ms",
                      }}
                      onMouseUp={(e) => e.currentTarget.blur()}
                    >
                      {subitem.label}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

type HeaderProps = {
  content: {
    title: string;
    primaryLogo?: Media | string | null;
    secondaryLogo?: Media | string | null;
  };
};

const Header = ({ content }: HeaderProps) => {
  const isHomePage = usePathname() === "/";
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Note: header height is fixed at h-28, adjusting this height will affect padding on all pages - see note on src\app\(frontend)\layout.tsx
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full h-28 px-6 flex justify-between items-center z-50 transition-colors duration-400",
        isHomePage ? (scrolled ? "bg-(--cream)" : "bg-transparent") : "bg-(--lightblue)",
      )}
    >
      {/* mobile menu hamburger */}
      <button
        type="button"
        className="flex h-10 w-10 lg:hidden"
        onClick={() => setMobileDropdown((open) => !open)}
      >
        <Menu className="h-6 w-6 text-(--navy)" strokeWidth={2} />
      </button>

      <Link
        href="/"
        onMouseUp={(e) => e.currentTarget.blur()}
        className="flex flex-row items-center"
      >
        {/* Primary Logo */}
        {typeof content.primaryLogo === "object" && content.primaryLogo?.url && (
          <Image
            src={content.primaryLogo.url}
            alt={content.primaryLogo.alt || "Primary Logo"}
            width={85}
            height={85}
            className={clsx(
              "absolute transition-opacity duration-400 ease-in-out",
              isHomePage ? (scrolled ? "opacity-100" : "opacity-0") : "opacity-100",
            )}
          />
        )}

        {/* Secondary Logo */}
        {typeof content.secondaryLogo === "object" && content.secondaryLogo?.url && (
          <Image
            src={content.secondaryLogo.url}
            alt={content.secondaryLogo.alt || "Secondary Logo"}
            width={85}
            height={85}
            className={clsx(
              "absolute transition-opacity duration-400 ease-in-out",
              isHomePage ? (scrolled ? "opacity-0" : "opacity-100") : "opacity-0",
            )}
          />
        )}
        <h1
          className="hidden md:block ml-20! mt-0! mb-0! font-semibold! text-lg! whitespace-pre-line transition-colors duration-400"
          style={{
            color: isHomePage ? (scrolled ? "var(--navy)" : "var(--cream)") : "var(--navy)",
          }}
        >
          {content.title}
        </h1>
      </Link>

      <nav className="hidden lg:flex flex-row gap-16 pr-6 items-center font-medium text-base">
        {navBar.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            index={index}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            scrolled={scrolled}
            isHomePage={isHomePage}
          />
        ))}
      </nav>
    </header>
  );
};

export default Header;
