import { getHomePage } from "@/actions/homeActions";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroSection = async () => {
  const [content] = await Promise.all([getHomePage()]);

  return (
    <div className="relative overflow-hidden md:h-[max(880px,100dvh)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/homepage-hero.svg"
          alt="Hero background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative pt-32 z-20 flex flex-col items-center justify-center text-white mt-5 px-4 pb-8 md:pb-16 text-center">
        <img src="/images/ausco-logo.png" alt="AUSCO logo" className="w-35 sm:w-40 md:w-40 mb-4" />
        <div className="space-y-6 max-w-[52rem] mx-auto flex flex-col items-center">
          {content && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {content.header.title}
              </h1>
              <h3 className="text-base md:text-lg">{content.header.content}</h3>
            </>
          )}
          <Button variant="beige" size="lg" className="mt-3">
            Join us
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
