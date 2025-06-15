"use server";

import { getPayload } from "@libs/payload";
import { OurPeople } from "@/payload-types";

export const getOurPeople = async (): Promise<OurPeople> => {
  const payload = await getPayload();
  const OurPeople = await payload.findGlobal({
    slug: "our-people",
  });

  return OurPeople;
};