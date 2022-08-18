import React from "react";
import { useLocation } from "react-router-dom";
import CreditCard from "./CreditCard";
import CustomerCard from "./CustomerCard";
import "../Styles/SummaryPage.css";

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
      <h2>Cards available:</h2>
      <CreditCard {...financeFormValues} />
    </div>
  );
}

/*

TO DO:
- Customer component -> title, name, dob, employment status, house number, annual income, and postcode
- Card component
- Filter data that has been passed down

- The Student Life credit card is only available to customers with an employment status of Student.

- The anywhere card is available to anyone anywhere.

- The Liquid card is a card available to customers who have an income of more than £16000.

*/
