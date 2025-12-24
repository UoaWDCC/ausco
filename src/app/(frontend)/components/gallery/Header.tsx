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
    <section className="w-full pb-16 flex flex-col items-center text-(--navy)">
      <div className={`w-full ${textDirection[align]}`}>
        <h1 className="font-semibold! text-4xl! m-0!">{title}</h1>
      </div>
    </section>
  );
};

export default Header;
