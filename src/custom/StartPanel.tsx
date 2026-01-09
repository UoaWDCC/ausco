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
      <h2 style={{ marginTop: 0, marginBottom: "1.5rem" }}>Welcome to AUSCO's CMS ‧₊˚♪ 𝄞₊˚⊹</h2>

      <p>
        This admin portal is used to manage all content across the AUSCO website. Below is a quick
        guide to how content is organised.
      </p>

      <ul style={{ marginBottom: "1.5rem" }}>
        <li>
          <strong>Collections</strong> → Collections hold lists of similar items. Each item is
          managed on its own and can be used in different places across the website.
          <ul>
            <li>
              <strong>General Media</strong> → Images used across the pages of the site. Uploaded
              files stay saved for future use even if they are not currently shown (unless deleted).
              This does not apply to Gallery pages.
            </li>
            <li>
              <strong>Gallery Album Media</strong> → A specialised media collection used exclusively
              for the Gallery pages and albums.
            </li>
            <li>
              <strong>Users</strong> → Not currently used as there is no need for public user
              sign-ups, but this collection must remain as it stores the administrator login details
              for this admin portal.
            </li>
          </ul>
        </li>

        <li>
          <strong>Globals</strong> → Each global represents a page or a site-wide component. They
          are listed in the order visitors see the website, starting with the Home page and ending
          with shared parts like the Header, Footer, and Site Settings.
        </li>
      </ul>

      <p>
        Note 1: The typical workflow is to use <strong>Globals</strong> to update site content and{" "}
        <strong>Collections / Gallery Album Media</strong> to upload images for albums shown on the
        gallery pages.
      </p>

      <p>
        Note 2: When uploading images, follow these format guidelines for the best display: - For
        logos, icons, or graphics that need transparency, use <strong>SVG</strong>. - For
        backgrounds, posters, or general images, use <strong>WebP</strong> if possible, or{" "}
        <strong>PNG</strong> if not.
      </p>
    </div>
  );
};

export default StartPanel;
