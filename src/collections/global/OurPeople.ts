import { GlobalConfig } from "payload";

export const OurPeople: GlobalConfig = {
  slug: "our-people",
  label: "Our People Page",
  fields: [
    {
      name: "generalDescription",
      label: "Short Description of Executive Committee",
      type: "text",
      required: false,
    },
    {
      name: "execs",
      type: "array",
      label: "Executive Members",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "role",
          label: "Executive Role",
          type: "text",
          required: true,
        },
        {
          name: "degree",
          label: "Degree",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Fun Fact / Description",
          type: "text",
          required: true,
        },
        {
          name: "image",
          label: "Profile Picture",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
