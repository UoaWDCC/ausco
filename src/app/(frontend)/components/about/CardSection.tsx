import { Media } from "@/payload-types";
import { Eye, History, BookText, Handshake } from "lucide-react";
import Card from "./Card";

type CardTileProps = {
  background: Media | string | null;
  title: string;
  summary: string;
  description?: string;
  logos?: { logo: Media | string | null }[] | null;
};

type CardSectionProps = {
  content: {
    vision: CardTileProps;
    story: CardTileProps;
    constitution: CardTileProps;
    sponsorsAndPartnerships: CardTileProps;
  };
};

const CardSection = ({ content }: CardSectionProps) => {
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

  // TODO: abstract common classNames to the about us page (parent page)
  return (
    <section className="flex flex-col items-center pb-16 w-full max-w-6xl mx-auto gap-6">
      {/* First Row */}
      <div className="flex flex-row justify-between items-center gap-6">
        <Card
          icon={<Eye className="h-12 w-12" />}
          background={getImageUrl(content.vision.background)}
          alt={getImageAlt(content.vision.background, "Vision Background")}
          title={content.vision.title}
          summary={content.vision.summary}
          description={content.vision.description ?? "Vision Description"}
          link={""}
        />

        <Card
          icon={<History className="h-12 w-12" />}
          background={getImageUrl(content.story.background)}
          alt={getImageAlt(content.story.background, "Story Background")}
          title={content.story.title}
          summary={content.story.summary}
          description={`View Our Story`}
          link={"https://ausco.wdcc.co.nz/"} // TODO: change to our story page link - see if it tag needs to be changed.
        />
      </div>

      {/* Second Row */}
      <div className="flex flex-row justify-between items-center gap-6">
        <div className="basis-2/5">
          <Card
            icon={<BookText className="h-12 w-12" />}
            background={getImageUrl(content.constitution.background)}
            alt={getImageAlt(content.constitution.background, "Constitution Background")}
            title={content.constitution.title}
            summary={content.constitution.summary}
            description={`View Our Constitution`}
            link={
              "https://auckland.campuslabs.com/engage/organization/auckland-university-student-chamber-orchestra"
            }
          />
        </div>

        <div className="basis-3/5">
          <Card
            icon={<Handshake className="h-12 w-12" />}
            background={getImageUrl(content.sponsorsAndPartnerships.background)}
            alt={getImageAlt(
              content.sponsorsAndPartnerships.background,
              "Sponsors and Partnerships Background",
            )}
            title={content.sponsorsAndPartnerships.title}
            summary={content.sponsorsAndPartnerships.summary}
            description={
              content.sponsorsAndPartnerships.description ?? "Sponsors & Partnerships Description"
            }
            link={""}
            sponsorLogos={content.sponsorsAndPartnerships.logos}
          />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
