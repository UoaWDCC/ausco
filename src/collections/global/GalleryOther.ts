import type { GlobalConfig } from "payload";

const GalleryOther: GlobalConfig = {
  slug: "gallery-other",
  label: "Gallery - Other",
  admin: {
    description:
      "Do NOT upload multiple images directly on this page. To upload many images at once, use the bulk upload option in [Gallery Album Media]. Then come back here to select which uploaded images should appear on the website.",
  },
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
            category: { equals: "other" },
          },
          admin: {
            sortOptions: "-year,-createdAt",
            description: "Images are sorted by descending year, then by descending upload date.",
          },
        },
      ],
    },
  ],
};

export default GalleryOther;
