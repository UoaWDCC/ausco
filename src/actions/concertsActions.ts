"use server";

import { getPayload } from "@libs/payload";
import { UpcomingConcert } from "@/payload-types";
import { PastConcert } from "@/payload-types";

export const getUpcomingConcerts = async (): Promise<UpcomingConcert> => {
  const payload = await getPayload();
  const concerts = await payload.findGlobal({
    slug: "upcoming-concerts",
  });

  return concerts;
};

export const getPastConcerts = async (): Promise<PastConcert> => {
  const payload = await getPayload();
  const pastConcerts = await payload.findGlobal({
    slug: "past-concerts",
  });

  return pastConcerts;
};
