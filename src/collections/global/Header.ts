import { GlobalConfig } from "payload";

const Header: GlobalConfig = {
  slug: "header",
  label: "Site Header",
  fields: [
    {
      name: "logo",
      label: "Logo Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "title",
      label: "Header Title",
      type: "textarea",
    },
    {
      name: "navLinks",
      label: "Navigation Links",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "url", type: "text" },
      ],
    },
  ],
};

export default Header;
