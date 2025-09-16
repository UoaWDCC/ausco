import { GlobalConfig } from "payload";

export const GalleryLanding: GlobalConfig = {
  slug: "gallery-landing",
  label: "Gallery Landing Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "concertPhotosCard",
      label: "Concert Photos Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
      ],
    },
    {
      name: "annCampCard",
      label: "Annual Camp Photos Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
      ],
    },
        {
      name: "execCampCard",
      label: "Executive Camp Photos Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
      ],
    },
    {
      name: "otherPhotosCard",
      label: "Other Photos Card",
      type: "group",
      fields: [
        { name: "background-image", label: "Background Image", type: "upload", relationTo: "media", required: true },
      ],
    },
  ],  
}

export default GalleryLanding;