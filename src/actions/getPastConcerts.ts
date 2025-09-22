"use server";

import { getPayload } from "@libs/payload";
import { PastConcert } from "@/payload-types";

export const getPastConcerts = async (): Promise<PastConcert> => {
  const payload = await getPayload();
  const pastConcerts = await payload.findGlobal({
    slug: "past-concerts",
  });

  return pastConcerts;
};