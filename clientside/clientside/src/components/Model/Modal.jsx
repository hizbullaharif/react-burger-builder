import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";

function Modal({ setOpenModal, ingredients, totalPrice }) {
  console.log(ingredients);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Your Order Summary:</h3>
        </div>
        <div className="body">
          <ul>
            <li>Lettuce : {ingredients.lettuce}</li>
            <li>Bacon : {ingredients.bacon}</li>
            <li>Cheese : {ingredients.cheese}</li>
            <li>Meat : {ingredients.meat}</li>
          </ul>
        </div>
        <div className="title">
          <h3>Total Price : {totalPrice}$</h3>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>

          <button>
            {/* <Link to="/checkout" state={{ from: "occupation" }}>
              Continue
            </Link> */}
            <Link
              className="a1"
              to={"/checkout"}
              state={{ ingredients, totalPrice }}
            >
              Continue
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
