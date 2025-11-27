import React from "react";
import Card from "../components/common/Card.jsx";
import ProgressBar from "../components/common/ProgressBar.jsx";
import TopPerformingAssetsSection from "../components/dashboard/TopPerformingAssetsSection.jsx";
import PlanSummaryCard from "../components/dashboard/PlanSummaryCard.jsx";
import InvestmentStyleCard from "../components/dashboard/InvestmentStyleCard.jsx";
import AiAssistantCard from "../components/dashboard/AiAssistantCard.jsx";
import useDashboardData from "../hooks/useDashboardData.js";
import { formatCurrency, formatChange, formatPercent } from "../utils/formatters.js";

const DashboardPage = () => {
  const {
    loading,
    portfolioSummary,
    balanceSummary,
    investmentGoals,
    walletBreakdown,
    topAssets,
    aiSuggestions,
  } = useDashboardData();

  if (loading) {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-soft)",
          fontSize: 14,
        }}
      >
        Loading dashboard...
      </div>
    );
  }

  // 👉 safety guards in case something is missing
  if (!portfolioSummary || !balanceSummary || !investmentGoals) {
    return <div style={{ padding: 20, color: "var(--text-soft)" }}>No data available.</div>;
  }

  return (
    <div className="app-main-layout">
      {/* CENTER COLUMN */}
      <div className="app-main-center">
        {/* Welcome strip */}
        <Card
          style={{
            padding: "14px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: "var(--text-soft)" }}>Happy Investing,</div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>
              {portfolioSummary.owner || "Investor"}
            </div>
          </div>
          <div style={{ fontSize: 12, color: "var(--text-soft)" }}>Last Updated: 2 min ago</div>
        </Card>

        {/* Top big cards: Portfolio + Balance */}
        <div className="grid-2">
          {/* My Portfolio */}
          <Card
            style={{
              background: "var(--gradient-card-main)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <div style={{ fontSize: 12, color: "var(--text-soft)" }}>My Portfolio</div>
              <div className="chip">
                {portfolioSummary.timeframe || "Weekly"} ▾
              </div>
            </div>

            <div style={{ fontSize: 26, fontWeight: 700 }}>
              {formatCurrency(portfolioSummary.totalValue)}
            </div>
            <div
              style={{
                fontSize: 13,
                color:
                  portfolioSummary.changeAbs >= 0
                    ? "var(--accent-success)"
                    : "var(--accent-danger)",
              }}
            >
              {formatChange(portfolioSummary.changeAbs)} (
              {formatPercent(portfolioSummary.changePct)})
            </div>

            {/* Fake chart area (you can swap to SimpleAreaChart later) */}
            <div
              style={{
                marginTop: 18,
                height: 120,
                borderRadius: 16,
                background:
                  "radial-gradient(circle at 30% 0, rgba(249,115,255,0.8), transparent 55%), linear-gradient(135deg, rgba(148,163,184,0.1), rgba(15,23,42,0.9))",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "55%",
                  top: "16%",
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "rgba(15,23,42,0.8)",
                  fontSize: 11,
                  boxShadow: "var(--shadow-subtle)",
                }}
              >
                {formatChange(5142.76)} ({formatPercent(2.89)})
              </div>
            </div>
          </Card>

          {/* My Balance */}
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: "var(--text-soft)" }}>My Balance</div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>
                  {formatCurrency(balanceSummary.totalBalance)}
                </div>
              </div>
              <button
                style={{
                  borderRadius: 999,
                  border: "1px solid var(--border-subtle)",
                  padding: "6px 12px",
                  fontSize: 11,
                  background: "var(--bg-elevated-soft)",
                }}
              >
                + Add
              </button>
            </div>

            <div className="grid-2" style={{ marginBottom: 12 }}>
              {balanceSummary.wallets.map((w) => (
                <div
                  key={w.symbol}
                  style={{
                    borderRadius: 16,
                    padding: 12,
                    background: "var(--bg-elevated-soft)",
                    fontSize: 12,
                  }}
                >
                  <div style={{ fontSize: 11, color: "var(--text-soft)" }}>{w.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>
                    {formatCurrency(w.amount)}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color:
                        w.action === "Send"
                          ? "var(--accent-success)"
                          : "var(--accent-warning)",
                    }}
                  >
                    {w.action} {formatCurrency(w.actionValue)}{" "}
                    {w.action === "Send" ? "→" : "←"}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 4,
                borderRadius: 14,
                padding: 10,
                background: "linear-gradient(135deg, #f973ff33, #38bdf833)",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              Swipe to Start Trading ⟶
            </div>
          </Card>
        </div>

        {/* Investment Goals + Wallet */}
        <div className="grid-2">
          {/* Investment Goals */}
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 12, color: "var(--text-soft)" }}>
                Investment Goals
              </div>
              <button
                style={{
                  borderRadius: 999,
                  padding: "4px 10px",
                  fontSize: 11,
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated-soft)",
                }}
              >
                Change
              </button>
            </div>
            <div style={{ fontSize: 14, marginBottom: 4 }}>
              {formatCurrency(investmentGoals.current)} /{" "}
              {formatCurrency(investmentGoals.target)}
            </div>
            <ProgressBar value={investmentGoals.progressPct} />
            <div
              style={{
                marginTop: 6,
                fontSize: 11,
                color: "var(--text-soft)",
              }}
            >
              {investmentGoals.progressPct.toFixed(1)}% completed
            </div>
          </Card>

          {/* My Wallet */}
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: "var(--text-soft)" }}>
                  My Wallet
                </div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>
                  {formatCurrency(
                    walletBreakdown.reduce((sum, w) => sum + w.value, 0)
                  )}
                </div>
              </div>
              <button
                style={{
                  borderRadius: 999,
                  padding: "4px 10px",
                  fontSize: 11,
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated-soft)",
                }}
              >
                History
              </button>
            </div>

            <div className="grid-2">
              {walletBreakdown.map((item) => (
                <WalletStat
                  key={item.label}
                  label={item.label}
                  value={formatCurrency(item.value)}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Top Performing Assets */}
        <TopPerformingAssetsSection assets={topAssets} />
      </div>

      {/* RIGHT COLUMN */}
      <div className="app-main-right">
        <PlanSummaryCard />
        <InvestmentStyleCard />
        <AiAssistantCard suggestions={aiSuggestions} />
      </div>
    </div>
  );
};

const WalletStat = ({ label, value }) => (
  <div
    style={{
      borderRadius: 14,
      padding: 10,
      background: "var(--bg-elevated-soft)",
      fontSize: 12,
    }}
  >
    <div className="text-soft">{label}</div>
    <div style={{ fontWeight: 600, marginTop: 4 }}>{value}</div>
  </div>
);

export default DashboardPage;
