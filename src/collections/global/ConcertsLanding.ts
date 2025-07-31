import { GlobalConfig } from "payload";

export const ConcertsLanding: GlobalConfig = {
  slug: "concerts-landing",
  label: "Concerts Landing Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "header",
      label: "Header",
      type: "group",
      fields: [ 
        { name: "title", label: "Title", type: "text", required: true, defaultValue: "Coming soon!" },
        { name: "description", label: "Description", type: "textarea", required: true, defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."},
        
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
      ],
  },
  {
      name: "upcomingCard",
      label: "Upcoming Concerts Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
      ],
    },
    {
      name: "pastCard",
      label: "Past Concerts Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
      ],
    },
  ],  
}

export default ConcertsLanding;