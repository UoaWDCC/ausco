import { getHeader } from "@/actions/getHeader";
import Image from "next/image";

const Header = async () => {
  const content = await getHeader();

  const logo =
    typeof content.logo === "object" && content.logo !== null && "url" in content.logo
      ? content.logo
      : null;

  return (
    <header>
      <nav className="flex items-center justify-between pt-6 pr-12 pl-12">
        <div className="flex items-center space-x-4">
          {logo?.url && <Image src={logo.url} alt={logo.alt || "Logo"} width={60} height={60} />}
          <span
            className="text-lg font-medium"
            dangerouslySetInnerHTML={{
              __html: content.title || "",
            }}
          />
        </div>
        <div className="flex items-center gap-12">
          {content.navLinks?.map((link, i) => (
            <a key={i} href={link.url || "#"} className="text-sm hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
