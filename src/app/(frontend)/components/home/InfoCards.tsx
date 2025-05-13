const cardData = [
  {
    title: "About Us",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    linkText:"Read more↗",
    linkHref:""
  },
  {
    title: "Our People",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    linkText:"Read more↗",
    linkHref:""
  },
  {
    title: "Reach Out",
    description: "Here are a few ways you can reach out to us:",
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
    <section>
      <div className="flex gap-6">
        {cardData.map((card, i) => (
          <div key={i} className="p-6">
            <h2 className="">{card.title}</h2>
            <p className="">{card.description}</p>
            <a href={card.linkHref}>{card.linkText}</a>
            {card.contacts && (
              <ul>
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
