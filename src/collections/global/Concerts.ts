import { GlobalConfig } from "payload";

export const Concerts: GlobalConfig = {
  slug: "concerts",
  label: "Concerts",
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
