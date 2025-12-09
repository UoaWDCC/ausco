import { GlobalConfig } from "payload";

export const Gallery: GlobalConfig = {
  slug: "gallery",
  label: "Gallery",
  fields: [
    {
      name: "concert",
      label: "Concert Photos Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "annualCamp",
      label: "Annual Camp Photos Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "executiveCamp",
      label: "Executive Camp Photos Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "other",
      label: "Other Photos Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Gallery;
