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
              name: "termType",
              label: "Term",
              type: "select",
              options: [
                { label: "Semester 1", value: "sem1" },
                { label: "Semester 2", value: "sem2" },
                { label: "Full Year", value: "full" },
                { label: "Co-President", value: "co" },
              ],
              required: true,
              defaultValue: "full",
            },
            {
              name: "president",
              label: "President Name",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "vicePresidents",
          label: "Vice Presidents",
          type: "array",
          fields: [
            {
              name: "termType",
              label: "Term",
              type: "select",
              options: [
                { label: "Semester 1", value: "sem1" },
                { label: "Semester 2", value: "sem2" },
                { label: "Full Year", value: "full" },
                { label: "Co-Vice President", value: "co" },
              ],
              required: true,
              defaultValue: "full",
            },
            {
              name: "vicePresident",
              label: "Vice President Name",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "conductors",
          label: "Conductors",
          type: "array",
          fields: [
            {
              name: "termType",
              label: "Term",
              type: "select",
              options: [
                { label: "Semester 1", value: "sem1" },
                { label: "Semester 2", value: "sem2" },
                { label: "Full Year", value: "full" },
                { label: "Co-Conductor", value: "co" },
              ],
              required: true,
              defaultValue: "full",
            },
            {
              name: "conductor",
              label: "Conductor Name",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "description",
          label: "Description of the year's events",
          type: "array",
          labels: {
            singular: "Paragraph",
            plural: "Paragraphs",
          },
          required: true,
          fields: [
            {
              name: "paragraph",
              type: "textarea",
              label: "Paragraph Text",
              required: true,
            },
          ],
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
