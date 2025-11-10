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
        { name: "title", label: "Title", type: "text", required: true },
        { name: "content", label: "Content", type: "textarea", required: true },
      ],
    },
    // TODO: might need to move to SiteSetting.ts as these values are used in 2 places on the website
    // Upcoming Concert Component
    {
      name: "upcomingConcert",
      label: "Upcoming Concert",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "poster",
          label: "Poster",
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
        {
          name: "tickets",
          label: "Tickets",
          type: "group",
          fields: [
            {
              name: "matinee",
              label: "Matinee",
              type: "group",
              fields: [
                {
                  name: "date",
                  label: "Matinee Date",
                  type: "date",
                  required: true,
                },
                {
                  name: "location",
                  label: "Matinee Location",
                  type: "text",
                  required: true,
                },
                {
                  name: "ticketUrl",
                  label: "Matinee Ticket Purchase URL",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "concert",
              label: "Concert",
              type: "group",
              fields: [
                {
                  name: "date",
                  label: "Concert Date",
                  type: "date",
                  required: true,
                },
                {
                  name: "location",
                  label: "Concert Location",
                  type: "text",
                  required: true,
                },
                {
                  name: "ticketUrl",
                  label: "Concert Ticket Purchase URL",
                  type: "text",
                  required: true,
                },
              ],
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
  ],
};

export default HomePage;
