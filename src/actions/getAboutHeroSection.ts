"use server";

import { getPayload } from "@libs/payload";
import { AboutHeroSection } from "@/payload-types";

export const getAboutHeroSection = async (): Promise<AboutHeroSection> => {
  const payload = await getPayload();
  const aboutHeroSection = await payload.findGlobal({
    slug: "about-hero-section",
  });
  return aboutHeroSection;
};
