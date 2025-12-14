import { Media } from "@/payload-types";

import Image from "next/image";

type HeaderProps = {
  content: {
    image: Media | string | null;
    description?: string | null;
  };
};

const Header = ({ content }: HeaderProps) => {
  return (
    <section className="w-full pb-18 flex flex-row items-center text-left text-(--navy) gap-16">
      {typeof content.image === "object" && content.image?.url && (
        <div className="relative w-1/2 aspect-3/2">
          <Image
            src={content.image.url}
            alt={content.image.alt || "Header Image"}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="flex flex-col w-1/2 justify-center gap-8">
        <h1 className="font-semibold! text-4xl! m-0! w-1/2">Our People</h1>
        {content.description && <p className="text-base">{content.description}</p>}
      </div>
    </section>
  );
};

export default Header;
