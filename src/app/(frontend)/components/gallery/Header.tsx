type Align = "center" | "left";

type HeaderProps = {
  title: string;
  align: Align;
};

const textDirection: Record<Align, string> = {
  center: "text-center",
  left: "text-left",
};

const Header = ({ title, align }: HeaderProps) => {
  return (
    <section className="w-full pb-8 sm:pb-12 md:pb-16 flex flex-col items-center text-(--navy)">
      <div className={`w-full text-center sm:${textDirection[align]} px-6 sm:px-0`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">{title}</h1>
      </div>
    </section>
  );
};

export default Header;
