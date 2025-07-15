import { GlobalConfig } from "payload";

export const AboutFirstCards: GlobalConfig = {
  slug: "about-first-cards",
  label: "About Us Cards - Vision and History",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "visionCard",
      label: "Vision Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
        { name: "title", label: "Title", type: "text", required: true },
        { name: "short-desc", label: "Short Description", type: "textarea", required: true },
        { name: "full-desc", label: "Full Description (on hover)", type: "textarea", required: true },
      ],
    },
    {
      name: "historyCard",
      label: "History Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
        { name: "title", label: "Title", type: "text", required: true },
        { name: "short-desc", label: "Short Description", type: "textarea", required: true },
        { name: "full-desc", label: "Full Description (on hover)", type: "textarea", required: true },
      ],
    },
  ],
};

export default AboutFirstCards;
