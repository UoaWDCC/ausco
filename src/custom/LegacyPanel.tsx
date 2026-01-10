import React, { cache } from "react";

import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayload } from "payload";

import config from "@payload-config";

import { Legacy } from "@/payload-types";

type LegacyNote = {
  createdAt?: string | null;
  name: string;
  content: any;
};

const getLegacyNotes = cache(async (): Promise<Legacy> => {
  const payload = await getPayload({ config });
  return payload.findGlobal({ slug: "legacy", depth: 1 });
});

/**
 * LegacyPanel component - A panel that fetches and displays read-only "Legacy Notes"
 * from the `legacy` Global in Payload CMS. Notes are rendered in chronological order
 * and include a title, creation timestamp, and rich text content.
 *
 * Data is fetched via the Payload server API and cached using React's `cache`
 * utility to avoid repeated requests during a single render pass.
 *
 * The panel is hidden entirely if no legacy notes exist.
 *
 * @component
 * @returns {Promise<React.ReactElement | null>} A styled panel displaying legacy notes,
 * or `null` if there are no notes to display or if an error occurs.
 *
 * @note Hot reloading does not appear to work for this component. Any changes made require restarting
 * the development server to take effect.
 *
 * @note Tailwind CSS classes are not supported in this context. Styling must be applied
 * using inline styles or custom CSS.
 */
const LegacyPanel = async () => {
  try {
    const legacyData = await getLegacyNotes();
    const notes: LegacyNote[] = legacyData.notes || [];

    if (notes.length === 0) {
      return null; // Do not show the panel if there are no notes
    }

    return (
      <div
        style={{
          padding: "3rem",
          backgroundColor: "var(--theme-elevation-50)",
          borderRadius: "4px",
          border: "1px solid var(--theme-border-color)",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.3rem" }}>
          📜 Legacy Notes
        </h3>

        {notes.map((note, index) => (
          <div
            key={index}
            style={{
              paddingBottom: index < notes.length - 1 ? "1.5rem" : 0,
              marginBottom: index < notes.length - 1 ? "1.5rem" : 0,
              borderBottom:
                index < notes.length - 1 ? "1px solid var(--theme-elevation-100)" : "none",
            }}
          >
            <p style={{ margin: 0, marginBottom: "0.15rem" }}>
              <strong>{note.name}</strong>
            </p>

            {note.createdAt && (
              <p
                style={{
                  fontSize: "0.85rem",
                  opacity: 0.7,
                  margin: 0,
                  marginBottom: "0.75rem",
                }}
              >
                Created {new Date(note.createdAt).toLocaleString()}
              </p>
            )}

            <RichText data={note.content} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to load legacy notes:", error);
    return null;
  }
};

export default LegacyPanel;
