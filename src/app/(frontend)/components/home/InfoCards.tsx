//importing icons for contacts list
import { Mail, Instagram, Facebook } from "lucide-react";
import { getLandingPage } from "@/actions/getLandingPage";

//react functional component for card rendering
const InfoCards = async () => {
  const content = await getLandingPage();
  const cardData = content.infoCards.cards;

  // contacts list
  const contacts = [
    { icon: <Mail />, text: "chamberorchestra.ausa@gmail.com↗", href: "" },
    { icon: <Instagram />, text: "@ausco.uoa↗", href: "" },
    { icon: <Facebook />, text: "@ausco.ausa↗", href: "" },
  ];

  return (
    <section className="bg-[#F6F4EC] py-24 lg:py-40 px-6">
      <div className="max-w-[93rem] mx-auto flex flex-wrap justify-center gap-8 lg:gap-10">
        {cardData.map((card, i) => (
          //flex column container for card content, styling card text/layout
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

              {/*displays contact information as a list if provided*/}
              {card.title === "Reach Out" && (
                //applying flex to join contact icons and text
                <ul className="text-sm sm:text-base flex flex-col items-center font-semibold p-2 lg:p-4 space-y-2">
                  {contacts.map((contact, j) => (
                    <li key={j}>
                      <a className="flex items-center gap-2 hover:underline" href={contact.href}>
                        {contact.icon}
                        {contact.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//export component
export default InfoCards;
