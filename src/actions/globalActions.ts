"use server";

import { getPayload } from "@libs/payload";
import { Header, Footer, SiteSetting } from "@/payload-types";

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

export const getSiteSetting = async (): Promise<SiteSetting> => {
  const payload = await getPayload();
  const siteSetting = await payload.findGlobal({
    slug: "siteSetting",
    depth: 1,
  });

  return siteSetting;
};
