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
      <div className="relative z-10 flex flex-col justify-evenly items-center text-white text-center h-full px-6 py-12">
        {/* Logo */}
        {typeof content.secondaryLogo === "object" && content.secondaryLogo?.url && (
          <Image
            src={content.secondaryLogo.url}
            alt={content.secondaryLogo.alt || "Hero Logo"}
            width={400}
            height={400}
          />
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{content.title}</h1>

        {/* Content */}
        <h3 className="text-base md:text-lg">{content.content}</h3>

        <Button variant="beige" size="lg" className="">
          Join us
          <ArrowUpRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
