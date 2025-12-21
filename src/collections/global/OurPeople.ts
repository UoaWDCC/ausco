import { GlobalConfig } from "payload";

/**
 * NOTE:
 * Payload Globals are single documents.
 * Even if the slug is plural (`our-people`),
 * Payload generates a singular TypeScript type (`OurPerson`).
 * This is expected and types-only.
 */
const OurPeople: GlobalConfig = {
  slug: "our-people",
  label: "Our People",
  fields: [
    // Header Component
    {
      name: "header",
      label: "Header",
      type: "group",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "text",
          required: false,
        },
      ],
    },
    // Executive Team Component
    {
      name: "executive",
      label: "Executive Team",
      type: "group",
      fields: [
        {
          name: "description",
          label: "Executive Team Description",
          type: "text",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          required: false,
        },
        {
          name: "members",
          label: "Executive Team Members",
          type: "array",
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
              label: "Role",
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
              defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              name: "image",
              label: "Profile Picture",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
    // Conductors Component
    {
      name: "conductors",
      label: "Conductors",
      type: "group",
      fields: [
        {
          name: "frame",
          label: "Frame",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "members",
          label: "Conductor Members",
          type: "array",
          fields: [
            {
              name: "image",
              label: "Profile Picture",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "name",
              label: "Name",
              type: "text",
              required: true,
              defaultValue: "John Doe",
            },
            {
              name: "description",
              label: "Fun Fact / Description",
              type: "text",
              required: true,
              defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
      ],
    },
    // Players Component
    {
      name: "players",
      label: "Orchestra Players",
      type: "group",
      fields: [
        {
          name: "description",
          label: "Players Description",
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
                  name: "title",
                  label: "Section Title",
                  type: "text",
                  required: true,
                },
                {
                  name: "image",
                  label: "Section Image",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "players",
                  label: "List of Players",
                  type: "text",
                  required: true,
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
                  name: "title",
                  label: "Section Title",
                  type: "text",
                  required: true,
                },
                {
                  name: "image",
                  label: "Section Image",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "players",
                  label: "List of Section Players",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    // Hall of Fame Component
    {
      name: "hallOfFame",
      label: "Hall Of Fame",
      type: "group",
      fields: [
        {
          name: "pastPresidents",
          label: "Past Presidents",
          type: "group",
          fields: [
            {
              name: "frame",
              label: "Frame",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "members",
              label: "Past President Members",
              type: "array",
              fields: [
                {
                  name: "image",
                  label: "Profile Picture",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "description",
                  label: "Description",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "founders",
          label: "Founders",
          type: "group",
          fields: [
            {
              name: "frame",
              label: "Frame",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "members",
              label: "Founder Members",
              type: "array",
              fields: [
                {
                  name: "image",
                  label: "Profile Picture",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "description",
                  label: "Description",
                  type: "text",
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

export default OurPeople;
