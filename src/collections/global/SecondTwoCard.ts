import { GlobalConfig } from "payload";

const SecondTwoCard: GlobalConfig = {
  slug: "second-two-card",
  label: "Second Two Card",
  fields: [
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

export default SecondTwoCard;
