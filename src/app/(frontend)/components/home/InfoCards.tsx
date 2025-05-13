

const cardData = [
  {
    title: "About Us",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    image:"(illustration)",
    linkText:"Read more↗",
    linkHref:""
  },
  {
    title: "Our People",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    image:"(illustration)",
    linkText:"Read more↗",
    linkHref:""
  },
  {
    title: "Reach Out",
    description: "Here are a few ways you can reach out to us:",
    image:"(illustration)",
    linkText:"Feedback Form↗",
    linkHref:"",
    contacts:[
      {text:"chamberorchestra.ausa@gmail.com↗",href:""},
      {text:"@ausco.uoa↗",href:""},
      {text: "@ausco.ausa↗",href:""}
    ]
  },
];
const InfoCards = () => {
  return (
    <section className="bg-[#F6F4EC] py-40 px-6">
      <div className="max-w-[93rem] mx-auto flex flex-wrap justify-center gap-10">
        {cardData.map((card, i) => (
          <div key={i} className=" flex flex-col justify-start bg-[#EEEADE] md:w-[30%] min-h-[680px] rounded-[1rem] p-10 text-center text-[#264C84] font-['Schibsted_Grotesk'] space-y-6 shadow-sm">
            <p className="text-base p-10 pt-25">(illustration)</p>
            <h2 className="text-5xl font-[Fraunces]">{card.title}</h2>

            <div className="space-y-3">
                <p className="text-base leading-relaxed">{card.description}</p>
              <a href={card.linkHref} className="text-base font-semibold">{card.linkText}</a>
                {card.contacts && (
                  <ul className="text-base font-semibold p-5">
                    {card.contacts.map((contact,j) => (
                      <li key={j} >
                        <a href={contact.href}>{contact.text}</a>
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

export default InfoCards;
