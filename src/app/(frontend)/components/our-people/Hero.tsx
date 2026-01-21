import Image from "next/image";

import { Media } from "@/payload-types";

type HeroProps = {
  content: {
    image: Media | string | null;
    description?: string | null;
  };
};

const Hero = ({ content }: HeroProps) => {
  return (
    <>
      <section className="relative w-full pb-8 sm:flex sm:flex-row sm:items-center sm:gap-16 sm:pb-12 md:pb-16">
        {typeof content.image === "object" && content.image?.url && (
          <div className="relative h-[22vh] w-full sm:h-[28vh] md:aspect-3/2 md:h-auto md:w-1/2">
            <Image
              src={content.image.url}
              alt={content.image.alt || "Hero Image"}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center md:rounded-lg"
              quality={90}
            />

            {/* Small screens only*/}
            <div className="absolute inset-0 bg-[#170B00A6] md:hidden" />
            <h1 className="absolute inset-0 flex items-center justify-center p-6 text-center text-2xl text-(--cream) sm:text-3xl md:hidden md:p-0">
              Our People
            </h1>
          </div>
        )}

        <div className="hidden w-full flex-col justify-center text-(--navy) md:flex md:w-1/2 md:gap-8">
          <h1 className="w-full text-4xl!">Our People</h1>
          {content.description && <p className="text-base">{content.description}</p>}
        </div>
      </section>

      <div className="mb-16 hidden w-full bg-(--navy) md:block" style={{ height: "1px" }} />
    </>
  );
};

export default Hero;
