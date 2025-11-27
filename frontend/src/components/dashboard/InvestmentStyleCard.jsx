import React from "react";
import Card from "../common/Card.jsx";
import GaugeChart from "../charts/GaugeChart.jsx";

const InvestmentStyleCard = () => {
  return (
    <Card style={{ padding: 18 }}>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 12, color: "var(--text-soft)" }}>
          Investment Style
        </div>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Aggressive</div>
      </div>

      <GaugeChart value={76} label="Risk Exposure" />
    </Card>
  );
};

export default InvestmentStyleCard;
