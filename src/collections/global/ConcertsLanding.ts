import { GlobalConfig } from "payload";

export const ConcertsLanding: GlobalConfig = {
  slug: "concerts-landing",
  label: "Concerts Landing Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "upcomingCard",
      label: "Upcoming Concerts Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
        { name: "title", label: "Title", type: "text", required: true },
      ],
    },
    {
      name: "pastCard",
      label: "Past Concerts Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
        { name: "title", label: "Title", type: "text", required: true },
      ],
    },
  ],  
}

export default ConcertsLanding;