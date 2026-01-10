import WelcomePanel from "./WelcomePanel";
import LegacyPanel from "./LegacyPanel";

const StartLayout = async () => {
  return (
    <>
      <style>{`
        .start-layout {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .start-layout {
            flex-direction: row;
          }
          .start-layout__welcome {
            width: 65%;
          }
          .start-layout__legacy {
            width: 35%;
          }
        }
      `}</style>

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
