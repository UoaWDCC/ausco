"use server";

import { getPayload } from "@libs/payload";
import { LandingPage } from "@/payload-types";

export const getLandingPage = async (): Promise<LandingPage> => {
  const payload = await getPayload();
  const LandingPage = await payload.findGlobal({
    slug: "landing-page",
    depth: 2,
  });

  return LandingPage;
};
