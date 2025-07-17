import { GlobalConfig } from "payload";

export const OurPeople: GlobalConfig = {
  slug: "our-people",
  label: "Our People",
  fields: [
    {
      name: "generalDescription",
      label: "Short Description of Executive Committee",
      type: "text",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
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
          defaultValue: "John Doe",
        },
        {
          name: "role",
          label: "Executive Role",
          type: "text",
          required: true,
          defaultValue: "General Exec",
        },
        {
          name: "degree",
          label: "Degree",
          type: "text",
          required: true,
          defaultValue: "BSci",
        },
        {
          name: "description",
          label: "Fun Fact / Description",
          type: "text",
          required: true,
          defaultValue: "Lorem Ipsum",
        },
        {
          name: "image",
          label: "Profile Picture",
          type: "upload",
          relationTo: "media",
          required: true,
          defaultValue: "68716e81b0bf6c59846349f1",
        },
      ],
    },
  ],
};
