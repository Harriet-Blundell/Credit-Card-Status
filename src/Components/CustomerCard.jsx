import React from "react";
import "../Styles/CustomerCard.css";

export default function CustomerCard({
  title,
  firstName,
  lastName,
  date,
  month,
  year,
  premise,
  postcode,
  employment,
  income,
}) {
  return (
    <div className="customer-card-container">
      <div className="customer-initials">
        <h1>
          {firstName[0]}
          {lastName[0]}
        </h1>
      </div>
      <div className="customer-content">
        <div className="customer-name">
          <h1>
            {title} {firstName} {lastName}
          </h1>
          <p>
            {date} / {month} / {year}
          </p>
        </div>
        <div className="customer-information-container">
          <div className="customer-employment-information">
            <p>{employment}</p>
            <p>
              Annual income: <span>£{income}</span>
            </p>
          </div>
          <div className="customer-address-information">
            <p>
              House number: <span>{premise}</span>
            </p>
            <p>
              Postcode: <span>{postcode}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
