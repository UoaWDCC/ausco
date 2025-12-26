type HeaderProps = {
  title: string;
  description?: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <section className="w-full pb-16 flex flex-col items-center text-center text-(--brown)">
      <h1 className="text-2xl sm:text-3xl md:text-4xl">{title}</h1>
      {description && <h3 className="text-base pt-7 px-30">{description}</h3>}
    </section>
  );
};

export default Header;
