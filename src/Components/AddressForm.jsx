import React, { useState } from "react";
import PostcodeLookupComponent from "./PostcodeLookupComponent";
import { useLocation, Link } from "react-router-dom";
import "../Styles/AddressForm.css";

export default function AddressForm() {
  const [address, setAddress] = useState({
    line_1: "",
    line_2: "",
    line_3: "",
    post_town: "",
    postcode: "",
  });

  function handleAddressChange(name, value) {
    setAddress((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const location = useLocation();

  const { aboutYouFormValues } = location.state;

  return (
    <div className="address-form-container">
      <h1>Your address</h1>
      <PostcodeLookupComponent
        onAddressSelected={(address) => setAddress(address)}
      />
      <div className="address-input-container">
        <label>Address Line One</label>
        <input
          type="text"
          name="line_1"
          value={address.line_1}
          onChange={(e) => handleAddressChange("line_1", e.target.value)}
        />
      </div>
      <div className="address-input-container">
        <label>Address Line Two</label>
        <input
          type="text"
          name="line_2"
          value={address.line_2}
          onChange={(e) => handleAddressChange("line_2", e.target.value)}
        />
      </div>
      <div className="address-input-container">
        <label>Address Line Three</label>
        <input
          type="text"
          name="line_3"
          value={address.line_3}
          onChange={(e) => handleAddressChange("line_3", e.target.value)}
        />
      </div>
      <div className="address-input-container">
        <label>Post Town</label>
        <input
          type="text"
          name="post_town"
          value={address.post_town}
          onChange={(e) => handleAddressChange("post_town", e.target.value)}
        />
      </div>
      <div className="address-input-container">
        <label>Postcode</label>
        <input
          type="text"
          name="postcode"
          value={address.postcode}
          onChange={(e) => handleAddressChange("postcode", e.target.value)}
        />
      </div>
      <button className="button">
        <Link to="/your-finances" state={{ aboutYouFormValues, address }}>
          NEXT
        </Link>
      </button>
    </div>
  );
}
