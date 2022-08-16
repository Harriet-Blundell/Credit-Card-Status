import React from "react";

export default function FinanceForm({ title }) {
  console.log(title, "<<< title");
  return (
    <div>
      <h1>Finance Form</h1>
      <p>{title}</p>
    </div>
  );
}
