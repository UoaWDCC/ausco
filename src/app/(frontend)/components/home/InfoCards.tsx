//importing icons for contacts list, allows user to add more icons in the future
import { Mail, Instagram, Facebook, LucideIcon, Calendar, ArrowUpRight } from "lucide-react";
import { getLandingPage } from "@/actions/homeActions";
import { ReactNode } from "react";
import { AnimatedCard } from "./AnimatedCard";
import Image from "next/image";
import { Media } from "@/payload-types";

//define icon mapping type
type IconMapping = {
  [key: string]: LucideIcon;
};

//icon name-component map
const iconMapping: IconMapping = {
  mail: Mail,
  instagram: Instagram,
  facebook: Facebook,
};

//define contact structure
type Contact = {
  icon: string;
  text: string;
  href?: string | null;
};

//define infocard structure
type InfoCardProp = {
  title: string;
  description?: string;
  linkText?: string | null;
  linkHref?: string | null;
  contacts?: Contact[];
  getIcon?: (iconType: string) => ReactNode;
  image?: string | Media | null;
  isRegularCard?: boolean;
  cardIndex?: number;
};

//infocard component for all shared card features
const InfoCard = ({
  title,
  description,
  linkText,
  linkHref,
  contacts,
  getIcon,
  image,
  isRegularCard = false,
  cardIndex = 0,
}: InfoCardProp) => {
  return (
    <div className="flex flex-col justify-start w-full h-full rounded-[1rem] p-8 lg:p-10 text-center text-[var(--navy)] space-y-6">
      {/*card image */}
      <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-md flex items-center justify-center text-[0.7rem] uppercase tracking-wide text-[var(--navy)]/50 overflow-hidden">
        {image && typeof image === "object" && image.url ? (
          <Image
            src={image.url}
            alt={image.alt || title}
            fill
            className="object-contain rounded-md"
          />
        ) : (
          <div className="bg-[var(--navy)]/5 w-full h-full flex items-center justify-center">
            Illustration
          </div>
        )}
      </div>
      {/*card title*/}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl">{title}</h2>

      {/*card description and links*/}
      <div className="flex flex-col gap-4 sm:gap-2 lg:gap-3">
        {description && <p className="text-sm sm:text-base leading-relaxed">{description}</p>}
        {linkText && (
          <div className="flex justify-center">
            <a
              href={linkHref || "#"}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md border-2 border-[var(--navy)] text-[var(--navy)] font-medium transition-all duration-300 hover:bg-[var(--navy)] hover:!text-white"
            >
              {linkText}
            </a>
          </div>
        )}

        {/*displays contact information as a list if contacts exist*/}
        {contacts && contacts.length > 0 && (
          <ul className="sm:text-base flex flex-col items-center font-semibold p-2 lg:p-4 space-y-2">
            {contacts.map((contact, j) => (
              <li key={j} className="w-full flex justify-center">
                <a
                  href={contact.href || "#"}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border-2 border-[var(--navy)] text-[var(--navy)] font-medium transition-all duration-300 hover:bg-[var(--navy)] hover:!text-white [&_svg]:hover:!text-white"
                >
                  {getIcon && getIcon(contact.icon)}
                  <span>{contact.text}</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        {/*Read More button for regular cards*/}
        {isRegularCard && (
          <div className="flex justify-center">
            <a
              href={cardIndex === 0 ? "/about" : cardIndex === 1 ? "/ourpeople" : linkHref || "#"}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-[var(--navy)] text-[var(--navy)] font-medium transition-all duration-300 hover:bg-[var(--navy)] hover:!text-white [&_svg]:transition-colors [&_svg]:duration-300 hover:[&_svg]:!text-white"
            >
              Read More
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/*Feedback Form button for contact cards*/}
        {!isRegularCard && (
          <div className="flex flex-col gap-3 items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSVuVuaqbT4eyQiHUKv9_7Ic9Oa0FEDRmGEdS-ZPY-wpCMZg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-[var(--navy)] text-[var(--navy)] font-medium transition-all duration-300 hover:bg-[var(--navy)] hover:!text-white [&_svg]:transition-colors [&_svg]:duration-300 hover:[&_svg]:!text-white"
            >
              <Calendar className="w-4 h-4" />
              Feedback Form
            </a>

            {/*Social Media and Contact buttons*/}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ausco.uoa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-[var(--navy)] text-[var(--navy)] font-medium transition-all duration-300 hover:bg-[var(--navy)] hover:!text-white [&_svg]:transition-colors [&_svg]:duration-300 hover:[&_svg]:!text-white"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/ausco.ausa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-[var(--navy)] text-[var(--navy)] font-medium transition-all duration-300 hover:bg-[var(--navy)] hover:!text-white [&_svg]:transition-colors [&_svg]:duration-300 hover:[&_svg]:!text-white"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>

            <a
              href="mailto:chamberorchestra.ausa@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-[var(--navy)] text-[var(--navy)] font-medium transition-all duration-300 hover:bg-[var(--navy)] hover:!text-white [&_svg]:transition-colors [&_svg]:duration-300 hover:[&_svg]:!text-white"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

//mobile card component
const MobileInfoCard = ({
  title,
  image,
  href,
}: {
  title: string;
  image?: string | Media | null;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center gap-4 py-4 cursor-pointer hover:opacity-80 transition-opacity"
    >
      {/*image container*/}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-[var(--navy)]/5">
        {image && typeof image === "object" && image.url ? (
          <Image src={image.url} alt={image.alt || title} fill className="object-contain" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-[var(--navy)]/50">
            Image
          </div>
        )}
      </div>
      {/*title*/}
      <h3 className="text-3xl font-bold text-[var(--navy)] font-fraunces">{title}</h3>
    </a>
  );
};

//mobile contact card component
const MobileContactCard = ({
  title,
  image,
  linkHref,
}: {
  title: string;
  image?: string | Media | null;
  linkHref?: string | null;
}) => {
  return (
    <a
      href={linkHref || "#"}
      className="flex items-center gap-4 py-4 cursor-pointer hover:opacity-80 transition-opacity"
    >
      {/*image container*/}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-[var(--navy)]/5">
        {image && typeof image === "object" && image.url ? (
          <Image src={image.url} alt={image.alt || title} fill className="object-contain" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-[var(--navy)]/50">
            Image
          </div>
        )}
      </div>
      {/*title*/}
      <h3 className="text-3xl font-bold text-[var(--navy)] font-fraunces">{title}</h3>
    </a>
  );
};

//async component fetches/extracts card data from payload
const InfoCards = async () => {
  const {
    infoCards: { regularCards, contactCards },
  } = await getLandingPage();

  //function to fetch icon component
  //mail icon set as default/fallback
  const getIcon = (iconType: string): ReactNode => {
    const IconComponent = iconMapping[iconType] || Mail;
    return <IconComponent />;
  };

  //card rendering
  return (
    <section className="bg-[var(--cream)] py-24 lg:py-40 px-6">
      {/*mobile view*/}
      <div className="md:hidden max-w-2xl mx-auto">
        {regularCards.map((card, i) => (
          <div key={i}>
            <MobileInfoCard title={card.title} image={card.image} href="#" />
            {/*horizontal line after each card*/}
            <hr className="border-t border-[var(--navy)]/20" />
          </div>
        ))}

        {contactCards.map((card, i) => (
          <div key={`contact-${i}`}>
            <MobileContactCard title={card.title} image={card.image} linkHref={card.linkHref} />
            {/*horizontal line after each card except the last*/}
            {i < contactCards.length - 1 && <hr className="border-t border-[var(--navy)]/20" />}
          </div>
        ))}
      </div>

      {/*desktop view*/}
      <div className="hidden md:flex max-w-[93rem] mx-auto flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-10">
        {/*mapping for non-contact cards*/}
        {regularCards.map((card, i) => (
          <AnimatedCard
            key={i}
            index={i}
            className="w-[75%] md:w-[30%] min-h-[400px] sm:min-h-[680px] flex"
          >
            <InfoCard
              key={i}
              title={card.title}
              description={card.description}
              linkHref={card.linkHref}
              image={card.image}
              isRegularCard={true}
              cardIndex={i}
            />
          </AnimatedCard>
        ))}

        {/*contact card*/}
        {contactCards.map((card, i) => (
          <AnimatedCard
            key={`contact-${i}`}
            index={regularCards.length + i}
            className="w-[75%] md:w-[30%] min-h-[400px] sm:min-h-[680px] flex"
          >
            <InfoCard title={card.title} linkHref={card.linkHref} image={card.image} />
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};

//export component
export default InfoCards;
