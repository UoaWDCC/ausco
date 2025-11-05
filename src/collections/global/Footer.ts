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
      name: "socialMedia",
      type: "array",
      label: "Social Media",
      fields: [
        {
          name: "platform",
          type: "select",
          label: "Platform",
          required: true,
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "YouTube", value: "youtube" },
            { label: "Spotify", value: "spotify" },
          ],
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
        },
      ],
    },
    {
      name: "sections",
      type: "array",
      label: "Sections",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
        },
        {
          name: "options",
          type: "array",
          label: "Options",
          fields: [
            {
              name: "label",
              type: "text",
              label: "Label",
              required: true,
            },
            {
              name: "url",
              type: "text",
              label: "URL",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
