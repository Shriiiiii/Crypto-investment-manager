import React from "react";
import Card from "../common/Card.jsx";
import { formatCurrency, formatChange, formatPercent } from "../../utils/formatters.js";

const TopPerformingAssetsSection = ({ assets = [] }) => {
  return (
    <Card>
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>
            My Top Performing Assets
          </div>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-soft)" }}>
          Monthly ▾ · Market Value ▾
        </div>
      </div>

      <div className="grid-3">
        {assets.map((asset) => (
          <AssetPerformanceCard key={asset.pair} asset={asset} />
        ))}
      </div>
    </Card>
  );
};

const AssetPerformanceCard = ({ asset }) => {
  const isUp = asset.changeAbs >= 0;
  const changeColor = isUp ? "var(--accent-success)" : "var(--accent-danger)";

  return (
    <div
      style={{
        borderRadius: 18,
        padding: 12,
        background:
          "radial-gradient(circle at top, rgba(249,115,255,0.25), transparent 52%), var(--bg-elevated-soft)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        fontSize: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 600 }}>{asset.pair}</span>
        <button
          style={{
            borderRadius: 999,
            padding: "3px 8px",
            border: "1px solid rgba(148,163,184,0.25)",
            fontSize: 10,
            background: "rgba(15,23,42,0.8)",
          }}
        >
          Details
        </button>
      </div>

      <div style={{ fontSize: 13 }}>{formatCurrency(asset.value)}</div>
      <div style={{ color: changeColor, fontSize: 11 }}>
        {formatChange(asset.changeAbs)} ({formatPercent(asset.changePct)})
      </div>

      {/* mini fake chart */}
      <div
        style={{
          marginTop: 6,
          height: 36,
          borderRadius: 999,
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(249,115,255,0.4))",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "35% 0 0 0",
            background:
              "linear-gradient(to right, transparent, rgba(15,23,42,0.9))",
          }}
        />
      </div>
    </div>
  );
};

export default TopPerformingAssetsSection;
