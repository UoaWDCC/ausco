import { GlobalConfig } from "payload";

const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  fields: [
    {
      name: "title",
      type: "textarea",
      required: true,
      admin: {
        description: "Line breaks are reflected in the website.",
      },
    },
    {
      name: "sections",
      label: "Sections",
      type: "array",
      maxRows: 3,
      admin: {
        description: "Maximum of 3 lists.",
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "options",
          type: "array",
          admin: {
            description: "Maximum of 3 links per list.",
          },
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
              required: true,
            },
            {
              name: "url",
              label: "URL",
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

export default Footer;
