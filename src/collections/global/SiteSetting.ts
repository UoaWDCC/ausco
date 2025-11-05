import { GlobalConfig } from "payload";

export const SiteSetting: GlobalConfig = {
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

    // Social Media Links
    {
      name: "socialMediaLinks",
      type: "array",
      label: "Social Media Links",
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
          required: true,
        },
      ],
    },
  ],
};
