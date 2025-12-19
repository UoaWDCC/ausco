"use server";

import { getPayload } from "@libs/payload";
import {
  GalleryConcert,
  GalleryAnnualcamp,
  GalleryExecutivecamp,
  GalleryOther,
} from "@/payload-types";

export const getConcertsGallery = async (): Promise<GalleryConcert> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "gallery-concert" });
};

export const getAnnualCampGallery = async (): Promise<GalleryAnnualcamp> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "gallery-annualcamp" });
};

export const getExecutiveCampGallery = async (): Promise<GalleryExecutivecamp> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "gallery-executivecamp" });
};

export const getOtherGallery = async (): Promise<GalleryOther> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "gallery-other" });
};
