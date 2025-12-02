import { GlobalConfig } from "payload";

const AboutUsCards: GlobalConfig = {
  slug: "about-us-cards",
  label: "About Us Cards",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "vision",
      label: "Vision",
      type: "group",
      fields: [
        {
          name: "background",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "summary",
          label: "Summary",
          type: "textarea",
          required: true,
        },
        {
          name: "description",
          label: "Description (on hover)",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "story",
      label: "Story",
      type: "group",
      fields: [
        {
          name: "background",
          label: "Background",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "summary",
          label: "Summary",
          type: "textarea",
          required: true,
        },
        {
          name: "description",
          label: "Description (on hover)",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "constitution",
      label: "Constitution",
      type: "group",
      fields: [
        {
          name: "background",
          label: "Background",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "summary",
          label: "Summary",
          type: "textarea",
          required: true,
        },
        {
          name: "description",
          label: "Description (on hover)",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "sponsorsAndPartnerships",
      label: "Sponsors and Partnerships",
      type: "group",
      fields: [
        {
          name: "background",
          label: "Background",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "summary",
          label: "Summary",
          type: "textarea",
          required: true,
        },
        {
          name: "description",
          label: "Description (on hover)",
          type: "textarea",
          required: true,
        },
        {
          name: "logos",
          label: "Sponsor and Partnership Logos",
          type: "array",
          fields: [
            {
              name: "logo",
              label: "Logo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default AboutUsCards;
