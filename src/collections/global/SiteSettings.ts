import { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "siteSettings",
  label: "Site Settings",
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

    // External Links
    {
      name: "externalLinks",
      type: "array",
      label: "External Links",
      fields: [
        {
          name: "platform",
          type: "select",
          label: "Platform",
          required: true,
          options: [
            { label: "Email", value: "email" },
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "YouTube", value: "youtube" },
            { label: "Spotify", value: "spotify" },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
