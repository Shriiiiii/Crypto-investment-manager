import React, { useState } from "react";
import Card from "../common/Card.jsx";
import Chip from "../common/Chip.jsx";

const AiAssistantCard = ({ suggestions = [] }) => {
  const [question, setQuestion] = useState("");

  const handleSuggestionClick = (text) => {
    setQuestion(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    // For now just log; later you can call your backend AI endpoint here.
    console.log("AI question:", question);
    setQuestion("");
  };

  return (
    <Card
      style={{
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>Can I Help You?</div>
          <div style={{ fontSize: 11, color: "var(--text-soft)" }}>
            Ask questions about your investment.
          </div>
        </div>
        <Chip>AI Assistant</Chip>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          marginTop: 4,
          marginBottom: 8,
        }}
      >
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSuggestionClick(s)}
            style={{
              textAlign: "left",
              borderRadius: 12,
              padding: "8px 10px",
              fontSize: 11,
              background: "var(--bg-elevated-soft)",
              border: "1px solid rgba(148,163,184,0.15)",
              transition:
                "background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <input
          placeholder="Write question here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            flex: 1,
            borderRadius: 999,
            border: "1px solid var(--input-border)",
            padding: "8px 12px",
            background: "var(--input-bg)",
            fontSize: 12,
          }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ whiteSpace: "nowrap" }}
        >
          Ask
        </button>
      </form>
    </Card>
  );
};

export default AiAssistantCard;
