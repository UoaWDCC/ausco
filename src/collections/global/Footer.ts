import { GlobalConfig } from "payload";

const Footer: GlobalConfig = {
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
      // Starter template: only applies on document creation, not when editing existing docs
      defaultValue: [
        {
          title: "Documents",
          options: [
            { label: "Proof of Registration", url: "" },
            { label: "Constitution", url: "" },
          ],
        },
        { title: "Join Us", options: [{ label: "Sign Up Form", url: "" }] },
        {
          title: "Reach Out",
          options: [
            { label: "Email", url: "" },
            { label: "Feedback Form", url: "" },
            { label: "Engage Page", url: "" },
          ],
        },
      ],
    },
  ],
};

export default Footer