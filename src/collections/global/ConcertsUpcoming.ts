import { GlobalConfig } from "payload";

export const ConcertsUpcoming: GlobalConfig = {
  slug: "upcoming-concerts",
  label: "Upcoming Concerts",
  fields: [
    {
      name: "description",
      label: "description",
      type: "textarea",
      required: true,
      // Starter template: only applies on document creation, not when editing existing docs
      defaultValue:
        "Short description - eg explaining that each year, AUSCO hosts 2 different concerts and performs them twice a year. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  ],
};

export default ConcertsUpcoming;
