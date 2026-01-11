type Align = "center" | "left";

type HeroProps = {
  title: string;
  align: Align;
};

const textDirection: Record<Align, string> = {
  center: "text-center",
  left: "text-left",
};

const Hero = ({ title, align }: HeroProps) => {
  return (
    <section className="flex w-full flex-col items-center pb-8 text-(--navy) sm:pb-12 md:pb-16">
      <div className={`w-full text-center sm:${textDirection[align]} px-6 sm:px-0`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
