import type { GlobalConfig } from "payload";

//executive camp gallery
export const ExecutiveCampGallery: GlobalConfig = {
  slug: "executivecamp-gallery",
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, defaultValue: "Executive Camp Photos" },
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
