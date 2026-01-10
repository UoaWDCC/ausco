import React from "react";

/**
 * EndPanel component - Help and contact information panel for the AUSCO CMS admin portal.
 *
 * Displays contact information for project managers and tech leads, along with guidance on how to
 * report issues, request features, or seek assistance. Provides responsive grid layout for contact details
 * and tips for effective communication with the development team.
 *
 * @component
 * @returns {React.ReactElement} A styled help panel with contact information and guidelines
 *
 * @note Hot reloading does not appear to work for this component. Any changes made require restarting
 * the development server to take effect.
 */
const EndPanel = () => {
  return (
    <div
      style={{
        padding: "3rem",
        backgroundColor: "var(--theme-elevation-50)",
        borderRadius: "4px",
        border: "1px solid var(--theme-border-color)",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.3rem" }}>❓ Need Help?</h3>

      <p style={{ marginBottom: "1.5rem" }}>
        If you have questions, notice bugs, or need changes that can't be made through this portal
        (such as creating new pages or structural changes), please reach out:
      </p>

      <style>{`
        .endpanel-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .endpanel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .endpanel-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <div className="endpanel-grid" style={{ marginBottom: "1.5rem" }}>
        <div>
          <p style={{ marginTop: 0, marginBottom: "0.75rem" }}>
            <strong>Project Manager</strong>
          </p>
          <ul style={{ marginLeft: "1.25rem", marginTop: 0, marginBottom: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Vincent Tao</strong>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Email:{" "}
              <a href="mailto:vincent.jh.tao@gmail.com" style={{ color: "var(--theme-text)" }}>
                vincent.jh.tao@gmail.com
              </a>
            </li>
            <li style={{ marginBottom: 0 }}>Discord: vincenttao_</li>
          </ul>
        </div>

        <div>
          <p style={{ marginTop: 0, marginBottom: "0.75rem" }}>
            <strong>Tech Lead</strong>
          </p>
          <ul style={{ marginLeft: "1.25rem", marginTop: 0, marginBottom: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Harry Sheng</strong>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Email:{" "}
              <a href="mailto:harryshengcoding@gmail.com" style={{ color: "var(--theme-text)" }}>
                harryshengcoding@gmail.com
              </a>
            </li>
            <li style={{ marginBottom: 0 }}>Discord: harry_cs</li>
          </ul>
        </div>
      </div>

      <p style={{ marginBottom: "1.5rem" }}>
        For general questions or quick help, any <strong>WDCC executive</strong> can assist you.
      </p>

      <p style={{ margin: 0 }}>
        <strong>💡 Tip:</strong> When reporting issues or requesting changes, include as much detail
        as possible — screenshots, page names, steps to reproduce problems, or specific examples are
        extremely helpful for faster resolution.
      </p>
    </div>
  );
};

export default EndPanel;
