import type { GlobalConfig } from "payload";

const GalleryOther: GlobalConfig = {
  slug: "gallery-other",
  label: "Gallery - Other",
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true, defaultValue: "Other Photos" },
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

export default GalleryOther;
