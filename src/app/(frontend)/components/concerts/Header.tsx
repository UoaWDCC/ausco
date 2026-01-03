type HeaderProps = {
  title: string;
  description?: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <section className="w-full pb-8 sm:pb-12 md:pb-16 flex flex-col items-center text-center text-(--brown)">
      <h1 className="text-2xl sm:text-3xl md:text-4xl px-6 sm:px-0">{title}</h1>
      {description && (
        <h3 className="text-sm md:text-base pt-3 md:pt-7 px-5 sm:px-15 md:px-30">{description}</h3>
      )}
    </section>
  );
};

export default Header;
