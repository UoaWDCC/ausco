//importing icons for contacts list, allows user to add more icons in the future
import { ArrowUpRight } from "lucide-react";
import { getHomePage } from "@/actions/homeActions";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";
import { Facebook, Instagram, EnvelopeFill, FileEarmarkTextFill } from "react-bootstrap-icons";

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
      <div className="flex flex-row gap-7">
        {/* 1/3: About Us Card */}
        <div className="w-[22rem] bg-[#EEEADE] rounded-xl p-8 flex flex-col items-center justify-start gap-3">
          {typeof content.aboutUs.image === "object" && content.aboutUs.image?.url && (
            <Image
              src={content.aboutUs.image.url}
              alt={content.aboutUs.image.alt || "About Us"}
              width={169}
              height={239}
            />
          )}
          <div className="flex flex-col items-center text-center gap-5">
            <h1 className="!font-normal !text-4xl !m-0">About Us</h1>
            <div>{content.aboutUs.description}</div>
            <Button size="lg"  variant="navy">
              Read More
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>

        {/* 2/3: Our People Card */}
        <div className="w-[22rem] bg-[#EEEADE] rounded-xl p-8 flex flex-col items-center justify-start gap-3">
          {typeof content.ourPeople.image === "object" && content.ourPeople.image?.url && (
            <Image
              src={content.ourPeople.image.url}
              alt={content.ourPeople.image.alt || "Our People"}
              width={169}
              height={239}
            />
          )}
          <div className="flex flex-col items-center text-center gap-5">
            <h1 className="!font-normal !text-4xl !m-0">Our People</h1>
            <div>{content.ourPeople.description}</div>
            <Button size="lg"  variant="navy">
              Read More
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>

        {/* 3/3: Reach Out To Us Card */}
        <div className="w-[22rem] bg-[#EEEADE] rounded-xl p-8 flex flex-col items-center justify-start gap-3">
          {typeof content.contact.image === "object" && content.contact.image?.url && (
            <Image
              src={content.contact.image.url}
              alt={content.contact.image.alt || "Our People"}
              width={169}
              height={239}
            />
          )}
          <div className="flex flex-col items-center text-center justify-between flex-1">
            <h1 className="!font-normal !text-4xl !m-0">Contact Us</h1>
            <div className="flex flex-col gap-2 items-center">
              <Button size="lg" variant="navy">
                <FileEarmarkTextFill size={18} />
                Feedback Form
              </Button>
              <div className="flex flex-row gap-2 items-center">
                <Button size="lg" variant="navy">
                  <Instagram size={18} />
                  Instagram
                </Button>
                <Button size="lg" variant="navy">
                  <Facebook size={18} />
                  Facebook
                </Button>
              </div>
              <Button size="lg" variant="navy">
                <EnvelopeFill size={18} />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
