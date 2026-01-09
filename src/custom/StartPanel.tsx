import React from "react";

const StartPanel = () => {
  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "var(--theme-elevation-50)",
        borderRadius: "4px",
        border: "1px solid var(--theme-border-color)",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>Welcome to AUSCO's CMS ‧₊˚♪ 𝄞₊˚⊹</h2>

      <p style={{ marginBottom: "1.5rem" }}>
        This admin portal manages all content across the AUSCO website. Here's a quick guide to help
        you navigate and update the site effectively.
      </p>

      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.1rem" }}>
          📚 Collections
        </h3>
        <p style={{ marginTop: 0, marginBottom: "0.75rem" }}>
          Collections store reusable content items that can appear throughout the website:
        </p>
        <ul style={{ marginLeft: "1.25rem", marginBottom: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>General Media</strong> — Images used across various pages. Files remain saved
            for future use even when not currently displayed (unless manually deleted). Does not
            include Gallery images.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Gallery Album Media</strong> — A specialised collection dedicated to Gallery
            pages and albums only.
          </li>
          <li style={{ marginBottom: 0 }}>
            <strong>Users</strong> — Stores administrator login credentials. Currently not used for
            public accounts, but must remain in place for admin access.
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.1rem" }}>🌐 Globals</h3>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          Each Global represents a specific page or site-wide component. They're organized in the
          order visitors navigate the website, from Home page through to shared elements like
          Header, Footer, and Site Settings.
        </p>
      </div>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "var(--theme-elevation-100)",
          borderRadius: "4px",
          borderLeft: "3px solid var(--theme-success-500)",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1rem" }}>💡 Quick Tips</h3>
        <ul style={{ marginLeft: "1.25rem", marginBottom: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Typical workflow:</strong> Use <strong>Globals</strong> to update page content,
            and <strong>Gallery Album Media</strong> to upload images for gallery albums.
          </li>
          <li style={{ marginBottom: 0 }}>
            <strong>Image format guidelines:</strong>
            <ul style={{ marginTop: "0.25rem", marginLeft: "1.25rem" }}>
              <li>
                Use <strong>SVG</strong> for logos, icons, or graphics requiring transparency
              </li>
              <li>
                Use <strong>WebP</strong> (preferred) or <strong>PNG</strong> for photos,
                backgrounds, and posters
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <p
        style={{
          marginTop: "1rem",
          marginBottom: 0,
          fontSize: "0.9rem",
          color: "var(--theme-elevation-800)",
        }}
      >
        Need help? Contact the web administrator or refer to the documentation.
      </p>
    </div>
  );
};

export default StartPanel;
