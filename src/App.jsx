// src/App.jsx
import React from "react";
import UserTable from "./components/UserTable";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ padding: 20 }}>User Table Demo</h1>
      <UserTable />
    </div>
  );
}
