import { getLandingPage } from "@/actions/homeActions";
import { Button } from "../ui/button";
import logo from "../../assets/ausco-logo-1.png";
import { ArrowUpRight } from "lucide-react";
import heroImage from "../../assets/hero.jpg";
import Image from "next/image";

const HeroSection = async () => {
  const [content] = await Promise.all([getLandingPage()]);

  return (
    <div className="relative overflow-hidden md:h-[max(880px,100dvh)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt="Hero background" fill className="object-cover" priority />
      </div>

      <div className="relative pt-32 z-20 flex flex-col items-center justify-center text-white mt-5 px-4 pb-8 md:pb-16 text-center">
        <img src={logo.src} alt="AUSCO logo" className="w-35 sm:w-40 md:w-45 mb-6" />
        <div className="space-y-6 max-w-3xl mx-auto flex flex-col items-center">
          {content && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {content.header.title}
              </h1>
              <h3 className="text-base md:text-lg">{content.header.content}</h3>
            </>
          )}
          <Button variant="beige" size="lg" className="">
            Join us
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
