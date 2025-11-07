//importing icons for contacts list, allows user to add more icons in the future
import { Mail, Instagram, Facebook, LucideIcon } from "lucide-react";
import { getHomePage } from "@/actions/homeActions";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";
import { AnimatedCard } from "./AnimatedCard";

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
  description: string;
  linkText?: string | null;
  linkHref?: string | null;
  contacts?: Contact[];
  getIcon?: (iconType: string) => ReactNode;
};

//infocard component for all shared card features
const InfoCard = ({ title, description, linkText, linkHref, contacts, getIcon }: InfoCardProp) => {
  return (
    <div className="flex flex-col justify-start w-full min-h-full rounded-[1rem] p-8 lg:p-10 text-center text-[var(--navy)] space-y-6">
      {/*card image placeholder*/}
      <div className="w-full h-40 sm:h-48 rounded-md bg-[var(--navy)]/5 flex items-center justify-center text-[0.7rem] uppercase tracking-wide text-[var(--navy)]/50">
        Illustration
      </div>
      {/*card title*/}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl">{title}</h2>

      {/*card description and links*/}
      <div className="flex flex-col gap-4 sm:gap-2 lg:gap-3">
        <p className="text-sm sm:text-base leading-relaxed">{description}</p>
        {linkText && (
          <div className="flex justify-center">
            <Button variant="link" asChild>
              <a href={linkHref || "#"}>{linkText}</a>
            </Button>
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
  } = await getHomePage();

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
              linkText={card.linkText}
              linkHref={card.linkHref}
            />
          </AnimatedCard>
        ))}

        {/*contact card*/}
        <AnimatedCard
          index={regularCards.length}
          className="w-[75%] md:w-[30%] min-h-[400px] sm:min-h-[680px] flex"
        >
          <InfoCard
            title={contactsCard.title}
            description={contactsCard.description}
            linkText={contactsCard.linkText}
            linkHref={contactsCard.linkHref}
            contacts={contactsCard.contacts}
            getIcon={getIcon}
          />
        </AnimatedCard>
      </div>
    </section>
  );
};

//export component
export default InfoCards;
