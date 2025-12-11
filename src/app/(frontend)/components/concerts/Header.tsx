type HeaderProps = {
  title: string;
  description?: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <section className="max-w-6xl mx-auto w-full pt-44 pb-18 px-6 flex flex-col items-center text-center text-(--brown)">
      <h1 className="font-semibold! text-4xl! m-0! pb-7">{title}</h1>
      {description ? (
        <h3 className="text-base px-30">{description}</h3>
      ) : (
        <div className="pb-3"></div>
      )}
    </section>
  );
};

export default Header;
