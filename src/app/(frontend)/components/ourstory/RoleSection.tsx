interface RoleEntry {
  president?: string;
  vicePresident?: string;
  conductor?: string;
  termType?: "sem1" | "sem2" | "full" | "co";
}

interface RoleSectionProps {
  title: string;
  people: RoleEntry[] | undefined | null;
  roleKey: "president" | "vicePresident" | "conductor";
}

const RoleSection = ({ title, people, roleKey }: RoleSectionProps) => {
  const safePeople = people ?? [];
  if (safePeople.length === 0) return null;

  const sem1 = safePeople.filter((p) => p.termType === "sem1");
  const sem2 = safePeople.filter((p) => p.termType === "sem2");
  const full = safePeople.filter((p) => p.termType === "full");
  const co = safePeople.filter((p) => p.termType === "co");

  const hasSemesterSplit = sem1.length || sem2.length;

  const getName = (p: RoleEntry) => p[roleKey];

  return (
    <div className="md:text-sm text-xs text-[var(--navy)] mb-2">
      {hasSemesterSplit ? (
        <>
          <strong>{title}:</strong>
          {sem1.length > 0 && (
            <p>
              <span className="italic">SEM 1: </span>
              {sem1.map(getName).join(", ")}
            </p>
          )}
          {sem2.length > 0 && (
            <p>
              <span className="italic">SEM 2: </span>
              {sem2.map(getName).join(", ")}
            </p>
          )}
          {full.length > 0 && <p>Full Year – {full.map(getName).join(", ")}</p>}
          {co.length > 0 && (
            <p>
              Co-{title} – {co.map(getName).join(", ")}
            </p>
          )}
        </>
      ) : (
        <p>
          <strong>{co.length > 0 ? `Co-${title}` : title}:</strong>{" "}
          {[...full, ...co].map(getName).join(", ")}
        </p>
      )}
    </div>
  );
};

export default RoleSection;
