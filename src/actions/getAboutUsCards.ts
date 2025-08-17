"use server";

import { getPayload } from "@libs/payload";
import { AboutUsCards } from "@/payload-types";

export const getAboutUsCards = async (): Promise<AboutUsCards> => {
  const payload = await getPayload();
  const aboutUsCards = await payload.findGlobal({
    slug: "about-us-cards",
  });
  return aboutUsCards;
};
