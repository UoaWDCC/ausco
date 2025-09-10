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
  ],
};

export default AboutHeroSection;
