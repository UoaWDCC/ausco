import { GlobalConfig } from "payload";

const AboutUsCards: GlobalConfig = {
  slug: "about-us-cards",
  label: "About Us Cards",
  access: {
    read: () => true,
  },
  fields: [
    // Fields from AboutFirstCards.ts
    {
      name: "visionCard",
      label: "Vision Card",
      type: "group",
      fields: [
        {
          name: "background-image",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        { name: "title", label: "Title", type: "text", required: true },
        { name: "short-desc", label: "Short Description", type: "textarea", required: true },
        {
          name: "full-desc",
          label: "Full Description (on hover)",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "historyCard",
      label: "History Card",
      type: "group",
      fields: [
        {
          name: "background-image",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        { name: "title", label: "Title", type: "text", required: true },
        { name: "short-desc", label: "Short Description", type: "textarea", required: true },
        {
          name: "full-desc",
          label: "Full Description (on hover)",
          type: "textarea",
          required: true,
        },
      ],
    },
    // Fields from SecondTwoCard.ts
    {
      name: "leftBox",
      label: "Left Box (Constitution)",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "shortDescription",
          label: "Short Description",
          type: "textarea",
          required: true,
        },
        {
          name: "fullText",
          label: "Full Text (on hover)",
          type: "textarea",
          required: true,
        },
        {
          name: "backgroundImage",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
          required: false,
        },
      ],
    },
    {
      name: "rightBox",
      label: "Right Box (Sponsors & Partnership)",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "shortDescription",
          label: "Short Description",
          type: "textarea",
          required: true,
        },
        {
          name: "fullText",
          label: "Full Text (on hover)",
          type: "textarea",
          required: true,
        },
        {
          name: "sponsorLogos",
          label: "Sponsor Logos",
          type: "array",
          fields: [
            {
              name: "logo",
              label: "Logo Image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          name: "backgroundImage",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
          required: false,
        },
      ],
    },
  ],
};

export default AboutUsCards;
