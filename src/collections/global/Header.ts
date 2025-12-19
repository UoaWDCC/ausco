import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
  label: "Header",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "textarea",
      required: true,
    },
  ],
};

export default Header;
