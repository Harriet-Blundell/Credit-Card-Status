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
        <div className="input-container">
          <label className="form-label" for="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="input-container">
          <label className="form-label" for="firstName">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="input-container">
          <label className="form-label" for="lastName">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="dob-container">
          <label className="form-label">Date of birth</label>
          <div className="dob-input-container">
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
        </div>
        <AddressLookUp />
        <input type="submit" value="Next"></input>
      </form>
    </div>
  );
}
