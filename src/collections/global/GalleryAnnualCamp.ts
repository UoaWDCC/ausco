import type { GlobalConfig } from "payload";

const GalleryAnnualCamp: GlobalConfig = {
  slug: "gallery-annualcamp",
  label: "Gallery - Annual Camp",
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, defaultValue: "Annual Camp Photos" },
    {
      name: "albums",
      type: "array",
      labels: { singular: "album", plural: "albums" },
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "images",
          type: "array",
          labels: { singular: "image", plural: "images" },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            { name: "alt", type: "text" },
          ],
        },
      ],
    },
  ],
};

export default GalleryAnnualCamp
