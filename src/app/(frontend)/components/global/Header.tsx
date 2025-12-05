"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Button } from "../ui/button";
import type { Media } from "@/payload-types";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";

type HeaderProps = {
  content: {
    title: string;
    primaryLogo?: Media | string | null;
    secondaryLogo?: Media | string | null;
  };
};

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

const Header = ({ content }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const router = useRouter();

  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

  const [open, setOpen] = useState(false);

  // TODO: add "whitespace-pre-line" to relevant textarea's className
  // TODO: add comment re. header height being fixed - future work might need to know
  // TODO: add appropriate links into header options
  return (
    <header className="w-full bg-(--cream) text-(--navy) h-28 px-6 flex justify-between items-center">
      <div className="flex flex-row items-center">
        {typeof content.primaryLogo === "object" && content.primaryLogo?.url && (
          <Image
            src={content.primaryLogo.url}
            alt={content.primaryLogo.alt || "Header Logo"}
            width={85}
            height={85}
          />
        )}
        <Link href="/">
          <div className="font-semibold text-lg whitespace-pre-line">{content.title}</div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-row gap-16 pr-6 items-center font-medium text-base">
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* 1/5: About Us */}
          <div className="relative group">
            <Button variant="link" asChild className="flex items-center gap-1">
              <Link href={navBar[0].href}>
                {navBar[0].label}
                <ChevronDown size={20} strokeWidth={2.1} />
              </Link>
            </Button>

            {/* Dropdown */}
            <div
              className={`
          absolute left-0 top-full w-52 bg-[var(--cream)]
          shadow-lg rounded-lg z-50 transition-opacity duration-150
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
            >
              {(navBar[0]?.dropdown || []).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block p-4 text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 2/5: Our People */}
        <Button variant="link" asChild>
          <Link href={navBar[1].href}>
            <div className="font-medium text-base">{navBar[1].label}</div>
          </Link>
        </Button>

        {/* 3/5: Concerts */}
        <Button variant="link" asChild className="flex items-center gap-1">
          <Link href={navBar[2].href}>
            <div className="font-medium text-base">{navBar[2].label}</div>
            <ChevronDown size={20} strokeWidth={2.1} />
          </Link>
        </Button>

        {/* 4/5: Gallery */}
        <Button variant="link" asChild className="flex items-center gap-1">
          <Link href={navBar[3].href}>
            <div className="font-medium text-base">{navBar[3].label}</div>
            <ChevronDown size={20} strokeWidth={2.1} />
          </Link>
        </Button>

        {/* 5/5: Contact Us */}
        <Button variant="link" asChild>
          <Link href={navBar[4].href}>
            <div className="font-medium text-base">{navBar[4].label}</div>
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;

// TODO: REMOVE UNUSED IMPORTS/UPDATES FROM NAVBAR IMPORT WHICH IS NO LONGER USED.

// {/* 1/5: About Us */}
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="px-0">
//                 <Button variant="link" asChild>
//                   <Link href="/aboutus">About Us</Link>
//                 </Button>
//               </NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid gap-2 w-52 p-2">
//                   <li className="flex flex-col gap-3">
//                     <NavigationMenuLink asChild>
//                       <Link href="/ourstory">Our Story</Link>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
//                           Constitution
//                         </a>
//                       </Button>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
//                           Proof of Registration
//                         </a>
//                       </Button>
//                     </NavigationMenuLink>
//                   </li>
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* 2/5: Our People */}
//         <Button variant="link" asChild>
//           <Link href="/ourpeople">Our People</Link>
//         </Button>

//         {/* 3/5: Concerts */}
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="px-0">
//                 <Button variant="link" asChild>
//                   <Link href="/concerts">Concerts</Link>
//                 </Button>
//               </NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid gap-2 w-52 p-2">
//                   <li className="flex flex-col gap-3">
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <Link href="/concerts/upcoming">Upcoming Concerts</Link>
//                       </Button>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <Link href="/concerts/past">Past Concerts</Link>
//                       </Button>
//                     </NavigationMenuLink>
//                   </li>
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* 4/5: Gallery */}
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="px-0">
//                 <Button variant="link" asChild>
//                   <Link href="/gallery">Gallery</Link>
//                 </Button>
//               </NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid gap-2 w-52 p-2">
//                   <li className="flex flex-col gap-3">
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <Link href="/gallery/concert">Concert Photos</Link>
//                       </Button>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <Link href="/gallery/annualcamp">Annual Camp Photos</Link>
//                       </Button>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <Link href="/gallery/executivecamp">Executive Camp Photos</Link>
//                       </Button>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                       <Button variant="link" asChild>
//                         <Link href="/gallery/other">Other Photos</Link>
//                       </Button>
//                     </NavigationMenuLink>
//                   </li>
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* 5/5: Contact Us */}
//         <Button variant="link" asChild>
//           <Link href="#footer">Contact Us</Link>
// </Button>

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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
