import { GlobalConfig } from "payload";

export const OurPeople: GlobalConfig = {
  slug: "our-people",
  label: "Our People Page",
  fields: [
    {
      name: "generalDescription",
      label: "Short Description of Executive Committee",
      type: "text",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      required: false,
    },
    {
      name: "execs",
      type: "array",
      label: "Executive Members",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
          defaultValue: "John Doe",
        },
        {
          name: "role",
          label: "Executive Role",
          type: "text",
          required: true,
          defaultValue: "General Exec",
        },
        {
          name: "degree",
          label: "Degree",
          type: "text",
          required: true,
          defaultValue: "BSci",
        },
        {
          name: "description",
          label: "Fun Fact / Description",
          type: "text",
          required: true,
          defaultValue: "Lorem Ipsum",
        },
        {
          name: "image",
          label: "Profile Picture",
          type: "upload",
          relationTo: "media",
          required: true,
          defaultValue: "68716e81b0bf6c59846349f1",
        },
      ],
    },
    // conductors section
    {
      name: "conductorsSection",
      type: "group",
      label: "Conductors Section",
      fields: [
        {
          name: "conductorFrame",
          type: "upload",
          relationTo: "media",
          label: "Round Frame Image",
          required: false,
        },
        {
          name: "conductor1",
          type: "group",
          label: "Conductor 1",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Conductor 1 Name",
              required: false,
              defaultValue: "Conductor 1",
            },
            {
              name: "description",
              type: "text",
              label: "Conductor 1 Description",
              required: false,
              defaultValue:
                "Description about them (Developers just put lorem ipsum text for now)",
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Conductor 1 Image",
              required: false,
            },
          ],
        },
        {
          name: "conductor2",
          type: "group",
          label: "Conductor 2",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Conductor 2 Name",
              required: false,
              defaultValue: "Conductor 2",
            },
            {
              name: "description",
              type: "text",
              label: "Conductor 2 Description",
              required: false,
              defaultValue:
                "Description about them (Developers just put lorem ipsum text for now)",
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Conductor 2 Image",
              required: false,
            },
          ],
        },
        {
          name: "conductor3",
          type: "group",
          label: "Conductor 3",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Conductor 3 Name",
              required: false,
              defaultValue: "Conductor 3",
            },
            {
              name: "description",
              type: "text",
              label: "Conductor 3 Description",
              required: false,
              defaultValue:
                "Description about them (Developers just put lorem ipsum text for now)",
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Conductor 3 Image",
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: "playerDescription",
      label: "Short Description of Players",
      type: "text",
      required: false,
    },
    {
      name: "sections",
      type: "blocks",
      blocks: [
        {
          slug: "large-group",
          labels: {
            singular: "Large Orchestra Section (full column)",
            plural: "Large Orchestra Sections (full columns)",
          },
          fields: [
            {
              name: "sectionTitle",
              type: "text",
              required: true,
            },
            {
              name: "photo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "players",
              type: "array",
              fields: [
                {
                  name: "name",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          slug: "small-group",
          labels: {
            singular: "Small Orchestra Section (half column)",
            plural: "Small Orchestra Sections (half columns)",
          },
          fields: [
            {
              name: "sectionTitle",
              type: "text",
              required: true,
            },
            {
              name: "photo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "players",
              type: "array",
              fields: [
                {
                  name: "name",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
