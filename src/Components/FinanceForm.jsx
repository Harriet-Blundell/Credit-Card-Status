import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/FinanceForm.css";

export default function FinanceForm() {
  const [financeFormValues, setFinanceFormValues] = useState({
    income: "",
    employment: "",
  });

  function handleFormChanges(e) {
    const { name, value } = e.target;
    setFinanceFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const location = useLocation();
  const navigate = useNavigate();
  const { aboutYouFormValues, address } = location.state;

  function onSubmitFinances(e) {
    navigate("/summary", {
      state: { aboutYouFormValues, address, financeFormValues },
    });
    e.preventDefault();
  }

  return (
    <div className="finance-form-container">
      <h1 className="title">Your finances</h1>
      <div className="income-container">
        <label className="form-label">Annual income (before tax)</label>
        <span className="currency-input">
          £
          <input
            type="number"
            name="income"
            value={financeFormValues.income}
            onChange={handleFormChanges}
            className="income-input"
            placeholder="Annual income"
          />
          <span className="income-period">per year</span>
        </span>
      </div>
      <div className="employment-container">
        <label className="form-label">Employment status</label>
        <select
          id="employment"
          className="option-container"
          name="employment"
          value={financeFormValues.employment}
          onChange={handleFormChanges}
        >
          <option value="" selected disabled>
            Select employment status
          </option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Student">Student</option>
        </select>
        <button className="button" type="submit" onClick={onSubmitFinances}>
          CHECK MY ELIGIBILITY
        </button>
      </div>
    </div>
  );
}

/*
- Add form validation


*/
