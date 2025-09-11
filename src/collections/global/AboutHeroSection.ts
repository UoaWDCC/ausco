import { GlobalConfig } from "payload";

export const AboutHeroSection: GlobalConfig = {
  slug: "about-hero-section",
  label: "About Hero Section",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "aboutUsStickers",
      label: "about us stickers",
      type: "array",
      fields: [
        {
          name: "sticker-image",
          label: "Sticker image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "AboutUsHeader",
      label: "about us header",
      type: "text",
    },
    {
      name: "AboutUsDescription",
      label: "about us description",
      type: "text",
    },
  ],
};

export default AboutHeroSection;
