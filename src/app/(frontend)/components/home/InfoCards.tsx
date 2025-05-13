const cardData = [
  {
    title: "About Us",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    title: "Our People",
    description:
      "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    title: "Reach Out",
    description: "Here are a few ways you can reach out to us:",
  },
];
const InfoCards = () => {
  return (
    <section>
      <div className="gap-6">
        {cardData.map((card, i) => (
          <div key={i}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
