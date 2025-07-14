"use server";

import { getPayload } from "@libs/payload";
import { ConcertsLanding } from "@/payload-types";

export const getConcertsLanding = async (): Promise<ConcertsLanding> => {
  const payload = await getPayload();
  const ConcertsLanding = await payload.findGlobal({
    slug: "concerts-landing",
  });

  return ConcertsLanding;
};