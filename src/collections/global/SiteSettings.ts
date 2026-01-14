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
        description: "Order of preference for file type: 1. SVG, 2. WebP or PNG  3. JPG.",
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
      maxRows: 9,
      admin: {
        description:
          "Each platform can only be selected once. If no values are provided, these are the fallbacks in place: Facebook: 'https://www.facebook.com/ausco.ausa', Instagram: 'https://www.instagram.com/ausco.uoa/', Youtube: 'https://www.youtube.com/@AUSCO-UoA', Spotify: 'https://open.spotify.com/user/31b5qnnkievulqbuxajy5etbmo7u?si=d4f38d8f71e349b7&nd=1&dlsi=456d9aa5404649b4', Feedback Form: 'https://google.com', Email: 'mailto:example@example.com', Constitution: 'https://auckland.campuslabs.com/engage/organization/auckland-university-student-chamber-orchestra', SignUp Form: 'https://google.com', Engage: 'https://google.com'. Changing the fallbacks will require a developer's assistance.",
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
            { label: "Sign Up Form", value: "signUpForm" },
            { label: "Engage Page", value: "engage" },
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
