// src/components/UserTable.jsx
import React from "react";

export default function UserTable() {
  const users = [
    { id: "u1", name: "Alice", age: 25 },
    { id: "u2", name: "Bob", age: 30 },
    { id: "u3", name: "Charlie", age: 28 },
    { id: "u4", name: "Diana", age: 22 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>User Table (key on &lt;tr&gt;)</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "8px" }}>Name</th>
            <th style={{ padding: "8px" }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{user.name}</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
