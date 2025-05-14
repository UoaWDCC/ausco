//importing icons for contacts list
import { Mail, Instagram, Facebook } from "lucide-react";

//array for card display content
const cardData = [
  {
    title: "About Us",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    image: "PLACEHOLDER",
    linkText: "Read more↗",
    linkHref: "",
  },
  {
    title: "Our People",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    image: "PLACEHOLDER",
    linkText: "Read more↗",
    linkHref: "",
  },
  {
    title: "Reach Out",
    description: "Here are a few ways you can reach out to us:",
    image: "PLACEHOLDER",
    linkText: "Feedback Form↗",
    linkHref: "",

    //array storing contact icons, text and href links
    contacts: [
      { icon: <Mail />, text: "chamberorchestra.ausa@gmail.com↗", href: "" },
      { icon: <Instagram />, text: "@ausco.uoa↗", href: "" },
      { icon: <Facebook />, text: "@ausco.ausa↗", href: "" },
    ],
  },
];

//react functional component for card rendering
const InfoCards = () => {
  return (
    <section className="bg-[#F6F4EC] py-40 px-6">
      <div className="max-w-[93rem] mx-auto flex flex-wrap justify-center gap-10">
        {cardData.map((card, i) => (
          //flex column container for card content, styling card text/layout
          <div
            key={i}
            className="flex flex-col justify-start bg-[#EEEADE] md:w-[30%] min-h-[680px] rounded-[1rem] p-10 text-center text-[#264C84] font-[Schibsted_Grotesk] space-y-6 shadow-sm"
          >
            {/*card image placeholder*/}
            <p className="text-base p-10 pt-25">(illustration)</p>

            {/*card title*/}
            <h2 className="text-5xl font-[Fraunces]">{card.title}</h2>

            {/*card description and links*/}
            <div className="space-y-3">
              <p className="text-base leading-relaxed">{card.description}</p>
              <a href={card.linkHref} className="text-base font-semibold">
                {card.linkText}
              </a>

              {/*displays contact information as a list if provided*/}
              {card.contacts && (
                //applying flex to join contact icons and text
                <ul className="text-base flex flex-col items-center font-semibold p-5">
                  {card.contacts.map((contact, j) => (
                    <li key={j}>
                      <a className="flex items-center gap-2" href={contact.href}>
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
