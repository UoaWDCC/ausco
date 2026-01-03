import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    description:
      "Warning: Do NOT delete the ausco@wdcc.co.nz account if it is the last remaining admin. Deleting it would lock you out of the Payload Admin.",
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  hooks: {
    beforeDelete: [
      async ({ id, req }) => {
        const totalUsers = await req.payload.find({
          collection: "users",
          limit: 0,
          where: { id: { not_equals: id } },
        });

        if (totalUsers.totalDocs === 0) {
          throw new Error(
            "You cannot delete the last user. At least one admin account must remain.",
          );
        }
      },
    ],
  },
};
