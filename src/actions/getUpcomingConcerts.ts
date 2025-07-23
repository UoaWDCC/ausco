"use server";

import { getPayload } from "@libs/payload";
import { UpcomingConcert } from "@/payload-types";

export const getUpcomingConcerts = async (): Promise<UpcomingConcert> => {
  const payload = await getPayload();
  const concerts = await payload.findGlobal({
    slug: "upcoming-concerts",
  });

  return concerts;
};
