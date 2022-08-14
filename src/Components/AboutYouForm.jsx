import React from "react";
import "../Styles/AboutYouForm.css";

export default function AboutYouForm({
  firstName,
  lastName,
  date,
  month,
  year,
  handleChange,
}) {
  return (
    <div className="about-you-form-container">
      <form className="form-container">
        <label className="form-label">
          First name:
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Last name:
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <div className="dob-container">
          <div className="field-inline-block">
            <label>DD</label>
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="2"
              size="2"
              className="date-field"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </div>
          /
          <div className="field-inline-block">
            <label>MM</label>
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="2"
              size="2"
              className="date-field"
              name="month"
              value={month}
              onChange={handleChange}
            />
          </div>
          /
          <div className="field-inline-block">
            <label>YYYY</label>
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="4"
              size="4"
              className="date-field date-field--year"
              name="year"
              value={year}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
