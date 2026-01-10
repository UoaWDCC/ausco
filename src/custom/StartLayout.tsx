import WelcomePanel from "./WelcomePanel";
import LegacyPanel from "./LegacyPanel";

/**
 * StartLayout component - Layout wrapper for the admin dashboard’s introductory panels.
 *
 * Renders the WelcomePanel and LegacyPanel side by side on medium and larger screens,
 * and stacked vertically on smaller screens. The layout uses a fixed-height container
 * with independent vertical scrolling for each panel to prevent the dashboard page
 * itself from becoming excessively long.
 *
 * Layout behavior:
 * - Mobile: Panels are stacked vertically.
 * - ≥768px: Panels are displayed in a row (Welcome: 65%, Legacy: 35%).
 * - Both panels become scrollable within a fixed-height container.
 *
 * @component
 * @returns {React.ReactElement} A styled help panel with contact information and guidelines
 *
 * @note Hot reloading does not appear to work for this component. Any changes made require restarting
 * the development server to take effect.
 *
 * @note Tailwind CSS classes are not supported in this context. Styling must be applied
 * using inline styles or custom CSS.
 */
const StartLayout = () => {
  return (
    <>
      <style>{`
        .start-layout {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 45vh;
        }

        @media (min-width: 768px) {
        .start-layout {
          flex-direction: row;
        }

        .start-layout__welcome,
        .start-layout__legacy {
          height: 100%;
          display: flex;
        }

        .start-layout__welcome {
          width: 65%;
        }

        .start-layout__legacy {
          width: 35%;
        }
      }`}</style>

      <div className="start-layout">
        <div className="start-layout__welcome">
          <WelcomePanel />
        </div>
        <div className="start-layout__legacy">
          <LegacyPanel />
        </div>
      </div>
    </>
  );
};

export default StartLayout;
