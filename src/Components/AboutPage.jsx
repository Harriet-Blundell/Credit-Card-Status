import React, { useState } from "react";
import "../Styles/AboutPage.css";
import AboutYouForm from "./AboutYouForm";
import FinanceForm from "./FinanceForm";

export default function AboutPage() {
  const [aboutYouFormValues, setAboutYouFormValues] = useState({
    title: "",
    firstName: "",
    lastName: "",
    date: "",
    month: "",
    year: "",
  });

  const [showFinanceForm, setShowFinanceForm] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setAboutYouFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const handleClick = (e) => {
    setShowFinanceForm(true);
  };

  return !showFinanceForm ? (
    <div className="about-page-container">
      <AboutYouForm
        aboutYouFormValues={aboutYouFormValues}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </div>
  ) : (
    <FinanceForm aboutYouFormValues={aboutYouFormValues} />
  );
}

/*
- create state to hold data
- handleChange is updating state to track the user's input
- prevState is keeping state up to date with what the user has inputted
*/
