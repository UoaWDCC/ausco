import { Eye, History, BookText, Handshake } from "lucide-react";

import { Media } from "@/payload-types";
import Card from "./Card";

type CardTileProps = {
  background: Media | string | null;
  title: string;
  summary: string;
  description?: string;
  sponsorLogos?: { logo: Media | string | null }[] | null;
};

type CardsSectionProps = {
  content: {
    vision: CardTileProps;
    story: CardTileProps;
    constitution: CardTileProps;
    sponsorsAndPartnerships: CardTileProps;
  };
};

const CardsSection = ({ content }: CardsSectionProps) => {
  const getImageUrl = (image: Media | string | null | undefined): string | null => {
    if (!image) return null; // handle undefined or null
    if (typeof image === "string") return image; // if it's already a string URL
    if (typeof image === "object" && image.url) return image.url; // if it's a Media object, extract the URL
    return null;
  };

  const getImageAlt = (image: Media | string | null | undefined, fallback: string): string => {
    if (!image) return fallback; // handle undefined or null
    if (typeof image === "object" && image?.alt) return image.alt; // if it's a Media object, extract the alt text
    return fallback;
  };

  return (
    <section className="flex w-full flex-col items-center gap-6">
      {/* First Row: Vision & Story */}
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="basis-13/21">
          <Card
            icon={<Eye className="h-12 w-12" />}
            background={getImageUrl(content.vision.background)}
            alt={getImageAlt(content.vision.background, "Vision Background")}
            title={content.vision.title}
            summary={content.vision.summary}
            description={content.vision.description}
            link={""}
          />
        </div>

        <div className="basis-8/20">
          <Card
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
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="basis-8/20">
          <Card
            icon={<BookText className="h-12 w-12" />}
            background={getImageUrl(content.constitution.background)}
            alt={getImageAlt(content.constitution.background, "Constitution Background")}
            title={content.constitution.title}
            summary={content.constitution.summary}
            description={`View ${content.constitution.title}`}
            link={
              "https://auckland.campuslabs.com/engage/organization/auckland-university-student-chamber-orchestra"
            }
          />
        </div>

        <div className="basis-13/21">
          <Card
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
    </section>
  );
};

export default CardsSection;
