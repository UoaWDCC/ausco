import type { CollectionConfig } from "payload";

export const Item: CollectionConfig = {
  slug: "test",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "dateTime",
      type: "date",
      defaultValue: new Date(),
      required: true,
    },
  ],
};
