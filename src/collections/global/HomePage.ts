import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  FixedToolbarFeature,
} from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Home Page",
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
      name: "upcomingConcertSelect",
      label: "Upcoming Concert (Selection)",
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
    // Information Cards Component
    {
      name: "infoCards",
      label: "Information Cards",
      type: "group",
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
    },
  ],
};

export default HomePage;
