import React from "react";

const StartPanel: React.FC = () => {
  return (
    <div
      style={{
        padding: "1.5rem",
        borderRadius: "8px",
        marginBottom: "2rem",
      }}
    >
      <h2>Welcome to the CMS 👋</h2>

      <p>This admin panel is used to manage all site content.</p>

      <ul>
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

      <p>If you're unsure where to start, check the “Home Page” collection first.</p>
    </div>
  );
};

export default StartPanel;
