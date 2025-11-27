import React from "react";

const Card = ({ children, style, className = "" }) => {
  return (
    <div
      className={`glass-card ${className}`}
      style={{
        background: "var(--card-glass-bg)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "24px",
        padding: "16px",
        boxShadow: "var(--shadow-soft)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
