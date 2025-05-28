import { CollectionConfig } from "payload";

const Videos: CollectionConfig = {
  slug: "Videos",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "youtubeUrl",
      label: "YouTube Video URL",
      type: "text",
      required: true,
    },
  ],
  access: {
    read: () => true, 
  },
};

export default Videos;