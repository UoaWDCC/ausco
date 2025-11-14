import { Media } from "@/payload-types";
import { Eye, History, BookText, Handshake } from "lucide-react";
import Card from "./Card";

type CMSCard = {
  background: Media | string | null;
  title: string;
  summary: string;
  description: string;
  sponsorLogos?: (Media | string | null)[] | null;
};

type CardSectionProp = {
  content: {
    vision: CMSCard;
    story: CMSCard;
    constitution: CMSCard;
    sponsorsAndPartnerships: CMSCard;
  };
};

const CardSection = ({ content }: CardSectionProp) => {
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
    <section className="flex flex-col items-center px-6 pb-16 w-full max-w-6xl mx-auto gap-6">
      {/* First Row */}
      <div className="flex flex-row justify-between items-center gap-6">
        <div className="basis-3/5">
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

        <div className="basis-2/5">
          <Card
            icon={<History className="h-12 w-12" />}
            background={getImageUrl(content.story.background)}
            alt={getImageAlt(content.story.background, "Story Background")}
            title={content.background.title}
            summary={content.background.summary}
            description={content.background.description}
            link={""}
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-row justify-between items-center gap-6">
        {/* <Card
            image={getImageUrl(content.leftBox?.backgroundImage)}
            alt={
              typeof content.leftBox?.backgroundImage === "object"
                ? (content.leftBox.backgroundImage?.alt ?? "Constitution Background")
                : "Constitution Background"
            }
            icon={<BookText className="h-12 w-12" />}
            title={content.leftBox?.title || ""}
            shortDesc={content.leftBox?.shortDescription}
            fullDesc={content.leftBox?.fullText}
            size="md:w-2/5 lg:w-2/5"
            link="https://auckland.campuslabs.com/engage/organization/auckland-university-student-chamber-orchestra"
          />

          <Card
            image={getImageUrl(content.rightBox?.backgroundImage)}
            alt={
              typeof content.rightBox?.backgroundImage === "object"
                ? (content.rightBox.backgroundImage?.alt ?? "Sponsorship Background")
                : "Sponsorship Background"
            }
            icon={<Handshake className="h-12 w-12" />}
            title={content.rightBox?.title || ""}
            shortDesc={content.rightBox?.shortDescription}
            fullDesc={content.rightBox?.fullText}
            sponsorLogos={content.rightBox?.sponsorLogos || []}
            size="md:w-3/5 lg:w-3/5"
          /> */}
      </div>
    </section>
  );
};

export default CardSection;
