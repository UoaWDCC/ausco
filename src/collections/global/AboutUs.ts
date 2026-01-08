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
          admin: {
            description:
              "Maximum and recommended number of stickers: 6. Use PNG format for transparent backgrounds (WebP also supported).",
          },
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
      admin: {
        description:
          "For background images, WebP (or JPG) works best and export at 2x size/resolution for sharpness.",
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
          ],
        },
        {
          name: "constitution",
          label: "Constitution",
          type: "group",
          admin: {
            description: "Note: To change the link to AUSCO's Constitution, please refer to [Site Settings | Links]."
          },
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
              admin: {
                description:
                  "Upload logos in this order of preference: 1. SVG, 2. PNG or WebP if transparency is needed, 3. JPG if transparency is not needed.",
              },

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
