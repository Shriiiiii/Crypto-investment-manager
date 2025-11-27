import React from "react";

const Dropdown = ({ label, options = [], value, onChange }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        padding: "4px 10px",
        borderRadius: 999,
        background: "var(--bg-elevated-soft)",
        border: "1px solid rgba(148,163,184,0.35)",
      }}
    >
      {label && <span style={{ color: "var(--text-soft)" }}>{label}</span>}
      <select
        value={value}
        onChange={onChange}
        style={{
          background: "transparent",
          border: "none",
          color: "var(--text-main)",
          fontSize: 11,
          outline: "none",
          cursor: "pointer",
        }}
      >
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            style={{ background: "#020617", color: "#e5e7eb" }}
          >
            {opt}
          </option>
        ))}
      </select>
      <span style={{ fontSize: 10, opacity: 0.8 }}>▾</span>
    </div>
  );
};

export default Dropdown;
