"use server";

import { getPayload } from "@libs/payload";
import { Ticket } from "@/payload-types";

export const getTicket = async (): Promise<Ticket> => {
  const payload = await getPayload();
  const Ticket = await payload.findGlobal({
    slug: "ticket",
  });

  return Ticket;
};
