import React, { useState } from "react";
import Burger from "./Burger";
import { Link, useLocation } from "react-router-dom";
import ContactData from "./ContactData";

const Checkout = () => {
  const location = useLocation();
  const { ingredients, totalPrice } = location.state;
  const [showForm, setshowForm] = useState(false);

  return (
    <>
      <h1 className="txtcenter">We hope it tastes well!</h1>
      <Burger ingredients={ingredients} totalPrice={totalPrice} />
      <div className="btn_2">
        <button className=" Button Danger">
          <Link to="/" className="clr">
            Cancel
          </Link>
        </button>
        <button
          className="Button Success"
          onClick={() => {
            setshowForm(true);
          }}
        >
          Continue
        </button>
      </div>
      {showForm && (
        <ContactData ingredients={ingredients} totalPrice={totalPrice} />
      )}
    </>
  );
};

export default Checkout;
