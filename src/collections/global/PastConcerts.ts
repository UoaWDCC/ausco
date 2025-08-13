import { GlobalConfig } from "payload";

export const PastConcerts: GlobalConfig = {
  slug: "past-concerts",
  label: "Past Concerts",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "headerSection",
      label: "Header Section",
      type: "group",
      fields: [
        { name: "title", label: "Title", type: "text", required: true },
        { name: "short-desc", label: "Short Description", type: "textarea", required: true },
      ],
    },
    {
      name: "years",
      label: "Concert Years",
      type: "array",
      minRows: 1,
      labels: {singular: "Concert Year", plural: "Concert Years"},
      fields: [
        { 
          name: "year", 
          label: "Year", 
          type: "text", 
          required: true,
        },
        { 
          name: "concerts", 
          label: "Concerts", 
          type: "group",
          fields: [
            {
              name: "semester1",
              label: "Semester 1 Concert",
              type: "group",
              fields: [
                {
                  name: "poster",
                  label: "Concert Poster",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "semester",
                  label: "Semester",
                  type: "text",
                  required: true,
                },
                {
                  name: "concertTitle",
                  label: "Concert TItle",
                  type: "text",
                  required: true,
                },
                {
                  name: "desc",
                  label: "Concert Description",
                  type: "textarea",
                  required: true,
                },
                {
                  name: "videoUrl",
                  label: "Concert Video URL",
                  type: "text",
                  required: true,
                },
                {
                  name: "charity",
                  label: "Charity Information",
                  type: "group",
                  fields: [
                    {
                      name: "name",
                      label: "Charity Name",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "websiteURL",
                      label: "Website URL",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "donationAmount",
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
              name: "semester2",
              label: "Semester 2 Concert",
              type: "group",
              fields: [
                {
                  name: "poster",
                  label: "Concert Poster",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "semester",
                  label: "Semester",
                  type: "text",
                  required: true,
                },
                {
                  name: "concertTitle",
                  label: "Concert TItle",
                  type: "text",
                  required: true,
                },
                {
                  name: "desc",
                  label: "Concert Description",
                  type: "textarea",
                  required: true,
                },
                {
                  name: "videoUrl",
                  label: "Concert Video URL",
                  type: "text",
                  required: true,
                },
                {
                  name: "charity",
                  label: "Charity Information",
                  type: "group",
                  fields: [
                    {
                      name: "name",
                      label: "Charity Name",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "websiteURL",
                      label: "Website URL",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "donationAmount",
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
    },
  ],  
}

export default PastConcerts;