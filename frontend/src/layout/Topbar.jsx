import React from "react";

const Topbar = () => {
  return (
    <div className="app-topbar">
      <div className="app-topbar__left">
        <input style={styles.search} placeholder="Search assets here..." />
      </div>

      <div className="app-topbar__right">
        <button style={styles.circleBtn}>🔔</button>
        <button style={styles.circleBtn}>⚙️</button>
      </div>
    </div>
  );
};

const styles = {
  search: {
    width: "100%",
    background: "var(--input-bg)",
    border: "1px solid var(--input-border)",
    borderRadius: "14px",
    padding: "10px 14px",
  },
  circleBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "var(--bg-elevated)",
    border: "1px solid var(--border-subtle)",
  },
};

export default Topbar;
