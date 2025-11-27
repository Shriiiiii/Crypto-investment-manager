import React from "react";

/**
 * Simple CSS-based gauge.
 * value: 0 - 100
 */
const GaugeChart = ({ value = 70, label }) => {
  const clamped = Math.max(0, Math.min(100, value));
  const deg = -120 + (clamped / 100) * 240; // semi-circle sweep

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "55%",
      }}
    >
      {/* Gauge background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "999px",
          background:
            "conic-gradient(from 210deg, #22c55e, #facc15, #fb923c, #f97316, #f973ff 70%, #1d283a 70%)",
          filter: "blur(0.5px)",
          maskImage:
            "radial-gradient(circle at 50% 100%, transparent 55%, black 56%)",
        }}
      />

      {/* Inner dark circle */}
      <div
        style={{
          position: "absolute",
          inset: "20%",
          borderRadius: "999px",
          background: "radial-gradient(circle at 50% 0, #f973ff33, #020617 65%)",
        }}
      />

      {/* Needle */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18%",
          width: 2,
          height: "36%",
          background: "#f9fafb",
          transformOrigin: "bottom center",
          transform: `translateX(-50%) rotate(${deg}deg)`,
          boxShadow: "0 0 8px rgba(248,250,252,0.8)",
        }}
      />

      {/* Center dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18%",
          width: 10,
          height: 10,
          borderRadius: "999px",
          background: "#f973ff",
          transform: "translate(-50%, 50%)",
          boxShadow: "0 0 12px rgba(249,115,255,0.9)",
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "4%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        <div style={{ fontSize: 12, color: "var(--text-soft)" }}>{label}</div>
        <div style={{ fontWeight: 600 }}>{clamped.toFixed(0)}%</div>
      </div>
    </div>
  );
};

export default GaugeChart;
