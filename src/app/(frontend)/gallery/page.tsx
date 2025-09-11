import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";

import { getGalleryLanding } from "@/actions/getGalleryLanding";
import { Media } from "@/payload-types";
import Link from "next/link";

const headerContent = await getHeader();

const [content] = await Promise.all([getGalleryLanding()]);

const getImageUrl = (imageField: string | Media | null | undefined): string | undefined => {
  if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
    return imageField.url ?? undefined;
  }
  if (typeof imageField === "string") {
      return imageField;
  }
  return undefined; // Return undefined if no image is found
};

export default async function Gallery() {
    return (
    <>
      <Header content={headerContent} />
    </>
  );
}









