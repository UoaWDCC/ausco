"use client";

import React, { useEffect, useState } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

type LegacyNote = {
  createdAt?: string | null;
  name: string;
  content: any;
};

/**
 * LegacyPanel component - A panel that fetches and displays read-only "Legacy Notes"
 * from the `legacy` Global in Payload CMS. Notes are rendered in chronological order
 * and include a title, creation timestamp, and rich text content.
 *
 * Data is fetched client-side via an API endpoint to avoid blocking the admin panel load.
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
const LegacyPanel = () => {
  const [notes, setNotes] = useState<LegacyNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/legacy")
      .then((r) => r.json())
      .then((data) => {
        const fetchedNotes = data?.notes ?? [];
        // Sort notes - newest first
        const sortedNotes = fetchedNotes.slice().sort((a: LegacyNote, b: LegacyNote) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
        setNotes(sortedNotes);
      })
      .catch((err) => {
        console.error("Failed to load legacy notes:", err);
        setNotes([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <style>{`
        .welcome-panel {
          padding: 1.5rem;
          background-color: var(--theme-elevation-50);
          border-radius: 4px;
          border: 1px solid var(--theme-border-color);
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .welcome-panel {
            padding: 3rem;
          }
        }
      `}</style>

      <div className="welcome-panel">
        <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.3rem" }}>
          📜 Legacy Notes
        </h3>

        {loading ? (
          <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>Loading notes...</p>
        ) : notes.length > 0 ? (
          notes.map((note, index) => (
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
          ))
        ) : (
          <p
            style={{
              fontStyle: "italic",
              marginBottom: "1.5rem",
            }}
          >
            No notes recorded
          </p>
        )}
      </div>
    </>
  );
};

export default LegacyPanel;
