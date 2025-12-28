import { RichText } from "@payloadcms/richtext-lexical/react";
import { Media } from "@/payload-types";

import Image from "next/image";

type EstablishmentProps = {
  content: {
    year: number;
    title: string;
    date?: string | null;
    present?: string | null;
    apologies?: string | null;
    meetingOpen?: string | null;
    establishmentText?: string | null;
    image: Media | string | null;
    text: any;
  };
};

const Establishment = ({ content }: EstablishmentProps) => {
  if (!content) return null;

  // Destructure
  const {
    year,
    title,
    date,
    present,
    apologies,
    meetingOpen,
    establishmentText,
    image,
    text: richText,
  } = content;

  const infoBlocks = [
    { label: "PRESENT", value: present },
    { label: "APOLOGIES", value: apologies },
    { label: "MEETING OPENED", value: meetingOpen },
  ].filter((block) => block.value);

  return (
    <section className="relative w-full flex flex-col text-left text-(--navy) pb-8 sm:pb-12 md:pb-16">
      {/* Title */}
      {/* Note: adjusting the height (h) of this div will require adjusting the margin-top (mt) on the vertical line (line 71) */}
      <div className="flex w-full min-w-0 sm:w-1/2 items-center h-auto min-h-14 gap-4 pb-6">
        {/* Dot - Small screens only */}
        <div className="absolute sm:hidden left-0 h-2 w-2 bg-(--navy) rounded-full -translate-x-1/2 -ml-4" />
        <h2 className="font-medium text-xl md:text-2xl overflow-hidden sm:whitespace-nowrap sm:text-ellipsis sm:shrink">
          {year}: {title}
        </h2>
        {/* Horizontal Line - Small screen and above */}
        <div className="hidden sm:block h-0.5 flex-1 min-w-16 bg-(--navy) rounded-full -mr-px" />
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row min-w-0">
        <div className="flex flex-col order-2 sm:order-1 w-full sm:w-1/2 min-w-0">
          {/* LEFT: Text */}
          <div className="sm:pr-20 text-sm">
            {date && <p className="font-semibold pb-4">{date}</p>}

            <div className="flex flex-row gap-4 pb-6">
              <div className="flex flex-col space-y-4 w-1/2">
                {infoBlocks.map((block) => (
                  <div key={block.label}>
                    <p className="font-semibold">{block.label}:</p>
                    <p>{block.value}</p>
                  </div>
                ))}
              </div>

              {establishmentText && (
                <div className="w-1/2">
                  <p className="font-semibold italic">Establishment of the club:</p>
                  <p className="italic">{establishmentText}</p>
                </div>
              )}
            </div>

            <RichText data={richText} />
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex order-1 sm:order-2 w-full min-w-0 sm:w-1/2 pl-0 sm:pl-20 pb-6 sm:pb-0 sm:-mt-7 items-center justify-center">
          {typeof image === "object" && image?.url && (
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width || 800}
              height={image.height || 600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Establishment;
