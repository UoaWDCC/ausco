"use server";

import { getPayload } from "@libs/payload";
import {
  ConcertsGallery,
  AnnualcampGallery,
  ExecutivecampGallery,
  OtherGallery,
} from "@/payload-types";

//get concerts gallery
export const getConcertsGallery = async (): Promise<ConcertsGallery> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "concerts-gallery" });
};

//get annual camp gallery
export const getAnnualCampGallery = async (): Promise<AnnualcampGallery> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "annualcamp-gallery" });
};

//get executive camp gallery
export const getExecutiveCampGallery = async (): Promise<ExecutivecampGallery> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "executivecamp-gallery" });
};

//get other gallery
export const getOtherGallery = async (): Promise<OtherGallery> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "other-gallery" });
};
