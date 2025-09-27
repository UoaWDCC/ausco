import { GlobalConfig } from "payload";

export const UpcomingConcerts: GlobalConfig = {
  slug: "upcoming-concerts",
  label: "Upcoming Concerts",
  fields: [
    {
      name: "hero",
      label: "Hero Text",
      type: "text",
      required: true,
      defaultValue:
        "Short description - eg explaining that each year, AUSCO hosts 2 different concerts and performs them twice a year. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      name: "upcomingConcert",
      label: "Upcoming Concert (Semester 1)",
      type: "group",
      fields: [
        { name: "title", label: "Title", type: "text", defaultValue: "Till Death do us ‘Part" },
        { name: "poster", label: "Poster", type: "upload", relationTo: "media" },
        {
          name: "description1",
          label: "Description One",
          type: "text",
          defaultValue:
            "Love, Passion, and Loss. Our Semester 1 concert delves into the trials and tribulations of romance and its all-encompassing nature — as well as the grief we feel in its absence.",
        },
        {
          name: "description2",
          label: "Description Two",
          type: "text",
          defaultValue:
            "That's why we've partnered with Tōtara Hospice, in support of providing accessible, quality, and compassionate palliative care to those in their last moments.  All concert proceeds will go towards this cause.  Join us at one of our two concerts!",
        },
      ],
    },
    {
      name: "semOneEventOne",
      label: "Event One (Semester 1)",
      type: "group",
      fields: [
        { name: "title", label: "Event Title", type: "text", defaultValue: "Matinee" },
        { name: "date", label: "Event Date", type: "text", defaultValue: "Date TBC" },
        { name: "location", label: "Event Location", type: "text", defaultValue: "Location TBC" },
        { name: "ticketUrl", label: "Ticket Purchase URL", type: "text", required: false },
      ],
    },
    {
      name: "semOneEventTwo",
      label: "Event Two (Semester 1)",
      type: "group",
      fields: [
        { name: "title", label: "Event Title", type: "text", defaultValue: "Concert" },
        { name: "date", label: "Event Date", type: "text", defaultValue: "Date TBC" },
        { name: "location", label: "Event Location", type: "text", defaultValue: "Location TBC" },
        { name: "ticketUrl", label: "Ticket Purchase URL", type: "text", required: false },
      ],
    },

    {
      name: "upcomingConcertTwo",
      label: "Upcoming Concert (Semester 2)",
      type: "group",
      fields: [
        { name: "title", label: "Title", type: "text" },
        { name: "poster", label: "Poster", type: "upload", relationTo: "media" },
        {
          name: "description1",
          label: "Description One",
          type: "text",
          defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "description2",
          label: "Description Two",
          type: "text",
          defaultValue:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    },
    {
      name: "semTwoEventOne",
      label: "Event One (Semester 2)",
      type: "group",
      fields: [
        { name: "title", label: "Event Title", type: "text", defaultValue: "Matinee" },
        { name: "date", label: "Event Date", type: "text", defaultValue: "Date TBC" },
        { name: "location", label: "Event Location", type: "text", defaultValue: "Location TBC" },
        { name: "ticketUrl", label: "Ticket Purchase URL", type: "text", required: false },
      ],
    },
    {
      name: "semTwoEventTwo",
      label: "Event Two (Semester 2)",
      type: "group",
      fields: [
        { name: "title", label: "Event Title", type: "text", defaultValue: "Concert" },
        { name: "date", label: "Event Date", type: "text", defaultValue: "Date TBC" },
        { name: "location", label: "Event Location", type: "text", defaultValue: "Location TBC" },
        { name: "ticketUrl", label: "Ticket Purchase URL", type: "text", required: false },
      ],
    },
  ],
};
