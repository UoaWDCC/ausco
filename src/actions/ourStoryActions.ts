import { getPayload } from "@libs/payload";
import { OurStory } from "@/payload-types";

export const getOurStory = async (): Promise<OurStory> => {
  const payload = await getPayload();
  const ourStory = await payload.findGlobal({
    slug: "our-story",
  });
  return ourStory;
};
