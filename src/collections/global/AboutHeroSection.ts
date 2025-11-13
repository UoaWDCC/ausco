import { GlobalConfig } from "payload";

export const AboutUsPage: GlobalConfig = {
  slug: "about-us-page",
  label: "About Us Page",
  fields: [
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "stickers-array",
      label: "Array of Stickers",
      type: "array",
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
};

export default AboutUsPage;
