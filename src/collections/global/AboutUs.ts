import { GlobalConfig } from "payload";

const AboutUs: GlobalConfig = {
  slug: "about-us",
  label: "About Us",
  fields: [
    // Hero Component
    {
      name: "hero",
      label: "Hero",
      type: "group",
      fields: [
        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true,
        },
        {
          name: "stickers",
          label: "Array of Stickers",
          type: "array",
          maxRows: 6,
          fields: [
            {
              name: "sticker",
              label: "Sticker",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
    // Card Components
    {
      name: "cards",
      label: "Cards",
      type: "group",
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
              label: "Full Description (on hover)",
              type: "textarea",
              required: true,
            },
            {
              name: "sponsorLogos",
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
    },
  ],
};

export default AboutUs;
