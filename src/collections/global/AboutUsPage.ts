import { GlobalConfig } from "payload";

export const AboutUsPage: GlobalConfig = {
  slug: "about-us-page",
  label: "About Us Page",
  fields: [
    {
      // Hero Component
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
              required: false,
            },
          ],
        },
      ],
    },
  ],
};

export default AboutUsPage;
