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
    <section className="w-full grid grid-cols-2 text-left text-(--navy)">
      <div className="flex flex-col pr-20">
        <h2 className="font-medium text-2xl m-0 shrink-0 pb-6">
          {content.year}: {content.title}
        </h2>

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

      <div className="pl-20">
        {typeof content.image === "object" && content.image?.url && (
          <Image src={content.image.url} alt={content.image.alt} width={100} height={100} />
        )}
      </div>
    </section>
  );
};

export default Establishment;
