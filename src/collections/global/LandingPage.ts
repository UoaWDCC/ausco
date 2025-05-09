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
  ],
};

export default LandingPage;
