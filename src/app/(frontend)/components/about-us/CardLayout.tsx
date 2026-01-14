import { BookText, Eye, Handshake, History } from "lucide-react";

import { Media } from "@/payload-types";

import DesktopCard from "./DesktopCard";
import PhoneCard from "./PhoneCard";

import { getImageUrl, getImageAlt } from "@/app/(frontend)/util/media";

type CardProps = {
  background: Media | string | null;
  title: string;
  summary: string;
  description?: string;
  sponsorLogos?: { logo: Media | string | null }[] | null;
};

type CardLayoutProps = {
  content: {
    vision: CardProps;
    story: CardProps;
    constitution: CardProps;
    sponsorsAndPartnerships: CardProps;
    constitutionLink: string;
  };
};

const CardLayout = ({ content }: CardLayoutProps) => {
  return (
    <section className="flex w-full flex-col">
      {/* Desktop Layout: md and above */}
      <div className="mx-auto hidden w-full max-w-6xl flex-col items-center gap-6 px-6 md:flex">
        {/* First Row: Vision & Story */}
        <div className="flex w-full flex-row items-center gap-6">
          <div className="w-3/5">
            <DesktopCard
              icon={<Eye className="h-12 w-12" />}
              background={getImageUrl(content.vision.background)}
              alt={getImageAlt(content.vision.background, "Vision Background")}
              title={content.vision.title}
              summary={content.vision.summary}
              description={content.vision.description}
              link={""}
            />
          </div>

          <div className="w-2/5">
            <DesktopCard
              icon={<History className="h-12 w-12" />}
              background={getImageUrl(content.story.background)}
              alt={getImageAlt(content.story.background, "Story Background")}
              title={content.story.title}
              summary={content.story.summary}
              description={`View ${content.story.title}`}
              link={"https://ausco.wdcc.co.nz/ourstory"}
            />
          </div>
        </div>

        {/* Second Row: Constitution & Sponsors/Partnerships */}
        <div className="flex w-full flex-row items-center gap-6">
          <div className="w-2/5">
            <DesktopCard
              icon={<BookText className="h-12 w-12" />}
              background={getImageUrl(content.constitution.background)}
              alt={getImageAlt(content.constitution.background, "Constitution Background")}
              title={content.constitution.title}
              summary={content.constitution.summary}
              description={`View ${content.constitution.title}`}
              link={content.constitutionLink}
            />
          </div>

          <div className="w-3/5">
            <DesktopCard
              icon={<Handshake className="h-12 w-12" />}
              background={getImageUrl(content.sponsorsAndPartnerships.background)}
              alt={getImageAlt(
                content.sponsorsAndPartnerships.background,
                "Sponsors and Partnerships Background",
              )}
              title={content.sponsorsAndPartnerships.title}
              summary={content.sponsorsAndPartnerships.summary}
              description={content.sponsorsAndPartnerships.description}
              link={""}
              sponsorLogos={content.sponsorsAndPartnerships.sponsorLogos}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout: below md */}
      <div className="flex w-full flex-col bg-(--lightblue) text-(--navy) md:hidden">
        <div className="flex flex-col">
          <PhoneCard type="vision" content={content.vision.description} />

          <div className="mx-6 h-px bg-(--navy) md:hidden" />

          <PhoneCard
            type="sponsors"
            content={content.sponsorsAndPartnerships.description}
            sponsorLogos={content.sponsorsAndPartnerships.sponsorLogos}
          />

          <div className="mx-6 h-px bg-(--navy) md:hidden" />

          <PhoneCard type="story" link="/ourstory" />

          <div className="mx-6 h-px bg-(--navy) md:hidden" />

          <PhoneCard type="constitution" link={content.constitutionLink} />
        </div>
      </div>
    </section>
  );
};

export default CardLayout;
