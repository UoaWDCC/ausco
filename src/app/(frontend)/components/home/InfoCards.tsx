import { ArrowUpRight } from "lucide-react";
import { Button } from "@components/ui/button";
import { Facebook, Instagram, EnvelopeFill, FileEarmarkText } from "react-bootstrap-icons";

import Image from "next/image";
import { Media } from "@/payload-types";
import Link from "next/link";

type InfoCardsProps = {
  content: {
    aboutUs: {
      image: Media | string | null;
      description: string;
    };
    ourPeople: {
      image: Media | string | null;
      description: string;
    };
    contact: {
      image: Media | string | null;
    };
    links?:
      | {
          platform: string;
          url: string;
        }[]
      | null;
  };
};

const InfoCards = ({ content }: InfoCardsProps) => {
  const links = Object.fromEntries((content.links || []).map((link) => [link.platform, link.url]));

  return (
    <section className="bg-[var(--cream)] text-[var(--navy)] text-base py-32 px-10 flex items-center justify-center">
      <div className="flex flex-col md:flex-row md:gap-7 w-full md:w-auto">
        {/* 1/3: About Us Card */}
        <div className="w-full md:w-[22rem] md:bg-[var(--lightbeige)] md:rounded-xl md:p-8 flex flex-row md:flex-col items-center justify-start gap-3">
          {typeof content.aboutUs.image === "object" && content.aboutUs.image?.url && (
            <Image
              src={content.aboutUs.image.url}
              alt={content.aboutUs.image.alt || "About Us"}
              width={169}
              height={239}
              sizes="(max-width: 768px) 100vw, 20vw"
              className="w-[70px] h-[70px] md:w-[169px] md:h-[239px]"
            />
          )}
          <div className="flex flex-row md:flex-col items-center justify-between md:justify-start md:text-center gap-3 md:gap-5 flex-1 md:flex-none">
            <h1 className="!font-normal !text-2xl md:!text-4xl !m-0">About Us</h1>
            <div className="hidden md:block">{content.aboutUs.description}</div>
            <Link href="/about">
              <Button size="lg" className="mt-2 hidden md:flex" variant="navy">
                Read More
                <ArrowUpRight size={18} />
              </Button>
            </Link>
            <Link href="/about" className="md:hidden">
              <ArrowUpRight size={32} className="flex-shrink-0 text-[var(--navy)]" />
            </Link>
          </div>
        </div>

        {/* Divider between About Us and Our People */}
        <div className="w-full h-px bg-[var(--navy)] md:hidden"></div>

        {/* 2/3: Our People Card */}
        <div className="w-full md:w-[22rem] md:bg-[var(--lightbeige)] md:rounded-xl md:p-8 flex flex-row md:flex-col items-center justify-start gap-3">
          {typeof content.ourPeople.image === "object" && content.ourPeople.image?.url && (
            <Image
              src={content.ourPeople.image.url}
              alt={content.ourPeople.image.alt || "Our People"}
              width={169}
              height={239}
              sizes="(max-width: 768px) 100vw, 20vw"
              className="w-[70px] h-[70px] md:w-[169px] md:h-[239px] "
            />
          )}
          <div className="flex flex-row md:flex-col items-center justify-between md:justify-start md:text-center gap-3 md:gap-5 flex-1 md:flex-none">
            <h1 className="!font-normal !text-2xl md:!text-4xl !m-0">Our People</h1>
            <div className="hidden md:block">{content.ourPeople.description}</div>
            <Link href="/ourpeople">
              <Button size="lg" className="mt-2 hidden md:flex" variant="navy">
                Read More
                <ArrowUpRight size={18} />
              </Button>
            </Link>
            <Link href="/ourpeople" className="md:hidden">
              <ArrowUpRight size={32} className="flex-shrink-0 text-[var(--navy)]" />
            </Link>
          </div>
        </div>

        {/* Divider between Our People and Contact Us */}
        <div className="w-full h-px bg-[var(--navy)] md:hidden"></div>

        {/* 3/3: Reach Out To Us Card */}
        <div className="w-full md:w-[22rem] md:bg-[var(--lightbeige)] md:rounded-xl p-8 flex flex-col items-center justify-start gap-3">
          {typeof content.contact.image === "object" && content.contact.image?.url && (
            <Image
              src={content.contact.image.url}
              alt={content.contact.image.alt || "Our People"}
              width={169}
              height={239}
              sizes="(max-width: 768px) 100vw, 20vw"
              className="w-[70px] h-[70px] md:w-[169px] md:h-[239px] flex-shrink-0"
            />
          )}
          <div className="flex flex-col items-center text-center justify-between flex-1">
            <h1 className="!font-normal text-2xl md:!text-4xl !m-0">Contact Us</h1>
            <div className="flex flex-col gap-2 items-center">
              <a href={links.feedbackForm} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="navy">
                  <FileEarmarkText size={18} />
                  Feedback Form
                </Button>
              </a>
              <div className="flex flex-row gap-2 items-center">
                <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="navy">
                    <Instagram size={18} />
                    Instagram
                  </Button>
                </a>
                <a href={links.facebook} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="navy">
                    <Facebook size={18} />
                    Facebook
                  </Button>
                </a>
              </div>
              <a href={links.email} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="navy">
                  <EnvelopeFill size={18} />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
