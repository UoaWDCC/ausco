import { GlobalConfig } from "payload";

export const LandingPage: GlobalConfig = {
  slug: "landing-page",
  label: "Landing page",
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
      name: "infoCards",
      label: "Info Cards",
      type: "group",
      fields: [
        {
          name: "cards",
          label: "Cards",
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
            {
              title: "Reach Out",
              description: "Here are a few ways you can reach out to us:",
              image: "PLACEHOLDER",
              linkText: "Feedback Form↗",
              linkHref: "",
            },
          ],
          fields: [
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              required: true,
            },
            {
              name: "image",
              label: "Image",
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
      ],
    },
  ],
};

export default LandingPage;
