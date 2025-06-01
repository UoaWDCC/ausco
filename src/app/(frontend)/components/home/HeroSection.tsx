import { getLandingPage } from "@/actions/getLandingPage";
import Header from "@components/home/Header";
import { Button } from "../ui/button";
import logo from "../../assets/ausco-logo-1.png";
import { ArrowUpRight } from "lucide-react";
import heroImage from "../../assets/hero.jpg";
import Image from "next/image";
import { getHeader } from "@/actions/getHeader";

const HeroSection = async () => {
  const [content] = await Promise.all([getLandingPage()]);
  const headerContent = await getHeader();

  return (
    <div className="relative overflow-hidden md:h-[max(880px,100dvh)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt="Hero background" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 z-10" />

      {/* Header (fixed) */}
      <div className="relative z-30">
        <Header content={headerContent} />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-white mt-5 px-4 pb-8 md:pb-16 text-center">
        <img src={logo.src} alt="AUSCO logo" className="w-40 md:w-45 mb-6" />

        <div className="space-y-6 max-w-3xl">
          {content && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {content.header.title}
              </h1>
              <h3 className="text-base md:text-lg">{content.header.content}</h3>
            </>
          )}
          <Button className="flex items-center justify-center w-fit mx-auto gap-2 px-6 py-4 text-sm md:text-base bg-transparent text-[#f6f4ec] border-2 border-[#f6f4ec] hover:bg-white hover:text-black transition">
            Join us <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
