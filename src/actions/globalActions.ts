"use server";

import { cache } from "react";
import { getPayload } from "@libs/payload";

import { Header, Footer, SiteSetting } from "@/payload-types";

export const getHeader = cache(async (): Promise<Header> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "header", depth: 1 });
});

export const getFooter = cache(async (): Promise<Footer> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "footer", depth: 1 });
});

export const getSiteSetting = cache(async (): Promise<SiteSetting> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "site-setting", depth: 1 });
});
