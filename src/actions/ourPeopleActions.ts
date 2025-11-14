"use server";

import { getPayload } from "@libs/payload";
import { OurPerson } from "@/payload-types";

export const getOurPeople = async (): Promise<OurPerson> => {
  const payload = await getPayload();
  const people = await payload.findGlobal({
    slug: "our-people",
    depth: 2, // for conductors
  });

  return people;
};
