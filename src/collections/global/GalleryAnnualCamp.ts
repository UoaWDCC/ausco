import type { GlobalConfig } from "payload";

const GalleryAnnualCamp: GlobalConfig = {
  slug: "gallery-annualcamp",
  label: "Gallery - Annual Camp",
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
          relationTo: "media",
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
};

export default GalleryAnnualCamp;
