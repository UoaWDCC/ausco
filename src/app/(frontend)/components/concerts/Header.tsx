type HeaderProps = {
  title: string;
  description?: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <section className="w-full pt-44 pb-18 px-6 flex flex-col items-center text-center text-(--brown)">
      <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-7">{title}</h1>
      {description && <h3 className="text-base w-full px-30">{description}</h3>}
    </section>
  );
};

export default Header;
