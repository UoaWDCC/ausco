"use server";

import { getPayload } from "@libs/payload";
import { AboutFirstCard } from "@/payload-types";

export const getAboutFirstCards = async (): Promise<AboutFirstCard> => {
  const payload = await getPayload();
  const AboutFirstCards = await payload.findGlobal({
    slug: "about-first-cards",
  });

  return AboutFirstCards;
};