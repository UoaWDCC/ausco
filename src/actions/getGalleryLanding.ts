"use server";

import { getPayload } from "@libs/payload";
import { GalleryLanding } from "@/payload-types";

export const getGalleryLanding = async (): Promise<GalleryLanding> => {
  const payload = await getPayload();
  const GalleryLanding = await payload.findGlobal({
    slug: "gallery-landing",
  });

  return GalleryLanding;
};