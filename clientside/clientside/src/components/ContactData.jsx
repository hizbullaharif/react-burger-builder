import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ContactData = ({ ingredients, totalPrice }) => {
  const history = useNavigate();
  const [cookie, setCookies] = useCookies(["token", "userid"]);
  const [msg, setMsg] = useState(false);
  const [state, setState] = useState({
    name: "",
    street: "",
    zipcode: "",
    country: "",
    email: "",
    status: "",
  });
  const [btnStatus, setbtnStatus] = useState(true);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, street, zipcode, country, email, status } = state;
    const userid = cookie.userid;
    let res;
    try {
      res = await axios({
        method: "post",
        url: "http://localhost:3000/contactdata",
        data: {
          userid: userid,
          name: name,
          street: street,
          zipcode: zipcode,
          country: country,
          email: email,
          status: status,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }
    if (res.status === 200) {
      const orderPlaced = placeOrder(userid);
      setTimeout(() => {
        setMsg(true);
        history("/order");
      }, 2000);
    }
  };

  const placeOrder = async (userid) => {
    let res;
    const { bacon, cheese, meat, lettuce } = ingredients;
    console.log("bbbbbbbbbb", bacon);
    try {
      res = await axios({
        method: "post",
        url: "http://localhost:3001/orders",
        data: {
          userid: userid,
          totalPrice: totalPrice.toString(),
          bacon: bacon,
          cheese: cheese,
          meat: meat,
          lettuce: lettuce,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }
    if (res.status === 200) {
      return true;
    } else {
      console.log("Error in orders api");
    }
  };

  const checkstatus = () => {
    if (
      state.name.length === 0 ||
      state.street.length === 0 ||
      state.zipcode.length === 0 ||
      state.country.length === 0 ||
      state.email.length === 0 ||
      state.status.length === 0
    ) {
      setbtnStatus(true);
    } else {
      setbtnStatus(false);
    }
  };
  useEffect(() => {
    checkstatus();
  }, [state]);
  return (
    <>
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="Input">
            <label className="Label"></label>
            <input
              name="name"
              type="text"
              className="InputElement"
              placeholder="Your Name"
              value={state.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="Input">
            <label className="Label"></label>
            <input
              name="street"
              type="text"
              className="InputElement"
              placeholder="Street"
              value={state.street}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="Input">
            <label className="Label"></label>
            <input
              name="zipcode"
              type="text"
              className="InputElement"
              placeholder="Zip Code"
              value={state.zipcode}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="Input">
            <label className="Label"></label>
            <input
              name="country"
              type="text"
              className="InputElement"
              placeholder="Country"
              value={state.country}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="Input">
            <label className="Label"></label>
            <input
              name="email"
              type="email"
              className="InputElement"
              placeholder="E-mail"
              value={state.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="Input">
            <label className="Label"></label>
            <select
              className="InputElement"
              name="status"
              value={state.status}
              onChange={handleChange}
            >
              <option>Fastest</option>
              <option value="cheapest">Cheapest</option>
            </select>
          </div>
          <button disabled={btnStatus} className="Button Success">
            ORDER
          </button>
        </form>
        {msg && <h4>Order place Successfully</h4>}
      </div>
    </>
  );
};

export default ContactData;
