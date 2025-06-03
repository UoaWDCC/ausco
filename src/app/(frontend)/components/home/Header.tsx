import { getHeader } from "@/actions/getHeader";
import Image from "next/image";
import { Button } from "../ui/button";

const Header = async () => {
  const content = await getHeader();

  const logo =
    typeof content.logo === "object" && content.logo !== null && "url" in content.logo
      ? content.logo
      : null;

  return (
    <header>
      <nav className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 px-4 sm:px-12 w-full">
        <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          {logo?.url && <Image src={logo.url} alt={logo.alt || "Logo"} width={60} height={60} />}
          <span
            className="text-lg font-medium"
            dangerouslySetInnerHTML={{
              __html: content.title || "",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-12 w-full sm:w-auto">
          {content.navLinks?.map((link, i) => (
            <a key={i} href={link.url || "#"} className="text-sm hover:underline block">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
