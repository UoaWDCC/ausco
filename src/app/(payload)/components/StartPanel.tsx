import React from "react";

const StartPanel = () => {
  return (
    <div
      style={{
        padding: "var(--gutter-h)",
        backgroundColor: "var(--theme-elevation-50)",
        borderRadius: "4px",
        border: "1px solid var(--theme-elevation-100)",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>Welcome to the CMS 👋</h2>

      <p>This admin panel is used to manage all site content.</p>

      <ul style={{ marginBottom: "1rem" }}>
        <li>
          <strong>Pages</strong> → edit website pages
        </li>
        <li>
          <strong>Globals</strong> → site-wide content (navigation, footer)
        </li>
        <li>
          <strong>Media</strong> → upload images and videos
        </li>
      </ul>

      <p style={{ marginBottom: 0 }}>
        If you're unsure where to start, check the "Home Page" collection first.
      </p>
    </div>
  );
};

export default StartPanel;
