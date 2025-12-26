import { GlobalConfig } from "payload";

const Header: GlobalConfig = {
  slug: "header",
  label: "Header",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "textarea",
      required: true,
      admin: {
        description: "Line breaks are reflected in the website.",
      },
    },
  ],
};

export default Header;
