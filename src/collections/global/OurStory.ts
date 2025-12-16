import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  FixedToolbarFeature,
} from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

export const OurStory: GlobalConfig = {
  slug: "our-story",
  label: "Our Story",
  fields: [
    // Header Component
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    // Standard Timeline Component
    {
      name: "timeline",
      label: "Timeline",
      type: "array",
      fields: [
        {
          name: "year",
          label: "Year",
          type: "number",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "presidents",
          label: "Presidents",
          type: "group",
          fields: [
            {
              name: "role",
              label: "Role",
              type: "select",
              options: [
                { label: "President", value: "president" },
                { label: "Co-President", value: "co-president" },
              ],
              required: true,
            },
            {
              name: "termLength",
              label: "Presidency Duration",
              type: "select",
              options: [
                { label: "Full Year", value: "fullYear" },
                { label: "Semester", value: "semester" },
              ],
              required: true,
            },
            // Only one field for full year-based presidency
            {
              name: "fullYearName",
              label: "Name(s) - Full Year",
              type: "text",
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData.termLength === "fullYear",
              },
            },
            // Two fields for semester-based presidency
            {
              name: "semesterName",
              label: "Names(s) - Semester",
              type: "group",
              admin: {
                condition: (_, siblingData) => siblingData.termLength === "semester",
              },
              fields: [
                {
                  name: "nameOne",
                  label: "Semester 1 Name(s)",
                  type: "text",
                  required: true,
                },
                {
                  name: "nameTwo",
                  label: "Semester 2 Name(s)",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "vicePresidents",
          label: "Vice-Presidents",
          type: "group",
          fields: [
            {
              name: "exists",
              label: "Do Vice Presidents exist this year?",
              type: "radio",
              required: true,
              options: [
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ],
              defaultValue: "true",
            },
            {
              name: "termLength",
              label: "Vice-Presidency Duration",
              type: "select",
              options: [
                { label: "Full Year", value: "fullYear" },
                { label: "Semester", value: "semester" },
              ],
              required: true,
              admin: {
                // Show only if vice presidents exist
                condition: (_, siblingData) => siblingData.exists === "true",
              },
            },
            // Only one field for full year-based vice-presidency
            {
              name: "fullYearName",
              label: "Name(s) - Full Year",
              type: "text",
              required: true,
              admin: {
                condition: (_, siblingData) =>
                  siblingData.exists === "true" && siblingData.termLength === "fullYear",
              },
            },
            // Two fields for semester-based vice-presidency
            {
              name: "semesterName",
              label: "Names(s) - Semester",
              type: "group",
              admin: {
                condition: (_, siblingData) =>
                  siblingData.exists === "true" && siblingData.termLength === "semester",
              },
              fields: [
                {
                  name: "nameOne",
                  label: "Semester 1 Name(s)",
                  type: "text",
                  required: true,
                },
                {
                  name: "nameTwo",
                  label: "Semester 2 Name(s)",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "conductors",
          label: "Conductors",
          type: "group",
          fields: [
            {
              name: "termLength",
              label: "Conductor Duration",
              type: "select",
              options: [
                { label: "Full Year", value: "fullYear" },
                { label: "Semester", value: "semester" },
              ],
              required: true,
            },
            // Only one field for full year-based conducting
            {
              name: "fullYearName",
              label: "Name(s) - Full Year",
              type: "text",
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData.termLength === "fullYear",
              },
            },
            // Two fields for semester-based conducting
            {
              name: "semesterName",
              label: "Names(s) - Semester",
              type: "group",
              admin: {
                condition: (_, siblingData) => siblingData.termLength === "semester",
              },
              fields: [
                {
                  name: "nameOne",
                  label: "Semester 1 Name(s)",
                  type: "text",
                  required: true,
                },
                {
                  name: "nameTwo",
                  label: "Semester 2 Name(s)",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "content",
          label: "Content",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: () => [
              BoldFeature(),
              ItalicFeature(),
              UnderlineFeature(),
              FixedToolbarFeature(),
            ],
          }),
        },
      ],
    },
    // Establishment Component (unique structure compared to Standard Timeline Component)
    {
      name: "establishment",
      label: "Establishment",
      type: "group",
      fields: [
        {
          name: "year",
          label: "Year",
          type: "number",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "date",
          label: "Date, Time, Location",
          type: "text",
          required: false,
        },
        {
          name: "present",
          label: "Present Attendees",
          type: "text",
          required: false,
        },
        {
          name: "apologies",
          label: "Apologies",
          type: "text",
          required: false,
        },
        {
          name: "meetingOpen",
          label: "Meeting Opened Time",
          type: "text",
          required: false,
        },
        {
          name: "establishmentText",
          label: "Establishment Text",
          type: "textarea",
          required: false,
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "content",
          label: "Content",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: () => [
              BoldFeature(),
              ItalicFeature(),
              UnderlineFeature(),
              FixedToolbarFeature(),
            ],
          }),
        },
      ],
    },
  ],
};
