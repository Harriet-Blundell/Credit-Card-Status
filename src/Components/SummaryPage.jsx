import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreditCard from "./CreditCard";
import CustomerCard from "./CustomerCard";
import "../Styles/SummaryPage.css";

export default function SummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleOnClick(e) {
    navigate("/");
    e.preventDefault();
  }

  const { aboutYouFormValues, address, financeFormValues } = location.state;

  return (
    <div className="summary-container">
      <h1 className="title">Summary</h1>
      <CustomerCard
        {...aboutYouFormValues}
        {...address}
        {...financeFormValues}
      />
      <h2>Cards available:</h2>
      <CreditCard {...financeFormValues} />
      <button onClick={handleOnClick} className="restart-journey-button">
        RESTART
      </button>
    </div>
  );
}
