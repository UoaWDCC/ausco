import { GlobalConfig } from 'payload';

export const OurPeople: GlobalConfig = {
  slug: 'our-people',
  label: 'Our People',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: "image",
        label: "Our People Image",
        type: "upload",
        relationTo: "media",
    },
    {
        name: "description",
        label: "description",
        type: "text",
    },
    {
      name: "hallOfFame",
      label: "Hall Of Fame",
      type: "group",
      admin: {
        description:
          "Add, edit, or remove cards for Hall of Fame section. Each card can have a title, description and image.",
      },
      fields: [
        {
          name: "pastPresidents",
          label: "Past Presidents",
          type: "array",
          fields: [
            {
              name: "name",
              label: "Name",
              type: "text",
            },
            {
              name: "image",
              label: "Image",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
            },
          ],
        },
        {
          name: "founders",
          label: "Founders",
          type: "array",
          defaultValue: [
            {
              name: "Founder 1",
              image: "", 
              description: "This is a description about the founder. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
            },
            {
              name: "Founder 2",
              image: "", 
              description: "This is a description about the founder. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
            },
          ],
          fields: [
            {
              name: "name",
              label: "Name",
              type: "text",
            },
            {
              name: "image",
              label: "Image",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "description",
              label: "Description",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export default OurPeople;