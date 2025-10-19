"use server";

import { getPayload } from "@libs/payload";
import { ConcertsLanding } from "@/payload-types";
import { UpcomingConcert } from "@/payload-types";
import { PastConcert } from "@/payload-types";

export const getConcertsLanding = async (): Promise<ConcertsLanding> => {
  const payload = await getPayload();
  const ConcertsLanding = await payload.findGlobal({
    slug: "concerts-landing",
  });

  return ConcertsLanding;
};

export const getUpcomingConcerts = async (): Promise<UpcomingConcert> => {
  const payload = await getPayload();
  const concerts = await payload.findGlobal({
    slug: "upcoming-concerts",
  });

  return concerts;
};

export const getComingSoon = async (): Promise<ConcertsLanding> => {
    const payload = await getPayload();
    const coming_soon = await payload.findGlobal({
      slug: "concerts-landing",
    });
  
    return coming_soon;
  };

export const getPastConcerts = async (): Promise<PastConcert> => {
  const payload = await getPayload();
  const pastConcerts = await payload.findGlobal({
    slug: "past-concerts",
  });

  return pastConcerts;
};
