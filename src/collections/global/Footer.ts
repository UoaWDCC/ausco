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
            description:
              'Maximum of 3 links per list. The URLs for default links can be amended through [Site Settings]. To add a custom label/URL, select "Custom Link" under the dropdown menu',
          },
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
              required: true,
            },
            {
              name: "select",
              label: "Select a Link",
              type: "select",
              required: true,
              options: [
                { label: "Facebook", value: "facebook" },
                { label: "Instagram", value: "instagram" },
                { label: "YouTube", value: "youtube" },
                { label: "Spotify", value: "spotify" },
                { label: "Feedback Form", value: "feedbackForm" },
                { label: "Email", value: "email" },
                { label: "Constitution", value: "constitution" },
                { label: "Sign Up Form", value: "signUpForm" },
                { label: "Engage Page", value: "engage" },
                { label: "Custom Link", value: "custom" },
              ],
            },
            {
              name: "customUrl",
              label: "Custom URL",
              type: "text",
              admin: {
                condition: (_, siblingData) => siblingData?.select === "custom",
              },
              validate: (
                value: string | string[] | null | undefined,
                { siblingData }: { siblingData?: { select?: string } },
              ) => {
                const resolvedValue = Array.isArray(value) ? value[0] : value;

                if (siblingData?.select === "custom" && !resolvedValue) {
                  return "Custom URL is required when using a custom link.";
                }

                return true;
              },
            },
          ],
        },
      ],
      // // Starter template: only applies on document creation, not when editing existing docs
      // defaultValue: [
      //   {
      //     title: "Documents",
      //     options: [
      //       { label: "Proof of Registration", url: "" },
      //       { label: "Constitution", url: "" },
      //     ],
      //   },
      //   { title: "Join Us", options: [{ label: "Sign Up Form", url: "" }] },
      //   {
      //     title: "Reach Out",
      //     options: [
      //       { label: "Email", url: "" },
      //       { label: "Feedback Form", url: "" },
      //       { label: "Engage Page", url: "" },
      //     ],
      //   },
      // ],
    },
  ],
};

export default Footer;
