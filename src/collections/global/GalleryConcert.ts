import type { GlobalConfig } from "payload";

const GalleryConcert: GlobalConfig = {
  slug: "gallery-concert",
  label: "Gallery - Concert",
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, defaultValue: "Concert Photos" },
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

export default GalleryConcert;
