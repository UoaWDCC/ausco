"use server";

import { getPayload } from "@libs/payload";
import { HomePage } from "@/payload-types";
import { AboutUsPage } from "@/payload-types";

export const getHomePage = async (): Promise<HomePage> => {
  const payload = await getPayload();
  const homePage = await payload.findGlobal({
    slug: "home-page",
  });

  return homePage;
};

export const getAboutUsPage = async (): Promise<AboutUsPage> => {
  const payload = await getPayload();
  const aboutUsPage = await payload.findGlobal({
    slug: "about-us-page",
  });

  return aboutUsPage;
};
