"use server";

import { getPayload } from "@libs/payload";
import { Footer } from "@/payload-types";

export const getFooter = async (): Promise<Footer> => {
  const payload = await getPayload();
  const Footer = await payload.findGlobal({
    slug: "footer",
  });

  return Footer;
};
