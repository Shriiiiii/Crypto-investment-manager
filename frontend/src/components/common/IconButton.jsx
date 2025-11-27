import React from "react";

const IconButton = ({ children, style }) => {
  return (
    <button
      style={{
        width: 36,
        height: 36,
        borderRadius: 999,
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-elevated-soft)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default IconButton;
