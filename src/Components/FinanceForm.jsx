import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/FinanceForm.css";

export default function FinanceForm() {
  const [financeFormValues, setFinanceFormValues] = useState({
    income: "",
    employment: "",
  });

  const [disabled, setDisabled] = useState(false);

  function handleFormChanges(e) {
    const { name, value } = e.target;
    setFinanceFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    setDisabled(!disabled);
  }

  const location = useLocation();
  const navigate = useNavigate();
  const { aboutYouFormValues, address } = location.state;

  function handleOnClick(e) {
    navigate("/summary", {
      state: { aboutYouFormValues, address, financeFormValues },
    });
    e.preventDefault();
  }

  return (
    <div className="finance-form-container">
      <form onSubmit={handleOnClick}>
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
              required
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
            required
          >
            <option value="" selected disabled>
              Select employment status
            </option>
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Student">Student</option>
          </select>
          <button className="button" type="submit" disabled={disabled}>
            CHECK MY ELIGIBILITY
          </button>
        </div>
      </form>
    </div>
  );
}

/*
- Add form validation


*/
