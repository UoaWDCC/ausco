"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";

import { Media } from "@/payload-types";
import { Button } from "../ui/button";
import { handleLinkClick } from "../../util/pointer";

const navBar = [
  {
    href: "/about-us",
    label: "About Us",
    dropdown: [
      { href: "/our-story", label: "Our Story" },
      { href: "", label: "Constitution" }, // href is dynamically updated, see updatedNavBar
      { href: "", label: "Proof of Registration" }, // href is dynamically updated, see updatedNavBar
    ],
  },
  { href: "/our-people", label: "Our People" },
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
      { href: "/gallery/concert", label: "Concert Photos" },
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
      <div className="group relative">
        <Button asChild variant="link" className="flex items-center gap-1">
          <Link href={item.href}>
            {item.label}
            {hasDropdown && (
              <ChevronDown
                size={20}
                strokeWidth={2.1}
                className={clsx(
                  "transition-transform duration-300 ease-in-out",
                  hoveredItem === index && "rotate-180",
                )}
              />
            )}
          </Link>
        </Button>

        {hasDropdown && (
          <>
            {/* Hover Buffer - prevent dropdown from flickering */}
            <div className="absolute top-full left-0 h-2 w-full" />

            <div
              className={clsx(
                "tranition-colors absolute top-full left-0 z-50 mt-2 w-52 rounded-lg bg-(--cream) px-4 py-2 duration-400",
                hoveredItem === index
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
                isHomePage ? (scrolled ? "bg-(--cream)" : "bg-transparent") : "bg-(--lightblue)",
              )}
            >
              {item.dropdown!.map((subitem, index) => (
                <div className="w-full py-1 text-left" key={index}>
                  <Button asChild variant="link">
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
    links: Record<string, string>;
  };
};

const Header = ({ content }: HeaderProps) => {
  const isHomePage = usePathname() === "/";
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updatedNavBar = navBar.map((item) => {
    if (!item.dropdown) return item;

    return {
      ...item,
      dropdown: item.dropdown.map((sub) => {
        if (sub.label === "Constitution") {
          return {
            ...sub,
            href: content.links.constitution,
          };
        }

        if (sub.label === "Proof of Registration") {
          return {
            ...sub,
            href: content.links.registration,
          };
        }

        return sub;
      }),
    };
  });

  // Note: header height is fixed at h-28, adjusting this height will affect padding on all pages - see note on src\app\(frontend)\layout.tsx
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 flex h-28 w-full items-center justify-between px-6 transition-colors duration-400",
        isHomePage ? (scrolled ? "bg-(--cream)" : "bg-transparent") : "bg-(--lightblue)",
      )}
    >
      <Link href="/" className="flex flex-row items-center" onClick={(e) => handleLinkClick(e)}>
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
            unoptimized={content.primaryLogo.url.endsWith(".svg")}
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
            unoptimized={content.secondaryLogo.url.endsWith(".svg")}
          />
        )}
        <h1
          className="mt-0! mb-0! ml-20! text-lg! font-semibold! whitespace-pre-line transition-colors duration-400"
          style={{
            color: isHomePage ? (scrolled ? "var(--navy)" : "var(--cream)") : "var(--navy)",
          }}
        >
          {content.title}
        </h1>
      </Link>

      <nav className="flex flex-row items-center gap-16 pr-6 text-base font-medium">
        {updatedNavBar.map((item, index) => (
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
