import React, { useState } from "react";
import AboutYouForm from "./AboutYouForm";
import { Link } from "react-router-dom";
import "../Styles/AboutPage.css";

export default function AboutPage() {
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

  return (
    <div className="about-page-container">
      <AboutYouForm
        aboutYouFormValues={aboutYouFormValues}
        handleChange={handleChange}
      />
      <button>
        <Link to="/your-finances" state={{ aboutYouFormValues }}>
          Next
        </Link>
      </button>
    </div>
  );
}

/*
- create state to hold data
- handleChange is updating state to track the user's input
- prevState is keeping state up to date with what the user has inputted
*/
