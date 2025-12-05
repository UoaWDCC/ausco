"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Button } from "../ui/button";
import type { Media } from "@/payload-types";
import Link from "next/link";

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
      { href: "/gallery/concert", label: "Concert Photos" },
      { href: "/gallery/annualcamp", label: "Annual Camp Photos" },
      { href: "/gallery/executivecamp", label: "Executive Camp Photos" },
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
          <Link href={item.href}>
            {item.label}
            {hasDropdown && <ChevronDown size={20} strokeWidth={2.1} />}
          </Link>
        </Button>

        {hasDropdown && (
          <>
            {/* hover buffer so dropdown doesn't flicker */}
            <div className="absolute left-0 top-full h-2 w-full" />

            <div
              className={clsx(
                "absolute left-0 top-full w-52 mt-2 py-2 px-4 rounded-lg bg-[var(--cream)] z-50 transition-opacity duration-400",
                hoveredItem === index
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none",
              )}
            >
              {item.dropdown!.map((sub, idx) => (
                <div className="w-full text-left py-1" key={idx}>
                  <Button variant="link" asChild>
                    <Link href={sub.href}>{sub.label}</Link>
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const router = useRouter();

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const textColor = scrolled ? "text-[var(--navy)]" : "text-[var(--cream)]";

  const navBg = clsx(
    scrolled ? (isHomePage ? "bg-[var(--beige)]" : "bg-[var(--lightblue)]") : "bg-transparent",
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // VINCENT'S HEADER HEIGHT FUNCTION (leave for now)
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty("--header-height", `${nav.offsetHeight}px`);
    };

    updateHeight(); // set initial value
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // TODO: add "whitespace-pre-line" to relevant textarea's className
  // TODO: add comment re. header height being fixed - future work might need to know
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full h-28 px-6 flex justify-between items-center z-50 transition-colors duration-400",
        isHomePage ? (scrolled ? "bg-[var(--cream)]" : "bg-transparent") : "bg-[var(--lightblue)]",
      )}
    >
      <Link href="/" className="flex flex-row items-center">
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
          className="!ml-20 !font-semibold !text-lg whitespace-pre-line transition-colors duration-400"
          style={{
            color: isHomePage ? (scrolled ? "var(--navy)" : "var(--cream)") : "var(--navy)",
          }}
        >
          {content.title}
        </h1>
      </Link>

      <nav className="flex flex-row gap-16 pr-6 items-center font-medium text-base transition-colors duration-400">
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

// TODO: REMOVE UNUSED IMPORTS/UPDATES FROM NAVBAR IMPORT WHICH IS NO LONGER USED.

// <header>
//   <nav
//     className={clsx(
//       "flex flex-col xl:flex-row absolute z-30 items-start xl:items-center justify-between py-4 sm:py-6 px-4 sm:px-12 w-full transition-colors duration-300",
//       scrolled ? "fixed shadow-md" : "absolute",
//       navBg,
//       isOpen && "min-h-[300px]",
//     )}
//   >
//     <div className="flex items-center justify-between w-full xl:w-auto mb-4 xl:mb-0">
//       <div
//         className="flex items-center space-x-4 cursor-pointer"
//         onClick={() => router.push("/")}
//       >
//         {typeof content.logo === "object" &&
//         content.logo !== null &&
//         "url" in content.logo &&
//         content.logo.url ? (
//           <Image
//             src={content.logo.url}
//             alt={content.logo.alt || "Logo"}
//             width={60}
//             height={60}
//           />
//         ) : (
//           <Image src="/assets/ausco-logo-1.png" alt="AUSCO logo" width={60} height={60} />
//         )}
//         <span className={clsx("text:md md:text-lg font-medium", textColor)}>
//           {(content.title || "").split("\n").map((line, i) => (
//             <span key={i}>
//               {line}
//               <br />
//             </span>
//           ))}
//         </span>
//       </div>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={clsx("xl:hidden z-20 cursor-pointer", textColor)}
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>
//     </div>

//     <div className={clsx("hidden xl:flex flex-wrap items-center gap-4 sm:gap-12", textColor)}>
//       {content.navLinks?.map((link, i) => (
//         <div
//           key={i}
//           className="relative group"
//           onMouseEnter={() => setHoveredItem(i)}
//           onMouseLeave={() => setHoveredItem(null)}
//         >
//           <Button variant="link" asChild>
//             <a className={clsx("text-sm", textColor)} href={link.url || "#"}>
//               <span className="flex items-center gap-1">
//                 {link.label}
//                 {link.subItem && link.subItem.length > 0 && <ChevronDown size={16} />}
//               </span>
//             </a>
//           </Button>
//           {link.subItem && link.subItem.length > 0 && hoveredItem === i && (
//             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-[var(--cream)] rounded-lg shadow-lg border border-gray-200 py-2 z-40 text-[var(--navy)]">
//               <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
//               {link.subItem.map((subLink, subIndex) => (
//                 <a
//                   key={subIndex}
//                   href={subLink.url || "#"}
//                   className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   {subLink.label}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>

//     {isOpen && (
//       <div className={clsx("xl:hidden absolute flex flex-col gap-2 w-full pt-20", textColor)}>
//         {content.navLinks?.map((link, i) => (
//           <div key={i}>
//             <a
//               href={link.url || "#"}
//               className={clsx("text-sm hover:underline block", textColor)}
//             >
//               {link.label}
//             </a>
//             {link.subItem && link.subItem.length > 0 && (
//               <div className="ml-4 mt-2 space-y-1">
//                 {link.subItem.map((subLink, subIndex) => (
//                   <a
//                     key={subIndex}
//                     href={subLink.url || "#"}
//                     className={clsx("text-xs block py-1", textColor)}
//                   >
//                     {subLink.label}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//         <a href="#footer" className={clsx("text-sm hover:underline block", textColor)}>
//           Contact Us
//         </a>
//       </div>
//     )}
//   </nav>
// </header>
