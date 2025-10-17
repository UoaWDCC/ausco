import type { GlobalConfig } from "payload";

//annual camp gallery
export const AnnualCampGallery: GlobalConfig = {
  slug: "annualcamp-gallery",
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
