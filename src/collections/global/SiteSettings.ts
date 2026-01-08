import { GlobalConfig } from "payload";

const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  fields: [
    // Logos
    {
      name: "logos",
      label: "Logos",
      type: "group",
      admin: {
        description:
          "Upload logos in this order of preference: 1. SVG, 2. PNG or WebP if transparency is needed, 3. JPG if transparency is not needed.",
      },
      fields: [
        {
          name: "primary",
          label: "Primary",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "secondary",
          label: "Secondary",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "tertiary",
          label: "Tertiary",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    // Links
    {
      name: "links",
      label: "Links",
      type: "array",
      maxRows: 7,
      admin: {
        description: "Each platform can only be selected once.",
      },
      validate: (value) => {
        if (!value) return true;

        const platforms = value.map((item: any) => item.platform);
        const duplicates = platforms.filter(
          (platform, index) => platforms.indexOf(platform) !== index,
        );

        if (duplicates.length > 0) {
          return "Duplicate platforms are not allowed.";
        }

        return true;
      },
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
            { label: "Constitution", value: "constitution" },
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

export default SiteSettings;
