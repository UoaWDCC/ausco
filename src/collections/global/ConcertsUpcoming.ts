import { GlobalConfig } from "payload";

const ConcertsUpcoming: GlobalConfig = {
  slug: "concerts-upcoming",
  label: "Concerts - Upcoming",
  fields: [
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true,
      // Starter template: only applies on document creation, not when editing existing docs
      defaultValue: "AUSCO hosts 2 different concerts and performs them twice a year.",
    },
    // Upcoming Concerts 1
    {
      name: "concertsUpcoming1",
      label: "Upcoming Concerts 1",
      type: "group",
      fields: [
        {
          name: "isComingSoon",
          label: "Is Coming Soon?",
          type: "checkbox",
          required: false,
        },

        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },

        {
          name: "poster",
          label: "Poster",
          type: "upload",
          relationTo: "media",
          required: true,
        },

        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true,
        },
        {
          name: "tickets",
          label: "Tickets",
          type: "group",
          fields: [
            {
              name: "matinee",
              label: "Matinee",
              type: "group",
              fields: [
                {
                  name: "date",
                  label: "Matinee Date",
                  type: "date",
                  required: true,
                },
                {
                  name: "location",
                  label: "Matinee Location",
                  type: "text",
                  required: true,
                },
                {
                  name: "ticketUrl",
                  label: "Matinee Ticket Purchase URL",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "concert",
              label: "Concert",
              type: "group",
              fields: [
                {
                  name: "date",
                  label: "Concert Date",
                  type: "date",
                  required: true,
                },
                {
                  name: "location",
                  label: "Concert Location",
                  type: "text",
                  required: true,
                },
                {
                  name: "ticketUrl",
                  label: "Concert Ticket Purchase URL",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    // Upcoming Concerts 2
    {
      name: "concertsUpcoming2",
      label: "Upcoming Concerts 2",
      type: "group",
      fields: [
        {
          name: "isComingSoon",
          label: "Is Coming Soon?",
          type: "checkbox",
          required: false,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "poster",
          label: "Poster",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true,
        },
        {
          name: "tickets",
          label: "Tickets",
          type: "group",
          fields: [
            {
              name: "matinee",
              label: "Matinee",
              type: "group",
              fields: [
                {
                  name: "date",
                  label: "Matinee Date",
                  type: "date",
                  required: true,
                },
                {
                  name: "location",
                  label: "Matinee Location",
                  type: "text",
                  required: true,
                },
                {
                  name: "ticketUrl",
                  label: "Matinee Ticket Purchase URL",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "concert",
              label: "Concert",
              type: "group",
              fields: [
                {
                  name: "date",
                  label: "Concert Date",
                  type: "date",
                  required: true,
                },
                {
                  name: "location",
                  label: "Concert Location",
                  type: "text",
                  required: true,
                },
                {
                  name: "ticketUrl",
                  label: "Concert Ticket Purchase URL",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    // Embeded Google Calendar
    {
      name: "googleCalendarEmail",
      label: "Embeded Google Calendar Email",
      type: "text",
      required: true,
    },
  ],
};

export default ConcertsUpcoming;
