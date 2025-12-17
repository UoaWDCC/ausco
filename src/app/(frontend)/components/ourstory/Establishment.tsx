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
    <section className="relative w-full flex flex-col text-left text-(--navy) pb-18">
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col">
          {/* LEFT: Text */}
          {/* Note: adjusting the height (h) of this div will require adjusting the margin-top (mt) on the vertical line (line 71) */}
          <div className="flex items-center h-14 gap-4 pb-6">
            <h2 className="font-medium text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
              {year}: {title}
            </h2>
            {/* Horizontal Line */}
            <div className="relative flex-1">
              <div className="absolute -right-px top-1/2 h-0.5 w-full bg-(--navy) -translate-y-1/2 rounded-full" />
            </div>
          </div>

          <div className="pr-20 text-sm">
            {date && <p className="font-semibold pb-4 ">{date}</p>}

            <div className="flex flex-row gap-6 pb-6">
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
        <div className="w-1/2 pl-20 flex items-center justify-center">
          {typeof image === "object" && image?.url && (
            <Image
              src={image.url}
              alt={image.alt}
              width={500}
              height={500}
              className="rounded-lg max-w-full max-h-full object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Establishment;
