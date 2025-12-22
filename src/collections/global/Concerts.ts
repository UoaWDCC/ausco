import { GlobalConfig } from "payload";

const Concerts: GlobalConfig = {
  slug: "concerts",
  label: "Concerts",
  admin: {
    description:
      "For background images, WebP (or JPG) works best and export at 2x size/resolution for sharpness.",
  },
  fields: [
    {
      name: "upcoming",
      label: "Upcoming Concerts Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "past",
      label: "Past Concerts Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Concerts;
