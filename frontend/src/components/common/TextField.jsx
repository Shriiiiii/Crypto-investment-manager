import React from "react";

const TextField = ({
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
  style,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 999,
        background: "var(--input-bg)",
        border: "1px solid var(--input-border)",
        ...style,
      }}
    >
      {icon && <span style={{ fontSize: 14, opacity: 0.8 }}>{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: 13,
        }}
      />
    </div>
  );
};

export default TextField;
