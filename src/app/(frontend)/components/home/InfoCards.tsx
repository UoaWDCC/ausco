//importing icons for contacts list, allows user to add more icons in the future
import { Mail, Instagram, Facebook, LucideIcon } from "lucide-react";
import { getLandingPage } from "@/actions/getLandingPage";
import { Media } from "@/payload-types";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";
import Image from "next/image";

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

// check if image is a Media object
function isMedia(image: string | Media | null | undefined): image is Media {
  return (
    typeof image === "object" &&
    image !== null &&
    "url" in image &&
    typeof image.url === "string" &&
    image.url.length > 0
  );
}

//define contact structure
type Contact = {
  icon: string;
  text: string;
  href?: string | null;
};

//define infocard structure
type InfoCardProp = {
  title: string;
  description: string;
  image?: string | Media | null;
  linkText?: string | null;
  linkHref?: string | null;
  contacts?: Contact[];
  getIcon?: (iconType: string) => ReactNode;
};

//infocard component for all shared card features
const InfoCard = ({
  title,
  description,
  image,
  linkText,
  linkHref,
  contacts,
  getIcon,
}: InfoCardProp) => {
  return (
    <div className="flex flex-col justify-start bg-[var(--beige)] w-[75%] md:w-[30%] min-h-[400px] sm:min-h-[680px] rounded-[1rem] p-8 lg:p-10 text-center text-[var(--navy)] space-y-5 lg:space-y-6 shadow-sm">
      {/*card image*/}
      {isMedia(image) && (
        <div className="flex justify-center items-center p-6 lg:p-8 pt-12 lg:pt-14">
          <Image
            src={image.url ?? ""}
            alt={image.alt ?? "Card illustration"}
            width={200}
            height={110}
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {/*card title*/}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl">{title}</h2>

      {/*card description and links*/}
      <div className="flex flex-col gap-4 sm:gap-2 lg:gap-3">
        <p className="text-sm sm:text-base leading-relaxed">{description}</p>
        {linkText && (
          <div className="flex justify-center w-full">
            <a
              href={linkHref || "#"}
              className="border-2 border-[var(--navy)] px-8 py-2 rounded-md text-[var(--navy)] no-underline"
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
                <div className="flex items-center gap-2">
                  {getIcon && getIcon(contact.icon)}
                  <Button variant="link" asChild>
                    <a href={contact.href || "#"}>{contact.text}</a>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

//async component fetches/extracts card data from payload
const InfoCards = async () => {
  const {
    infoCards: { regularCards, contactsCard },
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
      <div className="max-w-[93rem] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 lg:gap-10">
        {/*mapping for non-contact cards*/}
        {regularCards &&
          regularCards.map((card, i) => (
            <InfoCard
              key={i}
              title={card.title}
              description={card.description}
              image={card.image}
              linkText={card.linkText}
              linkHref={card.linkHref}
            />
          ))}

        {/*contact card*/}
        <InfoCard
          title={contactsCard.title}
          description={contactsCard.description}
          image={contactsCard.image}
          linkText={contactsCard.linkText}
          linkHref={contactsCard.linkHref}
          contacts={contactsCard.contacts || undefined}
          getIcon={getIcon}
        />
      </div>
    </section>
  );
};

//export component
export default InfoCards;
