import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  FixedToolbarFeature,
} from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

const Home: GlobalConfig = {
  slug: "home",
  label: "Home",
  fields: [
    // Hero Component
    {
      name: "hero",
      label: "Hero",
      type: "group",
      fields: [
        {
          name: "background",
          label: "Background",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description:
              "Large hero background image. WebP (or JPG) works best. Export at 2x size/resolution for sharpness on large screens.",
          },
        },
        {
          name: "header",
          label: "Header",
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
        { name: "content", label: "Content", type: "textarea", required: true },
      ],
    },
    // Upcoming Concert Component - On FE, this is connects to \collections\global\ConcertsUpcoming.ts
    {
      name: "homePageUpcomingConcert",
      label: "Upcoming Concert (Select)",
      type: "group",
      admin: {
        description:
          "Select a concert to be highlighted on the homepage. To configure the details of the concerts, please visit [Concerts - Upcoming].",
      },
      fields: [
        {
          name: "select",
          label: "Select a Concert",
          type: "select",
          required: true,
          options: [
            {
              label: "Concert in Semester One",
              value: "concertSemesterOne",
            },
            {
              label: "Concert in Semester Two",
              value: "concertSemesterTwo",
            },
          ],
        },
      ],
    },
    // Information Cards Component
    {
      name: "infoCards",
      label: "Information Cards",
      type: "group",
      admin: {
        description: "For the About Us images, an aspect ratio similar to A4 works best.",
      },
      fields: [
        {
          name: "aboutUs",
          label: "About Us",
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
              type: "textarea",
              required: true,
            },
          ],
        },
        {
          name: "ourPeople",
          label: "Our People",
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
              type: "textarea",
              required: true,
            },
          ],
        },
        {
          name: "contact",
          label: "Contact",
          type: "group",
          fields: [
            {
              name: "image",
              label: "Image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
    // Feature Video Component
    {
      name: "featureVideoUrl",
      label: "Feature Video URL",
      type: "text",
      required: true,
      admin: {
        description: "Paste the full YouTube URL.",
      },
    },
  ],
};

export default Home;
