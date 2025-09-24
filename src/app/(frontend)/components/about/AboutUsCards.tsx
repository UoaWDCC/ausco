import { Media } from "@/payload-types";
import { Eye, History, BookText, Handshake } from "lucide-react";
import { getAboutUsCards } from "@/actions/getAboutUsCards";

const AboutUsCards = async () => {
  const content = await getAboutUsCards();

  const getImageUrl = (imageField: string | Media | null | undefined): string | undefined => {
    if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
      return imageField.url ?? undefined;
    }
    if (typeof imageField === "string") {
      return imageField;
    }
    return undefined;
  };

  const Card = ({
    image,
    alt,
    icon,
    title,
    shortDesc,
    fullDesc,
    sponsorLogos,
    size = "md:w-1/2 lg:w-1/2",
  }: {
    image: string | undefined;
    alt: string;
    icon: React.ReactNode;
    title: string;
    shortDesc?: string;
    fullDesc?: string;
    sponsorLogos?: any[];
    size?: string;
  }) => (
    <div className={`group relative w-full ${size} h-[400px] rounded-lg overflow-hidden shadow-sm`}>
      {image && (
        <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      )}

      {/* overlays */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300" />
      <div className="absolute inset-0 group-hover:bg-[var(--hovercardblue)] transition-colors duration-300" />

      {/* content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-center text-[var(--headerblue)] px-4 py-6 lg:p-12">
        {/* icon section (fixed top) */}
        <div className="flex items-center justify-center mb-6 mt-6">
          <div className="h-12 w-12 flex items-center justify-center text-[var(--headerblue)]">
            {icon}
          </div>
        </div>

        {/* middle (flexible) */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-3xl lg:text-5xl font-bold mb-4 group-hover:hidden">{title}</h3>

          {shortDesc && (
            <p className="text-sm md:text-base group-hover:hidden break-words whitespace-pre-line">
              {shortDesc}
            </p>
          )}

          {fullDesc && (
            <p className="hidden group-hover:flex text-sm md:text-base break-words whitespace-pre-line">
              {fullDesc}
            </p>
          )}
        </div>

        {/* bottom (optional logos) */}
        {sponsorLogos && sponsorLogos.length > 0 && (
          <div className="hidden group-hover:flex flex-wrap justify-center items-center gap-2 mt-4">
            {sponsorLogos.map((item: any, idx: number) => {
              const logo = item.logo;
              const logoUrl = typeof logo === "object" && logo?.url ? logo.url : undefined;
              if (!logoUrl) return null;
              return (
                <img
                  key={idx}
                  src={logoUrl}
                  className="h-8 w-auto object-contain"
                  style={{ maxWidth: 64 }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#F6F4EC]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* first row */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <Card
            image={getImageUrl(content.visionCard?.["background-image"])}
            alt={
              typeof content.visionCard?.["background-image"] === "object"
                ? content.visionCard["background-image"].alt
                : "Vision Background"
            }
            icon={<Eye className="h-8 w-8" />} // all icons same base size
            title={content.visionCard?.title}
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
            icon={<History className="h-8 w-8" />}
            title={content.historyCard?.title}
            shortDesc={content.historyCard?.["short-desc"]}
            fullDesc={content.historyCard?.["full-desc"]}
            size="md:w-2/5 lg:w-2/5"
          />
        </div>

        {/* second row */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <Card
            image={getImageUrl(content.leftBox?.backgroundImage)}
            alt={
              typeof content.leftBox?.backgroundImage === "object"
                ? content.leftBox.backgroundImage.alt
                : "Constitution Background"
            }
            icon={<BookText className="h-8 w-8" />}
            title={content.leftBox?.title}
            shortDesc={content.leftBox?.shortDescription}
            fullDesc={content.leftBox?.fullText}
            size="md:w-2/5 lg:w-2/5"
          />

          <Card
            image={getImageUrl(content.rightBox?.backgroundImage)}
            alt={
              typeof content.rightBox?.backgroundImage === "object"
                ? content.rightBox.backgroundImage.alt
                : "Sponsorship Background"
            }
            icon={<Handshake className="h-8 w-8" />}
            title={content.rightBox?.title}
            shortDesc={content.rightBox?.shortDescription}
            fullDesc={content.rightBox?.fullText}
            sponsorLogos={content.rightBox?.sponsorLogos}
            size="md:w-3/5 lg:w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsCards;
