'use server'

import { getPayload } from 'payload'

export const getEvent = async (slug: string) => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: "media" as CollectionSlug,
        where: {
            slug: { equals: slug },
        },
        limit: 1,
    });

    return events.docs[0] as Event;
};
