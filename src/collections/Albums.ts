import type { CollectionConfig } from "payload";

export const Albums: CollectionConfig = {
  slug: "albums",
  labels: {
    singular: "Gallery Album Media",
    plural: "Gallery Album Media",
  },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "category",
      label: "Category",
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
      name: "year",
      label: "Year",
      type: "number",
      required: true,
    },
  ],
};
