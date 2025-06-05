import { GlobalConfig } from 'payload';

const OurPeople: GlobalConfig = {
  slug: 'our-people',
  label: 'Our People',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: "Image",
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