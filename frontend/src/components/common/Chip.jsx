import React from "react";

const Chip = ({ children, tone = "default" }) => {
  let bg = "var(--chip-bg)";
  if (tone === "primary") bg = "var(--accent-primary-soft)";
  if (tone === "success") bg = "rgba(34,197,94,0.1)";

  return (
    <span
      className="chip"
      style={{
        background: bg,
      }}
    >
      {children}
    </span>
  );
};

export default Chip;
