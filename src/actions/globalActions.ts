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

// TODO: fill in remaining fallbacks (e.g. engage page, feedback form, sign up form, proof of registration, email)
// TODO: edit the admin placeholder text in the sitesetting payload schema
const LINK_FALLBACKS: Record<string, string> = {
  facebook: "https://www.facebook.com/ausco.ausa",
  instagram: "https://www.instagram.com/ausco.uoa/",
  youtube: "https://www.youtube.com/@AUSCO-UoA",
  spotify:
    "https://open.spotify.com/user/31b5qnnkievulqbuxajy5etbmo7u?si=d4f38d8f71e349b7&nd=1&dlsi=456d9aa5404649b4",
  feedbackForm: "https://google.com", // TODO
  email: "mailto:example@example.com", // TODO
  constitution:
    "https://auckland.campuslabs.com/engage/organization/auckland-university-student-chamber-orchestra",
  signUpForm: "https://google.com", // TODO
  engage: "https://google.com", // TODO
  registration: "https://google.com", // TODO
};
export const getSiteSetting = cache(
  async (): Promise<SiteSetting & { linksMap: Record<string, string> }> => {
    const payload = await getPayload({ config });

    const content = await payload.findGlobal({
      slug: "site-settings",
      depth: 1,
    });

    const links = content.links ?? [];

    const linksMap: Record<string, string> = {};

    Object.keys(LINK_FALLBACKS).forEach((platform) => {
      const link = links.find((l) => l.platform === platform && l.url?.trim());
      linksMap[platform] = link?.url ?? LINK_FALLBACKS[platform];
    });

    return {
      ...content,
      linksMap,
    };
  },
);
