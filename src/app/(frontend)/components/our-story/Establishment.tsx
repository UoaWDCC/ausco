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
    <section className="relative flex w-full flex-col pb-8 pl-4 text-left text-(--navy) sm:pb-12 sm:pl-0 md:pb-16">
      {/* Vertical line - only on sm screens */}
      <div className="absolute top-4 bottom-0 left-0 w-0.5 -translate-x-1/2 bg-(--navy) sm:hidden" />

      {/* Title */}
      {/* Note: adjusting the height (h) of this div will require adjusting the margin-top (mt) on the vertical line (line 71) */}
      <div className="flex h-auto min-h-14 w-full min-w-0 items-center gap-4 pb-6 sm:w-1/2">
        {/* Dot - Small screens only */}
        <div className="absolute left-0 h-2 w-2 -translate-x-1/2 rounded-full bg-(--navy) sm:hidden" />
        <h2 className="overflow-hidden text-xl font-medium sm:shrink sm:text-ellipsis sm:whitespace-nowrap md:text-2xl">
          {year}: {title}
        </h2>
        {/* Horizontal Line - Small screen and above */}
        <div className="-mr-px hidden h-0.5 flex-1 rounded-full bg-(--navy) sm:block sm:min-w-12 md:min-w-16" />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-col sm:flex-row">
        <div className="order-2 flex w-full min-w-0 flex-col sm:order-1 sm:w-1/2">
          {/* LEFT: Text */}
          <div className="text-sm sm:pr-10 md:pr-20">
            {date && <p className="pb-4 font-semibold">{date}</p>}

            <div className="flex flex-row gap-4 pb-6">
              <div className="flex w-1/2 flex-col space-y-4">
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
        <div className="order-1 flex w-full min-w-0 items-center justify-center pb-6 pl-0 sm:order-2 sm:-mt-7 sm:w-1/2 sm:pb-0 sm:pl-10 md:pl-20">
          {typeof image === "object" && image?.url && (
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width || 800}
              height={image.height || 600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full rounded-lg object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Establishment;
