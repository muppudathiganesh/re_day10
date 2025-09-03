import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function CounterWithHook() {
  const [count, setCount] = useState(0);
  useDocumentTitle(`Count: ${count}`);

  return (
    <div style={{ padding: 20 }}>
      <h2>Counter (hook)</h2>
      <p>Current: {count}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
