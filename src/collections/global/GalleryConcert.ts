import type { GlobalConfig } from "payload";

const GalleryConcert: GlobalConfig = {
  slug: "gallery-concert",
  label: "Gallery - Concert",
  fields: [
    {
      name: "albums",
      type: "array",
      labels: { singular: "album", plural: "albums" },
      fields: [
        { name: "year", label: "Year", type: "number", required: true },
        { name: "title", label: "Title", type: "text", required: true },
        {
          name: "images",
          type: "relationship",
          relationTo: "albums",
          hasMany: true,
          required: true,
          filterOptions: {
            category: { equals: "concert" },
          },
          admin: {
            sortOptions: "-year,-createdAt",
          },
        },
      ],
    },
  ],
};

export default GalleryConcert;
