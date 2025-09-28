import { GlobalConfig } from "payload";

export const OurStory: GlobalConfig = {
  slug: "our-story",
  label: "Our Story",
  fields: [
    {
      name: "OurStoryTitle",
      label: "page title",
      type: "text",
      defaultValue: "OurStory",
      required: true,
    },
    {
      name: "OurStoryDescription",
      label: "description of our story page",
      type: "text",
      defaultValue: "This is a description of the AUSCO story in a few sentences.",
      required: true,
    },
    {
      name: "timeline",
      type: "array",
      label: "Timeline item",
      fields: [
        {
          name: "year",
          label: "Year",
          type: "text",
          required: true,
          defaultValue: "2025",
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: false,
          defaultValue: "Title",
        },
        {
          name: "dateInfo",
          label: "Date or additional info",
          type: "text",
          required: false,
        },
        {
          name: "presidents",
          label: "Presidents",
          type: "array",
          fields: [
            {
              name: "president",
              label: "President",
              type: "text",
              required: true,
              defaultValue: "John Doe",
            },
          ],
        },
        {
          name: "vicePresidents",
          label: "Vice Presidents",
          type: "array",
          fields: [
            {
              name: "vicePresident",
              label: "Vice President",
              type: "text",
              required: true,
              defaultValue: "John Doe",
            },
          ],
        },
        {
          name: "conductors",
          label: "Conductors",
          type: "array",
          fields: [
            {
              name: "conductor",
              label: "Conductor",
              type: "text",
              required: true,
              defaultValue: "John Doe",
            },
          ],
        },
        {
          name: "description",
          label: "Description of the year's events.",
          type: "text",
          required: true,
          defaultValue: "this is a desciption of the nevents for the year",
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
          defaultValue: "68716e81b0bf6c59846349f1",
        },
      ],
    },
  ],
};
