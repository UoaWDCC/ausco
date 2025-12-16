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
      <div className="flex flex-col pr-25">
        <h2 className="font-medium text-3xl m-0 shrink-0">
          {content.year}: {content.title}
        </h2>

        {content.date && <p className="font-semibold">{content.date}</p>}

        <div className="flex flex-row">
          <div>
            {content.present && (
              <>
                <p className="font-semibold">PRESENT:</p>
                <p>{content.present}</p>
              </>
            )}
            {content.apologies && (
              <>
                <p className="font-semibold">APOLOGIES:</p>
                <p>{content.apologies}</p>
              </>
            )}
            {content.meetingOpen && (
              <>
                <p className="font-semibold">MEETING OPENED:</p>
                <p>{content.meetingOpen}</p>
              </>
            )}
          </div>

          {content.establishmentText && (
            <>
              <p className="font-semibold italics">Establishment of the club::</p>
              <p>{content.establishmentText}</p>
            </>
          )}
        </div>

        <RichText data={content.content} />
      </div>

      <div className="pl-25">
        {typeof content.image === "object" && content.image?.url && (
          <Image src={content.image.url} alt={content.image.alt} width={100} height={100} />
        )}
      </div>
    </section>
  );
};

export default Establishment;
