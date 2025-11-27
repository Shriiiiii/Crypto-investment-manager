// Mock data for your dashboard.
// You can later replace this with real API calls from your backend.

export const portfolioSummary = {
  owner: "Alexander Liebert",
  totalValue: 197980.23,
  changeAbs: 2537.12,
  changePct: 9.73,
  timeframe: "Weekly",
};

export const balanceSummary = {
  totalBalance: 12694.91,
  wallets: [
    { symbol: "USDT", label: "USDT", amount: 8200, action: "Send", actionValue: 1200 },
    { symbol: "BTC", label: "BTC", amount: 4494.91, action: "Receive", actionValue: 700 },
  ],
};

export const investmentGoals = {
  current: 1948.12,
  target: 2500000,
  progressPct: 62.7,
};

export const walletBreakdown = [
  { label: "Liquid Cash", value: 5500 },
  { label: "Debit Card", value: 5340 },
];

export const topAssets = [
  {
    pair: "BTC/USDT",
    value: 2345.678,
    changeAbs: 3456.78,
    changePct: 12.34,
  },
  {
    pair: "SOL/USDT",
    value: 3210.987,
    changeAbs: 4321.09,
    changePct: 8.9,
  },
  {
    pair: "ETH/USDT",
    value: 4567.89,
    changeAbs: 1234.56,
    changePct: 5.67,
  },
];

export const aiSuggestions = [
  "Strategies for AI cryptocurrency investing?",
  "AI aids in informed crypto choices.",
  "What AI tools analyze crypto trends?",
  "AI can enhance my crypto strategy.",
];
