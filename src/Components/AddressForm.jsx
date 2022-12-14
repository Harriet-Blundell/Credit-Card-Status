import React, { useState } from "react";
import PostcodeLookupComponent from "./PostcodeLookupComponent";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/AddressForm.css";

export default function AddressForm() {
  const [address, setAddress] = useState({
    line_1: "",
    line_2: "",
    line_3: "",
    post_town: "",
    postcode: "",
  });

  const [disabled, setDisabled] = useState(false);

  function handleAddressChange(name, value) {
    setAddress((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const location = useLocation();
  const navigate = useNavigate();

  const { aboutYouFormValues } = location.state;

  function handleOnClick(e) {
    navigate("/your-finances", {
      state: { aboutYouFormValues, address },
    });
    e.preventDefault();
    setDisabled(!disabled);
  }

  return (
    <div className="address-form-container">
      <form onSubmit={handleOnClick}>
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
            required
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
            required
          />
        </div>
        <div className="address-input-container">
          <label>Postcode</label>
          <input
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={(e) => handleAddressChange("postcode", e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit" disabled={disabled}>
          NEXT
        </button>
      </form>
    </div>
  );
}
