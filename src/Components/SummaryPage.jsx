import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/SummaryPage.css";
import CustomerCard from "./CustomerCard";

export default function SummaryPage() {
  const location = useLocation();

  const { aboutYouFormValues, address, financeFormValues } = location.state;

  return (
    <div className="summary-container">
      <h1>Summary</h1>
      <CustomerCard
        {...aboutYouFormValues}
        {...address}
        {...financeFormValues}
      />
    </div>
  );
}

/*

TO DO:
- Customer component -> title, name, dob, employment status, house number, annual income, and postcode
- Card component
- Filter data that has been passed down

*/
