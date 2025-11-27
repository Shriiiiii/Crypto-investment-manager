import React from "react";
import Card from "../common/Card.jsx";
import Button from "../common/Button.jsx";
import Chip from "../common/Chip.jsx";

const PlanSummaryCard = () => {
  return (
    <Card
      style={{
        padding: 18,
        background:
          "linear-gradient(135deg, #111827, #020617 40%, #020617 100%)",
      }}
    >
      <div style={{ marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Chip tone="primary">Basic Plan</Chip>
      </div>

      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
        Simplified Portfolio Analysis
      </div>
      <div style={{ fontSize: 12, color: "var(--text-soft)", marginBottom: 16 }}>
        Analyze over 500 crypto and token assets live with AI assistant.
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <Button>Start Free Trial</Button>
        <Button variant="secondary">Upgrade ↗</Button>
      </div>
    </Card>
  );
};

export default PlanSummaryCard;
