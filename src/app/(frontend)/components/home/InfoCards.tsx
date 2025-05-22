//importing icons for contacts list, allows user to add more icons in the future
import { Mail, Instagram, Facebook, LucideIcon } from "lucide-react";
import { getLandingPage } from "@/actions/getLandingPage";

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

//async component fetches/extracts card data from payload
const InfoCards = async () => {
  const content = await getLandingPage();
  const regularCards = content.infoCards.regularCards;
  const contactsCard = content.infoCards.contactsCard;

  //function to fetch icon component
  //mail icon set as default/fallback
  const getIcon = (iconType: string) => {
    const IconComponent = iconMapping[iconType] || Mail;
    return <IconComponent />;
  };
  //NOTE FOR DEL (ME) MAKE THE REPEATED CARD STUFF A REUSABLE COMPONENT TO REDUCE REDUNDANCY
  //card rendering
  return (
    <section className="bg-[#F6F4EC] py-24 lg:py-40 px-6">
      <div className="max-w-[93rem] mx-auto flex flex-wrap justify-center gap-8 lg:gap-10">
        {/*mapping non-contact cards*/}
        {regularCards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col justify-start bg-[#EEEADE] w-full sm:w-[45%] md:w-[30%] min-h-[400px] sm:min-h-[500px] lg:min-h-[680px] rounded-[1rem] p-8 lg:p-10 text-center text-[#264C84] font-[Schibsted_Grotesk] space-y-5 lg:space-y-6 shadow-sm"
          >
            {/*card image placeholder*/}
            <p className="text-sm p-8 lg:p-8 pt-12 lg:pt-14">(illustration)</p>

            {/*card title*/}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-[Fraunces]">{card.title}</h2>

            {/*card description and links*/}
            <div className="space-y-2 lg:space-y-3">
              <p className="text-sm sm:text-base leading-relaxed">{card.description}</p>
              <a
                href={card.linkHref || "#"}
                className="text-sm sm:text-base font-semibold hover:underline"
              >
                {card.linkText}
              </a>
            </div>
          </div>
        ))}

        {/*contacts card*/}
        <div className="flex flex-col justify-start bg-[#EEEADE] w-full sm:w-[45%] md:w-[30%] min-h-[400px] sm:min-h-[500px] lg:min-h-[680px] rounded-[1rem] p-8 lg:p-10 text-center text-[#264C84] font-[Schibsted_Grotesk] space-y-5 lg:space-y-6 shadow-sm">
          {/*card image placeholder*/}
          <p className="text-sm p-8 lg:p-8 pt-12 lg:pt-14">(illustration)</p>

          {/*card title*/}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-[Fraunces]">{contactsCard.title}</h2>

          {/*card description and links*/}
          <div className="space-y-2 lg:space-y-3">
            <p className="text-sm sm:text-base leading-relaxed">{contactsCard.description}</p>
            <a
              href={contactsCard.linkHref || "#"}
              className="text-sm sm:text-base font-semibold hover:underline"
            >
              {contactsCard.linkText}
            </a>

            {/*displays contact information as a list*/}
            <ul className="text-sm sm:text-base flex flex-col items-center font-semibold p-2 lg:p-4 space-y-2">
              {contactsCard.contacts.map((contact, j) => (
                <li key={j}>
                  <a className="flex items-center gap-2 hover:underline" href={contact.href || "#"}>
                    {getIcon(contact.icon)}
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

//export component
export default InfoCards;
