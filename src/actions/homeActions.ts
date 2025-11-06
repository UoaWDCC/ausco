"use server";

import { getPayload } from "@libs/payload";
import { HomePage } from "@/payload-types";

export const getHomePage = async (): Promise<HomePage> => {
  const payload = await getPayload();
  const homePage = await payload.findGlobal({
    slug: "home-page",
  });

  return homePage;
};