import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  fields: [
    {
      name: "title",
      type: "textarea",
      required: true,
    },
    {
      name: "sections",
      type: "array",
      label: "Sections",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "options",
          type: "array",
          fields: [
            {
              name: "label",
              type: "text",
              required: true,
            },
            {
              name: "url",
              type: "text",
              required: true,
            },
          ],
        },
      ],
      defaultValue: [
        { title: "Documents", options: [] },
        { title: "Join Us", options: [] },
        { title: "Reach Out", options: [] },
      ],
    },
  ],
};
