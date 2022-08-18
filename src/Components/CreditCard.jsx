import React from "react";
import "../Styles/CreditCard.css";

export default function CreditCard(financeFormValues) {
  const { income, employment } = financeFormValues;

  return (
    <div className="credit-card-container">
      <div className="card-container anywhere">
        <h1>Anywhere Card</h1>
        <div className="card-content">
          <p>
            Apr: <span>33.9%</span>
          </p>
          <p>
            Balance Transfer Offer Duration <span>0 months</span>
          </p>
          <p>
            Purchase Offer Duration <span>0 months</span>
          </p>
          <p>
            Credit Available <span>£300</span>
          </p>
        </div>
      </div>

      {employment === "Student" ? (
        <div className="card-container student">
          <h1>Student Life</h1>
          <div className="card-content">
            <p>
              Apr: <span>18.9%</span>
            </p>
            <p>
              Balance Transfer Offer Duration <span>0 months</span>
            </p>
            <p>
              Purchase Offer Duration <span>6 months</span>
            </p>
            <p>
              Credit Available <span>£1200</span>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {income > 16000 ? (
        <div className="card-container liquid">
          <h1>Liquid Card</h1>
          <div className="card-content">
            <p>
              Apr: <span>33.9%</span>
            </p>
            <p>
              Balance Transfer Offer Duration <span>12 months</span>
            </p>
            <p>
              Purchase Offer Duration <span>6 months</span>
            </p>
            <p>
              Credit Available <span>£3000</span>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
