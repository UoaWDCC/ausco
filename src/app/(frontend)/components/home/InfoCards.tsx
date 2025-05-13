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
      {text:"chamberorchestra.ausa@gmail.com",href:""},
      {text:"@ausco.uoa",href:""},
      {text:"@ausco.ausa",href:""}
    ]
  },
];
const InfoCards = () => {
  return (
    <section className="bg-[#F6F4EC] py-16 px-6">
      <div className="max-w-[95rem] mx-auto flex flex-wrap justify-center gap-8">
        {cardData.map((card, i) => (
          <div key={i} className=" flex flex-col justify-between bg-[#EEEADE] w-full md:w-[30%] rounded-xl py-14 px-8 text-center text-[#264C84] font-['Schibsted_Grotesk'] space-y-6 shadow-sm">
            <p className="text-sm">(illustration)</p>

            <h2 className="text-4xl font-[Fraunces]">{card.title}</h2>
            <p className="text-sm leading-relaxed">{card.description}</p>

            <a href={card.linkHref} className="text-sm font-semibold">{card.linkText}</a>
            
            {card.contacts && (
              <ul className="text-sm font-semibold">
                {card.contacts.map((contact,j) => (
                  <li key={j}>
                    <a href={contact.href}>{contact.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
