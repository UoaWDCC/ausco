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
        { 
          name: "label", 
          type: "text",
          required: true,
        },
        { 
          name: "url", 
          type: "text",
          required: true,
        },
        {
          name: "subItem",
          label: "Sub Navigation Items",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Sub Item Label",
              type: "text",
              required: true,
            },
            {
              name: "url", 
              label: "Sub Item URL",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default Header;