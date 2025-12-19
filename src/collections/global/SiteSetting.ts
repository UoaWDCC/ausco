import { GlobalConfig } from "payload";

const SiteSetting: GlobalConfig = {
  slug: "siteSetting",
  label: "Site Setting",
  fields: [
    // Logos
    {
      name: "primaryLogo",
      label: "Primary Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "secondaryLogo",
      label: "Secondary Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "tertiaryLogo",
      label: "Tertiary Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    // Links
    {
      name: "links",
      type: "array",
      label: "Links",
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
            { label: "Feedback Form", value: "feedbackForm" },
            { label: "Email", value: "email" },
          ],
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
};

export default SiteSetting