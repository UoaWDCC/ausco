"use server";

import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";
import { Header, Footer, SiteSetting } from "@/payload-types";

export const getHeader = cache(async (): Promise<Header> => {
  const payload = await getPayload({ config });
  return payload.findGlobal({ slug: "header", depth: 1 });
});

export const getFooter = cache(async (): Promise<Footer> => {
  const payload = await getPayload({ config });
  return payload.findGlobal({ slug: "footer", depth: 1 });
});

const CONSTITUTION_FALLBACK =
  "https://auckland.campuslabs.com/engage/organization/auckland-university-student-chamber-orchestra";
export const getSiteSetting = cache(async (): Promise<SiteSetting> => {
  const payload = await getPayload({ config });

  const content = await payload.findGlobal({
    slug: "site-settings",
    depth: 1,
  });

  const links = content.links ?? [];

  const hasConstitution = links.some(
    (link) => link.platform === "constitution" && link.url?.trim(),
  );

  const normalizedLinks = hasConstitution
    ? links
    : [
        ...links,
        {
          platform: "constitution" as const,
          url: CONSTITUTION_FALLBACK,
        },
      ];

  return {
    ...content,
    links: normalizedLinks,
  };
});
