import React from "react";

/**
 * Simple SVG area chart for the portfolio card.
 * Pass an array of numbers between 0 and 1 (normalized).
 */
const SimpleAreaChart = ({ points = [0.2, 0.4, 0.3, 0.6, 0.8, 0.7, 1] }) => {
  const width = 300;
  const height = 120;
  const paddingX = 10;
  const paddingY = 10;

  const step = (width - paddingX * 2) / (points.length - 1);

  const pathPoints = points
    .map((p, i) => {
      const x = paddingX + i * step;
      const y = height - paddingY - p * (height - paddingY * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const firstX = paddingX;
  const lastX = paddingX + step * (points.length - 1);

  const areaPath = `
    M ${firstX},${height - paddingY}
    L ${pathPoints}
    L ${lastX},${height - paddingY}
    Z
  `;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ borderRadius: 16, overflow: "hidden" }}
    >
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f973ff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#f973ff" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="url(#areaGradient)"
        opacity="0.2"
      />

      {/* Area */}
      <path d={areaPath} fill="url(#areaGradient)" />

      {/* Line */}
      <polyline
        points={pathPoints}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2"
      />
    </svg>
  );
};

export default SimpleAreaChart;
