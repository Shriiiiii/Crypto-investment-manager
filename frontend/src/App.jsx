import React from "react";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

const App = () => {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
};

export default App;
