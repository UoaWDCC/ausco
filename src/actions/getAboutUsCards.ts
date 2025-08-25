"use server";

import { getPayload } from "@libs/payload";
import { AboutUsCard } from "@/payload-types";

export const getAboutUsCards = async (): Promise<AboutUsCard> => {
  const payload = await getPayload();
  const aboutUsCards = await payload.findGlobal({
    slug: "about-us-cards",
  });
  return aboutUsCards;
};
