import { GlobalConfig } from "payload";

const ConcertsPast: GlobalConfig = {
  slug: "concerts-past",
  label: "Concerts - Past",
  fields: [
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true,
    },
    {
      name: "pastConcerts",
      label: "Past Concerts",
      type: "array",
      minRows: 1,
      labels: { singular: "Concert Year", plural: "Concert Years" },
      fields: [
        {
          name: "year",
          label: "Year",
          type: "number",
          required: true,
        },
        {
          name: "semesterOne",
          label: "Semester 1",
          type: "group",
          fields: [
            {
              name: "poster",
              label: "Poster",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              required: true,
            },
            {
              name: "url",
              label: "Concert Video URL",
              type: "text",
              required: true,
            },
            {
              name: "charity",
              label: "Charity",
              type: "group",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "url",
                  label: "Website URL",
                  type: "text",
                  required: true,
                },
                {
                  name: "donation",
                  label: "Donation Amount",
                  type: "number",
                  min: 0,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "semesterTwo",
          label: "Semester 2",
          type: "group",
          fields: [
            {
              name: "poster",
              label: "Poster",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              required: true,
            },
            {
              name: "url",
              label: "Concert Video URL",
              type: "text",
              required: true,
            },
            {
              name: "charity",
              label: "Charity",
              type: "group",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "url",
                  label: "Website URL",
                  type: "text",
                  required: true,
                },
                {
                  name: "donation",
                  label: "Donation Amount",
                  type: "number",
                  min: 0,
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default ConcertsPast;
