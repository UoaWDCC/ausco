import { CollectionConfig } from "payload/types";

const Videos: CollectionConfig = {
  slug: "videos",
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