import { GlobalConfig } from "payload";

const Gallery: GlobalConfig = {
  slug: "gallery",
  label: "Gallery",
  admin: {
    description:
      "For background images, WebP (or JPG) works best and export at 2x size/resolution for sharpness.",
  },
  fields: [
    {
      name: "concert",
      label: "Concert Photos Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "annual",
      label: "Annual Camp Photos Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "executive",
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
