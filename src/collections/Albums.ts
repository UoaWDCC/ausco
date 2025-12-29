import type { CollectionConfig } from "payload";

export const Albums: CollectionConfig = {
  slug: "albums",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "alt",
  },
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Concerts", value: "concert" },
        { label: "Annual Camp", value: "annualcamp" },
        { label: "Executive Camp", value: "executivecamp" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
