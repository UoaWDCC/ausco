import { GlobalConfig } from "payload";

export const UpcomingConcerts: GlobalConfig = {
  slug: "upcoming-concerts",
  label: "Upcoming Concerts",
  fields: [
    { name: "hero", label: "Hero Text", type: "text", required: true },
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
          label: "Poster",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
        },
      ],
    },
    {
      name: "eventOne",
      label: "Event One",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Event Title",
          type: "text",
          defaultValue: "Matinee",
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
      name: "eventTwo",
      label: "Event Two",
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
  ],
};
