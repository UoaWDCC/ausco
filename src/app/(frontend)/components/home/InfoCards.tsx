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

const LIGHT_BEIGE =
  "oklch(0.9369 0.0165 91.56)"; /* #EEEADE - This is not the same as the globally declared beige */

const InfoCards = ({ content }: InfoCardsProps) => {
  const links = Object.fromEntries((content.links || []).map((link) => [link.platform, link.url]));

  return (
    <section className="flex items-center justify-center bg-(--cream) px-10 py-32 text-base text-(--navy)">
      <div className="flex flex-row gap-7">
        {/* 1/3: About Us Card */}
        <div
          className="flex w-88 flex-col items-center justify-start gap-3 rounded-xl p-8"
          style={{ backgroundColor: LIGHT_BEIGE }}
        >
          {typeof content.aboutUs.image === "object" && content.aboutUs.image?.url && (
            <Image
              src={content.aboutUs.image.url}
              alt={content.aboutUs.image.alt || "About Us"}
              width={169}
              height={239}
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          )}
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="m-0! text-4xl! font-normal!">About Us</h1>
            <div>{content.aboutUs.description}</div>
            <Link href="/aboutus">
              <Button size="lg" className="mt-2" variant="navy">
                Read More
                <ArrowUpRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

        {/* 2/3: Our People Card */}
        <div
          className="flex w-88 flex-col items-center justify-start gap-3 rounded-xl p-8"
          style={{ backgroundColor: LIGHT_BEIGE }}
        >
          {typeof content.ourPeople.image === "object" && content.ourPeople.image?.url && (
            <Image
              src={content.ourPeople.image.url}
              alt={content.ourPeople.image.alt || "Our People"}
              width={169}
              height={239}
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          )}
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="m-0! text-4xl! font-normal!">Our People</h1>
            <div>{content.ourPeople.description}</div>
            <Link href="/ourpeople">
              <Button size="lg" className="mt-2" variant="navy">
                Read More
                <ArrowUpRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

        {/* 3/3: Reach Out To Us Card */}
        <div
          className="flex w-88 flex-col items-center justify-start gap-3 rounded-xl p-8"
          style={{ backgroundColor: LIGHT_BEIGE }}
        >
          {typeof content.contact.image === "object" && content.contact.image?.url && (
            <Image
              src={content.contact.image.url}
              alt={content.contact.image.alt || "Our People"}
              width={169}
              height={239}
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          )}
          <div className="flex flex-1 flex-col items-center justify-between text-center">
            <h1 className="m-0! text-4xl! font-normal!">Contact Us</h1>
            <div className="flex flex-col items-center gap-2">
              <a href={links.feedbackForm} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="navy">
                  <FileEarmarkText size={18} />
                  Feedback Form
                </Button>
              </a>
              <div className="flex flex-row items-center gap-2">
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
