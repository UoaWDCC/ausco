"use server";

import { getPayload } from "@libs/payload";
import { SecondTwoCard } from "@/payload-types";

export const getSecondTwoCard = async (): Promise<SecondTwoCard> => {
  const payload = await getPayload();
  const secondTwoCard = await payload.findGlobal({
    slug: "second-two-card",
  });
  return secondTwoCard;
};
