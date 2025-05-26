"use server";

import { getPayload } from "@libs/payload";
import { Header } from "@/payload-types";

export const getHeader = async (): Promise<Header> => {
  const payload = await getPayload();
  const header = await payload.findGlobal({
    slug: "header",
  });

  return header;
};
