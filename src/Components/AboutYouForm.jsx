import React from "react";
import AddressLookUp from "./AddressLookup";
import "../Styles/AboutYouForm.css";

export default function AboutYouForm({
  title,
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
          <p>Title</p>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <p>First name</p>
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
          <p>Last name:</p>
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
          <p>Date of birth</p>
          <div className="field-inline-block">
            <input
              type="text"
              placeholder="DD"
              pattern="[0-9]*"
              maxLength="2"
              size="2"
              className="date-field"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </div>
          <div className="field-inline-block">
            <input
              type="text"
              placeholder="MM"
              pattern="[0-9]*"
              maxLength="2"
              size="2"
              className="date-field"
              name="month"
              value={month}
              onChange={handleChange}
            />
          </div>
          <div className="field-inline-block">
            <input
              type="text"
              placeholder="YYYY"
              pattern="[0-9]*"
              maxLength="4"
              size="4"
              className="date-field date-field--year"
              name="year"
              value={year}
              onChange={handleChange}
            />
          </div>
          <AddressLookUp />
        </div>
      </form>
    </div>
  );
}
