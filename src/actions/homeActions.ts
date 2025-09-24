"use server";

import { getPayload } from "@libs/payload";
import { LandingPage } from "@/payload-types";
import { Footer } from "@/payload-types";

export const getLandingPage = async (): Promise<LandingPage> => {
  const payload = await getPayload();
  const LandingPage = await payload.findGlobal({
    slug: "landing-page",
  });

  return LandingPage;
};

export const getFooter = async (): Promise<Footer> => {
  const payload = await getPayload();
  const Footer = await payload.findGlobal({
    slug: "footer",
  });

  return Footer;
};