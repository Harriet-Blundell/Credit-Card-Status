import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const [disabled, setDisabled] = useState(false);

  const { title, firstName, lastName, date, month, year } = aboutYouFormValues;

  const navigate = useNavigate();

  function handleOnClick(e) {
    navigate("/your-address", {
      state: { aboutYouFormValues },
    });
    e.preventDefault();
    setDisabled(!disabled);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setAboutYouFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="about-you-form-container">
        <h1 className="title">About You</h1>
        <form className="form-container" onSubmit={handleOnClick}>
          <div className="input-container">
            <label className="form-label">Title</label>
            <select
              id="title"
              className="option-container"
              name="title"
              value={title}
              onChange={handleChange}
              required
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
              pattern="[a-zA-Z]*"
              name="firstName"
              maxLength="20"
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
              pattern="[a-zA-Z]*"
              maxLength="20"
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
                type="number"
                placeholder="DD"
                pattern="\d*"
                className="date-field"
                name="date"
                max="31"
                value={date}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="MM"
                pattern="\d*"
                max="12"
                className="date-field"
                name="month"
                value={month}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="YYYY"
                pattern="\d*"
                max="2022"
                className="date-field date-field--year"
                name="year"
                value={year}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="button" type="submit" disabled={disabled}>
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
}
