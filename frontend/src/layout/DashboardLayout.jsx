import React from "react";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

const DashboardLayout = ({ children }) => {
  return (
    <div className="app-shell">
      <aside className="app-shell__sidebar">
        <Sidebar />
      </aside>

      <main className="app-shell__main">
        <Topbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
