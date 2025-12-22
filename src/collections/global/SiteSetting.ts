import { GlobalConfig } from "payload";

const SiteSetting: GlobalConfig = {
  slug: "site-setting",
  label: "Site Setting",
  fields: [
    // Logos
    {
      name: "logos",
      label: "Logos",
      type: "group",
      admin: {
        description: "For best results, use an SVG format for the logos.",
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
      admin: {
        description:
          "Each platform can only be selected once. Duplicate platforms are not allowed.",
      },
      validate: (value) => {
        if (!value) return true;

        const platforms = value.map((item: any) => item.platform);
        const duplicates = platforms.filter(
          (platform, index) => platforms.indexOf(platform) !== index,
        );

        if (duplicates.length > 0) {
          return "Each platform can only be selected once.";
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

export default SiteSetting;
