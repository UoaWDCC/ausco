import type { GlobalConfig } from "payload";

const GalleryExecutiveCamp: GlobalConfig = {
  slug: "gallery-executivecamp",
  label: "Gallery - Executive Camp",
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

export default GalleryExecutiveCamp;
