import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>CryptoNexus</div>

      <div style={styles.section}>
        <p style={styles.sectionTitle}>Overview</p>
        <SidebarItem active label="Dashboard" />
      </div>

      <div style={styles.section}>
        <p style={styles.sectionTitle}>Account</p>
        <SidebarItem label="Portfolio" />
        <SidebarItem label="Wallet" />
      </div>

      <div style={styles.section}>
        <p style={styles.sectionTitle}>Activity</p>
        <SidebarItem label="Analytics" />
        <SidebarItem label="History" />
        <SidebarItem label="Transaction" />
      </div>

      <div style={styles.section}>
        <p style={styles.sectionTitle}>Tools</p>
        <SidebarItem label="Calculator" />
        <SidebarItem label="Insights" />
      </div>

      <div style={styles.section}>
        <p style={styles.sectionTitle}>Support</p>
        <SidebarItem label="AI Consultant" />
        <SidebarItem label="Customer Support" />
        <SidebarItem label="Settings" />
      </div>

      <div style={styles.profile}>
        <div style={styles.avatar}></div>
        <div>
          <strong>Johan Liebert</strong>
          <p style={styles.muted}>johan@example.com</p>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ label, active }) => (
  <div
    style={{
      ...styles.item,
      background: active ? "var(--gradient-pill)" : "transparent",
    }}
  >
    {label}
  </div>
);

const styles = {
  sidebar: {
    height: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  logo: {
    fontWeight: "700",
    fontSize: "20px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  sectionTitle: {
    fontSize: "12px",
    color: "var(--text-soft)",
    textTransform: "uppercase",
  },
  item: {
    padding: "10px 14px",
    borderRadius: "12px",
    cursor: "pointer",
  },
  profile: {
    marginTop: "auto",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "var(--gradient-accent)",
  },
  muted: {
    color: "var(--text-muted)",
    fontSize: "12px",
  },
};

export default Sidebar;
