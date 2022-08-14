import React, { useState } from "react";
import "../Styles/AboutPage.css";
import AboutYouForm from "./AboutYouForm";

export default function AboutPage() {
  const [aboutYouFormValues, setAboutYouFormValues] = useState({
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
      <h1 className="title">About Page</h1>
      <AboutYouForm
        aboutYouFormValues={aboutYouFormValues}
        handleChange={handleChange}
      />
    </div>
  );
}

/*

- handleChange is updating state to track the user's input

*/
