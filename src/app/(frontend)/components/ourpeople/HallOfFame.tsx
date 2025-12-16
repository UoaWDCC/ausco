import { Media } from "@/payload-types";
import FramedImage from "./FramedImage";

type HallOfFameProps = {
  content: {
    pastPresidents?: {
      frame: Media | string | null;
      members?:
        | {
            image: Media | string | null;
            name: string;
            description: string;
          }[]
        | null;
    } | null;
    founders?: {
      frame: Media | string | null;
      members?:
        | {
            image: Media | string | null;
            name: string;
            description: string;
          }[]
        | null;
    } | null;
  };
};

const HallOfFame = ({ content }: HallOfFameProps) => {
  const getImageUrl = (image: Media | string | null | undefined): string | null => {
    if (!image) return null; // handle undefined or null
    if (typeof image === "string") return image; // if it's already a string URL
    if (typeof image === "object" && image.url) return image.url; // if it's a Media object, extract the URL
    return null;
  };
  const pastPresidentsFrameUrl = getImageUrl(content?.pastPresidents?.frame);
  const foundersFrameUrl = getImageUrl(content?.founders?.frame);

  return (
    <section className="text-(--navy) text-center">
      <h2 className="font-medium text-3xl m-0 shrink-0 pb-13">Hall Of Fame</h2>
      <div className="w-full bg-(--navy)" style={{ height: "1px" }} />

      <h3 className="text-xl font-semibold pt-13 pb-3">Past Presidents</h3>

      <div className="w-full mt-6 mb-13 grid grid-cols-4 gap-16 justify-items-center">
        {content?.pastPresidents?.members?.map((member, index) => {
          const profileUrl = getImageUrl(member.image);

          return (
            <div key={index} className="flex flex-col flex-1">
              {profileUrl && pastPresidentsFrameUrl && (
                <FramedImage
                  imageUrl={profileUrl}
                  frameUrl={pastPresidentsFrameUrl}
                  frameType="oval"
                />
              )}
              <div className="flex flex-col text-base w-full gap-1">
                <p className="font-semibold">{member.name}</p>
                <p>{member.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-(--navy)" style={{ height: "1px" }} />

      <h3 className="text-xl font-semibold pt-13 pb-3">Founders</h3>

      <div className="grid grid-cols-2 gap-16 w-1/2 mx-auto mt-6">
        {content?.founders?.members?.map((member, index) => {
          const profileUrl = getImageUrl(member.image);

          return (
            <div key={index} className="flex flex-col flex-1">
              {profileUrl && foundersFrameUrl && (
                <FramedImage
                  imageUrl={profileUrl}
                  frameUrl={foundersFrameUrl}
                  frameType="rectangle"
                />
              )}
              <div className="flex flex-col text-base w-full gap-1">
                <p className="font-semibold">{member.name}</p>
                <p>{member.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HallOfFame;
