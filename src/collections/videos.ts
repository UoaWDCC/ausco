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
};

export default Videos;