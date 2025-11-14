import { Media } from "@/payload-types";
import { Eye, History, BookText, Handshake } from "lucide-react";
import type { CardProps } from "./Card";
import Card from "./Card";

type AboutUsCardsProp = {
  content: {
    vision: CardProps;
    story: CardProps;
    constitution: CardProps;
    sponsorsAndPartnerships: CardProps;
  };
};

const AboutUsCards = ({ content }: AboutUsCardsProp) => {
  const getImageUrl = (imageField: string | Media | null | undefined): string | undefined => {
    if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
      return imageField.url ?? undefined;
    }
    if (typeof imageField === "string") {
      return imageField;
    }
    return undefined;
  };

  // TODO: abstract common classNames to the about us page (parent page)
  return (
    <section className="flex flex-col items-center px-6 pb-16 w-full max-w-6xl mx-auto gap-6">
      {/* First Row */}
      <div className="flex flex-row justify-between items-center gap-6">
        <Card
          image={getImageUrl(content.visionCard?.["background-image"])}
          alt={
            typeof content.visionCard?.["background-image"] === "object"
              ? content.visionCard["background-image"].alt
              : "Vision Background"
          }
          icon={<Eye className="h-12 w-12" />}
          title={content.visionCard?.title || ""}
          shortDesc={content.visionCard?.["short-desc"]}
          fullDesc={content.visionCard?.["full-desc"]}
          size="md:w-3/5 lg:w-3/5"
        />

        <Card
          image={getImageUrl(content.historyCard?.["background-image"])}
          alt={
            typeof content.historyCard?.["background-image"] === "object"
              ? content.historyCard["background-image"].alt
              : "History Background"
          }
          icon={<History className="h-12 w-12" />}
          title={content.historyCard?.title || ""}
          shortDesc={content.historyCard?.["short-desc"]}
          fullDesc={content.historyCard?.["full-desc"]}
          size="md:w-2/5 lg:w-2/5"
          link="/"
        />
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

export default AboutUsCards;
