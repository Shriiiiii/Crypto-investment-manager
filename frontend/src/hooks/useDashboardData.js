import { useState, useEffect } from "react";
import {
  portfolioSummary,
  balanceSummary,
  investmentGoals,
  walletBreakdown,
  topAssets,
  aiSuggestions,
} from "../data/dashboardData.js";

/**
 * Simple hook that returns mock dashboard data.
 * Later you can replace internals with real API calls (fetch from backend).
 */
const useDashboardData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    portfolioSummary: null,
    balanceSummary: null,
    investmentGoals: null,
    walletBreakdown: [],
    topAssets: [],
    aiSuggestions: [],
  });

  useEffect(() => {
    // Simulate async fetch
    const timer = setTimeout(() => {
      setData({
        portfolioSummary,
        balanceSummary,
        investmentGoals,
        walletBreakdown,
        topAssets,
        aiSuggestions,
      });
      setLoading(false);
    }, 400); // small delay for realism

    return () => clearTimeout(timer);
  }, []);

  return { loading, ...data };
};

export default useDashboardData;
