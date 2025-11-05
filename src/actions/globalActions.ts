"use server";

import { getPayload } from "@libs/payload";
import { Header, Footer } from "@/payload-types";

// TODO: Look into next.js caching
export const getHeader = async (): Promise<Header> => {
  const payload = await getPayload();
  const header = await payload.findGlobal({
    slug: "header",
  });

  return header;
};

export const getFooter = async (): Promise<Footer> => {
  const payload = await getPayload();
  const footer = await payload.findGlobal({
    slug: "footer",
  });

  return footer;
};
