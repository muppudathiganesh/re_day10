import React from "react";
import Counter from "./components/Counter";
// or import CounterWithHook from "./components/CounterWithHook";

export default function App(){
  return (
    <div>
      <h1 style={{ padding: 20 }}>Demo</h1>
      <Counter />
    </div>
  )
}
