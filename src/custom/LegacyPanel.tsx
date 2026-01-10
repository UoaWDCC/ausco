"use client";

import React, { useEffect, useState } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

/**
 *  component - Welcome and guidance panel for the AUSCO CMS admin portal.
 *
 * Displays an introductory guide to help administrators navigate and understand the CMS structure,
 * including information about Collections (General Media, Gallery Album Media, Users) and Globals
 * (page-specific components). Also provides quick tips on typical workflows and image format guidelines.
 *
 * @component
 * @returns {React.ReactElement} A styled welcome panel with sections for Collections, Globals, and Quick Tips
 *
 * @note Hot reloading does not appear to work for this component. Any changes made require restarting
 * the development server to take effect.
 */
type LegacyNote = {
  createdAt: string;
  name: string;
  content: any;
};

const LegacyPanel = () => {
  const [notes, setNotes] = useState<LegacyNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLegacy = async () => {
      try {
        const res = await fetch("/api/globals/legacy");
        const data = await res.json();
        setNotes(data.note || []);
      } catch (err) {
        console.error("Failed to load legacy notes", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLegacy();
  }, []);

  if (loading) {
    return <p>Loading legacy notes…</p>;
  }

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "var(--theme-elevation-50)",
        border: "1px solid var(--theme-border-color)",
        borderRadius: "4px",
        marginBottom: "2rem",
      }}
    >
      <h3 style={{ marginTop: 0 }}>📜 Legacy Notes</h3>

      {notes.length === 0 ? (
        <p>No legacy notes yet.</p>
      ) : (
        notes.map((note, index) => (
          <div
            key={index}
            style={{
              padding: "1rem 0",
              borderBottom: "1px solid var(--theme-elevation-100)",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600 }}>{note.name}</p>
            <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              Created {new Date(note.createdAt).toLocaleString()}
            </p>

            <div style={{ whiteSpace: "pre-wrap" }}>
              <RichText data={note.content} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default LegacyPanel;
