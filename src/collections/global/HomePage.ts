import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Home Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "header",
      label: "Header",
      type: "group",
      fields: [ 
        { name: "title", label: "Title", type: "text", required: true },
        { name: "content", label: "Content", type: "textarea", required: true },
      ],
    },
    {
      name: "upcomingConcert",
      label: "Upcoming Concert",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "poster",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "description1",
          label: "description 1",
          type: "text",
        },
        {
          name: "description2",
          label: "description 2",
          type: "text",
        },
      ],
    },
    {
      name: "matinee",
      label: "Matinee Event",
      type: "group",
      fields: [
          {
              name: "title",
              label: "Event Title",
              type: "text",
              defaultValue: "Matinee"

          },
          {
              name: "date",
              label: "Event Date",
              type: "text",
              defaultValue: "Date TBC",

          },
          {
              name: "location",
              label: "Event Location",
              type: "text",
              defaultValue: "Location TBC",
          },
          {
              name: "ticketUrl",
              label: "Ticket Purchase URL",
              type: "text",
              required: false,
          },
      ],
  },
  {
      name: "concert",
      label: "Concert Event",
      type: "group",
      fields: [
          {
              name: "title",
              label: "Event Title",
              type: "text",
              defaultValue: "Concert",
          },
          {
              name: "date",
              label: "Event Date",
              type: "text",
              defaultValue: "Date TBC",

          },
          {
              name: "location",
              label: "Event Location",
              type: "text",
              defaultValue: "Location TBC",
          },
          {
              name: "ticketUrl",
              label: "Ticket Purchase URL",
              type: "text",
              required: false,
          },
      ],
  },

    {
      name: "infoCards",
      label: "Info Cards",
      type: "group",
      admin: {
        description:
          "Add, edit, or remove cards on the landing page. Each card can have a title, description, image and link.",
      },
      fields: [
        {
          name: "regularCards",
          label: "Regular Cards",
          type: "array",
          required: true,
          defaultValue: [
            {
              title: "About Us",
              description:
                "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
              image: "PLACEHOLDER",
              linkText: "Read more↗",
              linkHref: "",
            },
            {
              title: "Our People",
              description:
                "This is a description about the page, in a few sentences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
              image: "PLACEHOLDER",
              linkText: "Read more↗",
              linkHref: "",
            },
          ],
          fields: [
            {
              name: "title",
              label: "Card Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Card Description",
              type: "textarea",
              required: true,
            },
            {
              name: "image",
              label: "Card Image",
              type: "text",
              required: true,
            },
            {
              name: "linkText",
              label: "Link Text",
              type: "text",
              required: true,
            },
            {
              name: "linkHref",
              label: "Link URL",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "contactsCard",
          label: "Contacts Card",
          type: "group",
          fields: [
            {
              name: "title",
              label: "Card Title",
              type: "text",
              required: true,
              defaultValue: "Reach Out",
            },
            {
              name: "description",
              label: "Card Description",
              type: "textarea",
              required: true,
              defaultValue: "Here are a few ways you can reach out to us:",
            },
            {
              name: "image",
              label: "Card Image",
              type: "text",
              required: true,
              defaultValue: "PLACEHOLDER",
            },
            {
              name: "linkText",
              label: "Link Text",
              type: "text",
              required: true,
              defaultValue: "Feedback Form↗",
            },
            {
              name: "linkHref",
              label: "Link URL",
              type: "text",
              required: false,
              defaultValue: "",
            },
            {
              name: "contacts",
              label: "Contact Information",
              type: "array",
              required: true,
              defaultValue: [
                {
                  text: "chamberorchestra.ausa@gmail.com↗",
                  href: "",
                  icon: "mail",
                },
                {
                  text: "@ausco.uoa↗",
                  href: "",
                  icon: "instagram",
                },
                {
                  text: "@ausco.ausa↗",
                  href: "",
                  icon: "facebook",
                },
              ],
              fields: [
                {
                  name: "text",
                  label: "Contact Text",
                  type: "text",
                  required: true,
                },
                {
                  name: "href",
                  label: "Contact URL",
                  type: "text",
                  required: false,
                },
                {
                  name: "icon",
                  label: "Icon",
                  type: "select",
                  required: true,
                  options: [
                    { label: "Mail", value: "mail" },
                    { label: "Instagram", value: "instagram" },
                    { label: "Facebook", value: "facebook" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default HomePage;
