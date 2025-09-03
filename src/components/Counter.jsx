import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Update document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h2>Counter with Title Update</h2>
      <p style={{ fontSize: 18, margin: "12px 0" }}>Current count: <strong>{count}</strong></p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCount((c) => c - 1)} aria-label="decrease" >
          −
        </button>

        <button onClick={() => setCount((c) => c + 1)} aria-label="increase" >
          +
        </button>

        <button onClick={() => setCount(0)} aria-label="reset" >
          Reset
        </button>
      </div>
    </div>
  );
}
