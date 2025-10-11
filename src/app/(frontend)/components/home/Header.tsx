"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/ausco-logo-1.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Button } from "../ui/button";
import type { Media } from "@/payload-types";

type HeaderProps = {
  content: {
    title?: string | null;
    logo?: string | Media | null;
    navLinks?: { url?: string | null; label?: string | null }[] | null;
  };
  isHomePage?: boolean;
};

const Header = ({ content, isHomePage = false }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
            <img src={logo.src} alt="AUSCO logo" className="w-14" />
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
            <Button key={i} variant="link" asChild>
              <a className={clsx("text-sm", textColor)} href={link.url || "#"}>
                {link.label}
              </a>
            </Button>
          ))}
        </div>

        {isOpen && (
          <div className={clsx("xl:hidden absolute flex flex-col gap-2 w-full pt-20", textColor)}>
            {content.navLinks?.map((link, i) => (
              <a
                key={i}
                href={link.url || "#"}
                className={clsx("text-sm hover:underline block", textColor)}
              >
                {link.label}
              </a>
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
