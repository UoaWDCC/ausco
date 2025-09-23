"use server";

import { getPayload } from "@libs/payload";
import { ConcertsLanding } from "@/payload-types";

export const getComingSoon = async (): Promise<ConcertsLanding> => {
    const payload = await getPayload();
    const coming_soon = await payload.findGlobal({
      slug: "concerts-landing",
    });
  
    return coming_soon;
  };
