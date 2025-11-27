// Simple helpers for formatting numbers in the UI

export const formatCurrency = (value, currency = "USD") => {
  if (value === null || value === undefined || isNaN(value)) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatPercent = (value) => {
  if (value === null || value === undefined || isNaN(value)) return "-";
  return `${value.toFixed(2)}%`;
};

export const formatChange = (value) => {
  if (value === null || value === undefined || isNaN(value)) return "-";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}`;
};
