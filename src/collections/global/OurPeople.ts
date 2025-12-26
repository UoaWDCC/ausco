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
          admin: {
            description:
              "For hero images, WebP (or JPG) works best and export at 2x size/resolution for sharpness.",
          },
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
              admin: {
                description:
                  "Images will be automatically cropped to a square aspect ratio, keeping the center content visible.",
              },
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
          admin: {
            description:
              "Frame changes are discouraged. However, if needed, maintain the same size, aspect ratio, and inner frame dimensions to avoid affecting the profile image display.",
          },
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
              admin: {
                description:
                  "Images are automatically cropped to fit the frame. For best results, use images roughly matching the frame's aspect ratio.",
              },
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
      admin: {
        description:
          "The [Large Orchestra Section] occupies a full column height, while [Small Orchestra Section] occupies half a column height and can stack with other half columns. All full columns are displayed first, followed by half columns. Recommended width: ~5 columns.",
      },
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
                  admin: { description: "An aspect ratio similar to a square works best." },
                },
                {
                  name: "players",
                  label: "List of Players",
                  type: "text",
                  required: true,
                  admin: {
                    description:
                      "Seperate names using commas or semi-colans (e.g. Name 1; Name 2; Name 3; Name 4).",
                  },
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
                  admin: { description: "An aspect ratio similar to a square works best." },
                },
                {
                  name: "players",
                  label: "List of Section Players",
                  type: "text",
                  required: true,
                  admin: {
                    description:
                      "Seperate names using commas or semi-colans (e.g. Name 1; Name 2; Name 3; Name 4).",
                  },
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
              admin: {
                description:
                  "Frame changes are discouraged. However, if needed, maintain the same size, aspect ratio, and inner frame dimensions to avoid affecting the profile image display.",
              },
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
                  admin: {
                    description:
                      "Images are automatically cropped to fit the frame. For best results, use images roughly matching the frame's aspect ratio.",
                  },
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
              admin: {
                description:
                  "Frame changes are discouraged. However, if needed, maintain the same size, aspect ratio, and inner frame dimensions to avoid affecting the profile image display.",
              },
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
                  admin: {
                    description:
                      "Images are automatically cropped to fit the frame. For best results, use images roughly matching the frame's aspect ratio.",
                  },
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
