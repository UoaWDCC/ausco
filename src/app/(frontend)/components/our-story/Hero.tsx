type HeroProps = {
  description?: string | null;
};

const Hero = ({ description }: HeroProps) => {
  return (
    <section className="flex w-full flex-col items-center pb-8 text-left text-(--navy) sm:pb-12 sm:text-center md:pb-16">
      <h1 className="w-full px-0 text-2xl sm:px-6 sm:text-3xl md:text-4xl">Our Story</h1>
      {description && (
        <h3 className="px-0 pt-3 text-sm sm:px-15 md:px-30 md:pt-7 md:text-base">{description}</h3>
      )}
    </section>
  );
};

export default Hero;
