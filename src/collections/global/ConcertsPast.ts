import { GlobalConfig } from "payload";

const ConcertsPast: GlobalConfig = {
  slug: "concerts-past",
  label: "Concerts - Past",
  admin: {
    description:
      "For each year, both Semester 1 and Semester 2 concerts must be listed (a year cannot have only one semester's concerts).",
  },
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
              admin: {
                description: "An aspect ratio similar to A4 works best.",
              },
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
              name: "photoAlbum",
              label: "Gallery Photo Album",
              type: "text",
              required: false,
              admin: {
                description:
                  "The link has to be native to this website (i.e https://ausco.wdcc.co.nz). Once the photo album is available in the Gallery page, enter the full link to the photo album (e.g. https://ausco.wdcc.co.nz/gallery/annual/[concert-name]). If the photo album is not ready, leave the field blank and the poster will not link to an album.",
              },
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
                  admin: {
                    description: "Donation value only, no $ needed.",
                  },
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
              admin: {
                description: "An aspect ratio similar to A4 works best.",
              },
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
              name: "photoAlbum",
              label: "Gallery Photo Album",
              type: "text",
              required: false,
              admin: {
                description:
                  "The link has to be native to this website (i.e https://ausco.wdcc.co.nz). Once the photo album is available in the Gallery page, enter the full link to the photo album (e.g. https://ausco.wdcc.co.nz/gallery/annual/[concert-name]). If the photo album is not ready, leave the field blank and the poster will not link to an album.",
              },
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
                  admin: {
                    description: "Donation value only, no $ needed.",
                  },
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
