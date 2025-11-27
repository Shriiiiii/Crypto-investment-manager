import React from "react";

const ProgressBar = ({ value = 0 }) => {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      style={{
        width: "100%",
        height: 8,
        borderRadius: 999,
        background: "rgba(15,23,42,0.9)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${clamped}%`,
          height: "100%",
          background: "var(--gradient-pill)",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default ProgressBar;
