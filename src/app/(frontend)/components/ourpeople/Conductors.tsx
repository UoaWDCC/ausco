import { Media } from "@/payload-types";

import FramedImage from "./FramedImage";

type ConductorsProps = {
  content?: {
    frame: Media | string | null;
    members?:
      | {
          profilePicture: Media | string | null;
          name: string;
          description: string;
        }[]
      | null;
  };
};

const Conductors = ({ content }: ConductorsProps) => {
  const getImageUrl = (image: Media | string | null | undefined): string | null => {
    if (!image) return null; // handle undefined or null
    if (typeof image === "string") return image; // if it's already a string URL
    if (typeof image === "object" && image.url) return image.url; // if it's a Media object, extract the URL
    return null;
  };
  const frameUrl = getImageUrl(content?.frame);

  return (
    <section className="w-full pb-18 flex flex-col items-center text-(--navy)">
      <h2 className="font-medium text-3xl text-center m-0 shrink-0 pb-7">Conductors</h2>
      {/* Conductors */}
      <div className="w-full mt-6 grid grid-cols-3 gap-16 justify-items-center">
        {content?.members?.map((member, index) => {
          const profileUrl = getImageUrl(member.profilePicture);

          return (
            <div key={index} className="flex flex-col text-center w-full">
              {profileUrl && frameUrl && <FramedImage imageUrl={profileUrl} frameUrl={frameUrl} />}

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

export default Conductors;

// TODO: consider adding this? to this and all files: "sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw""
// It tells Next.js:
// Desktop: image ≈ ⅓ screen width
// Tablet: ≈ ½ screen width
// Mobile: full width
// Without this, Next.js over-downloads images.

// TODO: make layout flexible / dynamic to the number of conductors
