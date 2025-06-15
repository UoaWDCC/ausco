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
  ],
};

export default OurPeople;