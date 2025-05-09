"use server";

import { getPayload } from "@libs/payload";
import { Test } from "@/payload-types";

export const getAllTest = async (): Promise<Test[]> => {
  const payload = await getPayload();
  // get all test collection data
  const tests = await payload.find({
    collection: "test",
  });

  return tests.docs;
};
