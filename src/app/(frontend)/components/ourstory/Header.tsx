type HeaderProps = {
  description?: string | null;
};

const Header = ({ description }: HeaderProps) => {
  return (
    <section className="w-full pb-8 sm:pb-12 md:pb-16 flex flex-col items-center text-left sm:text-center text-(--navy)">
      <h1 className="w-full text-2xl sm:text-3xl md:text-4xl px-0 sm:px-6">Our Story</h1>
      {description && (
        <h3 className="text-sm md:text-base pt-3 md:pt-7 px-0 sm:px-15 md:px-30">{description}</h3>
      )}
    </section>
  );
};

export default Header;
