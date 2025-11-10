//importing icons for contacts list, allows user to add more icons in the future
import { Mail, Instagram, Facebook, LucideIcon, ArrowUpRight } from "lucide-react";
import { getHomePage } from "@/actions/homeActions";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";

import Image from "next/image";
import { Media } from "@/payload-types";

type InfoCardsProps = {
  content: {
    aboutUs: {
      image: Media | string | null;
      description: string;
      url: string;
    };
    ourPeople: {
      image: Media | string | null;
      description: string;
      url: string;
    };
    contact: {
      image: Media | string | null;
    };
    links?: {
      platform: string;
      url: string;
    }[];
  };
};

const InfoCards = ({ content }: InfoCardsProps) => {
  //TODO: check x and y padding
  return (
    <section className="bg-[var(--cream)] text-[var(--navy)] text-base py-30 px-6 flex items-center justify-center">
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center justify-between h-full gap-6">
          {typeof content.aboutUs.image === "object" && content.aboutUs.image?.url && (
            <Image
              src={content.aboutUs.image.url}
              alt={content.aboutUs.image.alt || "About Us"}
              width={169}
              height={239}
            />
          )}
          <h1 className="!font-normal !text-4xl !m-0">About Us</h1>
          <div>{content.aboutUs.description}</div>
          <Button size="lg" className="">
            Read More
            <ArrowUpRight size={18} />
          </Button>
        </div>

        <div className="flex flex-col items-center justify-between h-full gap-6">
          {typeof content.ourPeople.image === "object" && content.ourPeople.image?.url && (
            <Image
              src={content.ourPeople.image.url}
              alt={content.ourPeople.image.alt || "Our People"}
              width={169}
              height={239}
            />
          )}
          <h1 className="!font-normal !text-4xl !m-0">Our People</h1>
          <div>{content.ourPeople.description}</div>
          <Button size="lg" className="">
            Read More
            <ArrowUpRight size={18} />
          </Button>
        </div>

        <div className="flex flex-col items-center justify-between h-full gap-6">
          <h1 className="!font-normal !text-4xl !m-0">Contact Us</h1>
          <div>{content.aboutUs.description}</div>
          <Button size="lg" className="">
            Read More
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;

// <div className="bg-[#EEEADE] w-10 h-30 rounded"></div>
// <div className="bg-[#EEEADE] w-10 h-30 rounded"></div>
// <div className="bg-[#EEEADE] w-10 h-30 rounded"></div>
