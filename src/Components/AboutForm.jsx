import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/AboutPage.css";

export default function AboutForm() {
  const [aboutYouFormValues, setAboutYouFormValues] = useState({
    title: "",
    firstName: "",
    lastName: "",
    date: "",
    month: "",
    year: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAboutYouFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const { title, firstName, lastName, date, month, year } = aboutYouFormValues;

  return (
    <div className="container">
      <div className="about-you-form-container">
        <h1 className="title">About You</h1>
        <form className="form-container">
          <div className="input-container">
            <label className="form-label">Title</label>
            <select
              id="title"
              className="option-container"
              name="title"
              value={title}
              onChange={handleChange}
            >
              <option value="" selected disabled>
                Select title
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
            </select>
          </div>
          <div className="input-container">
            <label className="form-label">First name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="input-container">
            <label className="form-label">Last name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={handleChange}
              className="form-input"
              required
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
                required
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
                required
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
                required
              />
            </div>
          </div>
        </form>
        <button className="button">
          <Link to="/your-address" state={{ aboutYouFormValues }}>
            NEXT
          </Link>
        </button>
      </div>
    </div>
  );
}

/*
- create state to hold data
- handleChange is updating state to track the user's input
- prevState is keeping state up to date with what the user has inputted
*/
