import { Media } from "@/payload-types";
import Image from "next/image";

type ConductorsProps = {
  content?: {
    border: Media | string | null;
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
  const borderUrl = getImageUrl(content?.border);

  console.log("hello");
  console.log(content?.members?.[0].profilePicture);
  console.log("hello1");

  return (
    <section className="w-full pb-18 flex flex-col items-center text-(--navy)">
      <h2 className="font-medium text-3xl text-center m-0 shrink-0 pb-7">Conductors</h2>
      {/* Conductors */}
      {/* <div className="flex flex-wrap justify-center gap-6"> */}

    </section>
  );
};

export default Conductors;

{
  /* Border / Frame */
}
// {borderUrl && (
//   <div className="absolute inset-0 pointer-events-none">
//     <Image src={borderUrl} alt="Conductor border" fill className="object-cover" />
//   </div>
// )}

// absolute inset-0 overflow-hidden rounded-[50%]

// @@
//         {content?.conductors?.map((member, index) => {
//   const profileUrl = getImageUrl(member.profilePicture);
//   if (!profileUrl) return null; // skip if no image

//   return (
//     <div key={index}>
//       <Image
//         src={profileUrl}
//         alt={member.name}
//         width={200}
//         height={200}
//         className="object-cover"
//       />
//     </div>
//   );
// })}
