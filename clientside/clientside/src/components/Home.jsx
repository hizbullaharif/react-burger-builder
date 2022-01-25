/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import Modal from "./Model/Modal";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  var data = 0;
  const [isIngrediendsAdded, setisIngrediendsAdded] = useState(false);
  const [cookie, setCookies, removeCookie] = useCookies(["token", "userid"]);
  const [ingredients, setIngredients] = useState({
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [price, setprice] = useState(3.0);
  const [btnStatus, setbtnStatus] = useState({
    lettuce: true,
    bacon: true,
    cheese: true,
    meat: true,
  });
  const [openModel, setopenModel] = useState(false);

  useEffect(() => {
    checkIngredients();
    // updateBurger();
  }, [ingredients, btnStatus]);

  // Get initial data and assign to state
  // useEffect(() => {
  //   if (cookie.userid) {
  //     axios({
  //       method: "get",
  //       url: `http://localhost:3001/burgers/${cookie.userid}`,
  //     }).then((res) => {
  //       data = res.data;
  //       setIngredients({
  //         bacon: data[0].bacon,
  //         cheese: data[0].cheese,
  //         meat: data[0].meat,
  //         lettuce: data[0].lettuce,
  //       });
  //       setprice(Number(data[0].price));
  //       console.log(data[0].id);
  //     });
  //   }
  // }, []);

  // update data in db burger collection
  const updateBurger = () => {
    axios({
      method: "patch",
      url: `http://localhost:3000/burgers/${data[0].id}`,
      data: {
        bacon: ingredients.bacon,
        cheese: ingredients.cheese,
        meat: ingredients.meat,
        lettuce: ingredients.lettuce,
      },
    }).then((res) => {
      console.log("updated");
    });
  };

  const checkIngredients = () => {
    if (
      ingredients.lettuce === 0 &&
      ingredients.bacon === 0 &&
      ingredients.cheese === 0 &&
      ingredients.meat === 0
    ) {
      setisIngrediendsAdded(true);
    } else {
      setisIngrediendsAdded(false);
    }
  };

  const priceIncrement = (ingredie_) => {
    switch (ingredie_) {
      case "Lettuce":
        // checkIngredients();
        setbtnStatus({ ...btnStatus, lettuce: false });
        if (ingredients.lettuce >= 0 && price >= 3) {
          setprice(price + 0.5);
          setIngredients({ ...ingredients, lettuce: ingredients.lettuce + 1 });
        }
        break;

      case "bacon":
        // checkIngredients();
        setbtnStatus({ ...btnStatus, bacon: false });
        if (ingredients.bacon >= 0 && price >= 3) {
          setprice(price + 0.7);
          setIngredients({ ...ingredients, bacon: ingredients.bacon + 1 });
        }

        break;

      case "cheese":
        // checkIngredients();
        setbtnStatus({ ...btnStatus, cheese: false });
        if (ingredients.cheese >= 0 && price >= 3) {
          setprice(price + 0.4);
          setIngredients({ ...ingredients, cheese: ingredients.cheese + 1 });
        }

        break;

      case "meat":
        // checkIngredients();
        setbtnStatus({ ...btnStatus, meat: false });
        if (ingredients.meat >= 0 && price >= 3) {
          setprice(price + 0.3);
          setIngredients({ ...ingredients, meat: ingredients.meat + 1 });
        }

        break;
    }
  };

  const priceDecrementLettuce = (ingredie_) => {
    switch (ingredie_) {
      case "Lettuce":
        // checkIngredients();
        if (ingredients.lettuce > 0 && price > 3) {
          setprice(price - 0.5);
          setIngredients({ ...ingredients, lettuce: ingredients.lettuce - 1 });
          updateBurger();
        }
        if (ingredients.lettuce === 0) {
          setbtnStatus({ ...btnStatus, lettuce: true });
        }
        break;
      case "bacon":
        // checkIngredients();
        if (ingredients.bacon > 0 && price > 3) {
          setprice(price - 0.7);
          setIngredients({ ...ingredients, bacon: ingredients.bacon - 1 });
          updateBurger();
        }
        if (ingredients.bacon === 0) {
          setbtnStatus({ ...btnStatus, bacon: true });
        }
        break;
      case "cheese":
        if (ingredients.cheese > 0 && price > 3) {
          setprice(price - 0.4);
          setIngredients({ ...ingredients, cheese: ingredients.cheese - 1 });
          updateBurger();
        }
        if (ingredients.cheese === 0) {
          setbtnStatus({ ...btnStatus, cheese: true });
        }
        break;
      case "meat":
        if (ingredients.meat > 0 && price > 3) {
          setprice(price - 0.3);
          setIngredients({ ...ingredients, meat: ingredients.meat - 1 });
          updateBurger();
        }
        if (ingredients.meat === 0) {
          setbtnStatus({ ...btnStatus, meat: true });
        }

        break;
    }
  };
  return (
    <>
      <Burger
        ingredients={ingredients}
        isIngrediendsAdded={isIngrediendsAdded}
      />
      <div className="BuildControls">
        <p>
          Current price: <strong>${price}</strong>
        </p>
        <div className="BuildControl">
          <div className="Label">Lettuce</div>
          <button
            className="Less"
            onClick={() => priceDecrementLettuce("Lettuce")}
            disabled={btnStatus.lettuce}
          >
            Less
          </button>
          <button className="More" onClick={() => priceIncrement("Lettuce")}>
            More
          </button>
        </div>
        <div className="BuildControl">
          <div className="Label">Bacon</div>
          <button
            className="Less"
            onClick={() => priceDecrementLettuce("bacon")}
            disabled={btnStatus.bacon}
          >
            Less
          </button>
          <button className="More" onClick={() => priceIncrement("bacon")}>
            More
          </button>
        </div>
        <div className="BuildControl">
          <div className="Label">Cheese</div>
          <button
            className="Less"
            onClick={() => priceDecrementLettuce("cheese")}
            disabled={btnStatus.cheese}
          >
            Less
          </button>
          <button className="More" onClick={() => priceIncrement("cheese")}>
            More
          </button>
        </div>
        <div className="BuildControl">
          <div className="Label">Meat</div>
          <button
            className="Less"
            onClick={() => priceDecrementLettuce("meat")}
            disabled={btnStatus.meat}
          >
            Less
          </button>
          <button className="More" onClick={() => priceIncrement("meat")}>
            More
          </button>
        </div>
        {cookie.userid ? (
          <button
            className="OrderButton"
            onClick={() => {
              setopenModel(true);
            }}
            disabled={isIngrediendsAdded}
          >
            ORDER
          </button>
        ) : (
          <Link to="/auth" className="OrderButton">
            Signup to order
          </Link>
        )}

        {openModel && (
          <Modal
            setOpenModal={setopenModel}
            ingredients={ingredients}
            totalPrice={price}
          />
        )}
      </div>
    </>
  );
};

export default Home;
