import { GlobalConfig } from "payload";

/**
 * NOTE:
 * Payload Globals are single documents.
 * Even if the slug is plural (`our-people`),
 * Payload generates a singular TypeScript type (`OurPerson`).
 * This is expected and types-only.
 */
export const OurPeople: GlobalConfig = {
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
          type: "array",
          label: "Executive Team Members",
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
              name: "profilePicture",
              label: "Profile Picture",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
    // // Conductors Component
    // {
    //   name: "conductors",
    //   label: "Conductors",
    //   type: "group",
    //   fields: [
    //     {
    //       name: "profilePicture",
    //       label: "Profile Picture",
    //       type: "upload",
    //       relationTo: "media",
    //       required: true,
    //     },
    //     {
    //       name: "name",
    //       label: "Name",
    //       type: "text",
    //       required: true,
    //       defaultValue: "John Doe",
    //     },
    //     {
    //       name: "description",
    //       label: "Fun Fact / Description",
    //       type: "text",
    //       required: true,
    //       defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     },
    //     {
    //       name: "border",
    //       label: "border",
    //       type: "upload",
    //       relationTo: "media",
    //       required: true,
    //     },
    //   ],
    // },
    // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // {
    //   name: "playerDescription",
    //   label: "Short Description of Players",
    //   type: "text",
    //   required: false,
    // },
    // {
    //   name: "sections",
    //   type: "blocks",
    //   blocks: [
    //     {
    //       slug: "large-group",
    //       labels: {
    //         singular: "Large Orchestra Section (full column)",
    //         plural: "Large Orchestra Sections (full columns)",
    //       },
    //       fields: [
    //         {
    //           name: "sectionTitle",
    //           type: "text",
    //           required: true,
    //         },
    //         {
    //           name: "photo",
    //           type: "upload",
    //           relationTo: "media",
    //           required: true,
    //         },
    //         {
    //           name: "players",
    //           type: "array",
    //           fields: [
    //             {
    //               name: "name",
    //               type: "text",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       slug: "small-group",
    //       labels: {
    //         singular: "Small Orchestra Section (half column)",
    //         plural: "Small Orchestra Sections (half columns)",
    //       },
    //       fields: [
    //         {
    //           name: "sectionTitle",
    //           type: "text",
    //           required: true,
    //         },
    //         {
    //           name: "photo",
    //           type: "upload",
    //           relationTo: "media",
    //           required: true,
    //         },
    //         {
    //           name: "players",
    //           type: "array",
    //           fields: [
    //             {
    //               name: "name",
    //               type: "text",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "hallOfFame",
    //   type: "array",
    //   label: "Hall Of Fame",
    //   fields: [
    //     {
    //       name: "pastPresidents",
    //       label: "Past Presidents",
    //       type: "array",
    //       fields: [
    //         {
    //           name: "name",
    //           label: "Name",
    //           type: "text",
    //         },
    //         {
    //           name: "description",
    //           label: "Description",
    //           type: "text",
    //         },
    //         {
    //           name: "image",
    //           label: "Profile Picture",
    //           type: "upload",
    //           relationTo: "media",
    //         },
    //       ],
    //     },
    //     {
    //       name: "founders",
    //       label: "Founders",
    //       type: "array",
    //       fields: [
    //         {
    //           name: "name",
    //           label: "Name",
    //           type: "text",
    //         },
    //         {
    //           name: "description",
    //           label: "Description",
    //           type: "text",
    //         },
    //         {
    //           name: "image",
    //           label: "Profile Picture",
    //           type: "upload",
    //           relationTo: "media",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
