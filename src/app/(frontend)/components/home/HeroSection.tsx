import { Media } from "@/payload-types";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  content: {
    secondaryLogo: Media | string | null;
    background: Media | string | null;
    title: string;
    content: string;
  };
};

const HeroSection = async ({ content }: HeroProps) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {typeof content.background === "object" && content.background?.url && (
          <Image
            src={content.background.url}
            alt={content.background.alt || "Home Page Hero"}
            fill
            priority
            className="object-cover w-full h-full"
          />
        )}
      </div>

      {/* Foreground Content */}
      <div
        className="relative z-10 flex flex-col justify-evenly items-center text-center text-white h-full px-6 py-15"
        style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}
      >
        {/* Logo */}
        {typeof content.secondaryLogo === "object" && content.secondaryLogo?.url && (
          <Image
            src={content.secondaryLogo.url}
            alt={content.secondaryLogo.alt || "Hero Logo"}
            width={280}
            height={280}
          />
        )}

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-light leading-tight !mt-5 !mb-2.5">
          {content.title}
        </h1>

        {/* Content */}
        <h3 className="text-base md:text-lg w-[60%]">{content.content}</h3>

        <Button variant="beige" size="lg" className="mt-5">
          Join us
          <ArrowUpRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
