import { GlobalConfig } from "payload";

const Ticket: GlobalConfig = {
    slug: "ticket",
    label: "Ticket Information",
    fields: [
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
                    label: "Event Date",
                    type: "text",
                    defaultValue: "Date TBC",
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
                    label: "Event Date",
                    type: "text",
                    defaultValue: "Date TBC",
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

export default Ticket;