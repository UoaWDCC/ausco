import { Media } from "@/payload-types";
import Image from "next/image";

import { RichText } from "@payloadcms/richtext-lexical/react";

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
    content: any;
  };
};

const Establishment = ({ content }: EstablishmentProps) => {
  return (
    <section className="w-full flex flex-col text-left text-(--navy) ">
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col">
          {/* LEFT: Text */}
          {/* Note: adjusting the height (h) of this div will require adjusting the margin-top (mt) on the vertical line (line 71) */}
          <div className="flex items-center h-14 gap-4 pb-6">
            <h2 className="font-medium text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
              {content.year}: {content.title}
            </h2>
            {/* Horizontal Line */}
            <div className="h-0.5 bg-(--navy) grow min-w-[150px] rounded-full -mr-0.5" />
          </div>

          <div className="pr-20">
            {content.date && <p className="font-semibold pb-4 text-sm">{content.date}</p>}

            <div className="flex flex-row gap-6 pb-6 text-sm">
              <div className="flex flex-col space-y-4 w-1/2">
                {content.present && (
                  <div>
                    <p className="font-semibold">PRESENT:</p>
                    <p>{content.present}</p>
                  </div>
                )}
                {content.apologies && (
                  <div>
                    <p className="font-semibold">APOLOGIES:</p>
                    <p>{content.apologies}</p>
                  </div>
                )}
                {content.meetingOpen && (
                  <div>
                    <p className="font-semibold">MEETING OPENED:</p>
                    <p>{content.meetingOpen}</p>
                  </div>
                )}
              </div>

              {content.establishmentText && (
                <div className="w-1/2">
                  <p className="font-semibold italic">Establishment of the club:</p>
                  <p className="italic">{content.establishmentText}</p>
                </div>
              )}
            </div>

            <RichText data={content.content} />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="w-0.5 bg-(--navy) mt-4 rounded-full" />

        {/* RIGHT: Image */}
        <div className="w-1/2 pl-20 flex items-center justify-center">
          {typeof content.image === "object" && content.image?.url && (
            <Image
              src={content.image.url}
              alt={content.image.alt}
              width={500}
              height={500}
              className="rounded-lg max-w-full max-h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Vertical Line */}
      <div className="h-[72px] w-full flex justify-center">
        <div className="w-0.5 bg-(--navy) h-full rounded-full -mt-0.5" />
      </div>
    </section>
  );
};

export default Establishment;
