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
      /*TEMPORARY for testing grid render*/
      defaultValue: Array.from({ length: 10 }).map(() => ({
        name: "John Doe",
        role: "General Exec",
        degree: "BSci",
        description: "Lorem Ipsum",
        image: "",
      })),
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
