import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Auth = () => {
  const [btnShow, setbtnShow] = useState(true);
  const [state, setState] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState();
  const [user, setUser] = useState(false);
  const [cookie, setCookies] = useCookies(["token", "userid"]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setState((values) => ({ ...values, [name]: value }));
  }

  const postData = async () => {
    const { email, password } = state;
    const res = await axios({
      method: "post",
      url: "http://localhost:3000/signup",
      data: {
        email: email,
        password: password,
      },
    });

    if (res.data.status == 422) {
      setMsg(res.data.message);
    } else {
      setMsg("Registration successful");
      console.log("Registration successful");
    }
  };

  // Login
  const login = async () => {
    const { email, password } = state;
    let res = 0;
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://[::1]:3000/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      res = await axios(config);
    } catch (err) {
      console.log(err);
    }

    if (res.status === 200) {
      setMsg("login Success");
      setTimeout(() => {
        console.log("Timeout");
        setCookies("token", res.data.token);
        setCookies("userid", res.data.id);
        setUser(true);
      }, 2000);
    } else {
      setMsg("Invalid Email or Password");
    }
  };
  // login End
  const handleSubmit = (e) => {
    e.preventDefault();
    if (btnShow) {
      postData();
    } else {
      login();
    }
  };
  return (
    <div>
      <div className="Auth">
        <p style={{ fontStyle: "italic", color: "red" }}>{msg ? msg : null}</p>
        {user && <Navigate to="/" />}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="Input">
            <label className="Label"></label>
            <input
              name="email"
              type="email"
              className="InputElement"
              placeholder="E-mail Address"
              onChange={(e) => {
                handleChange(e);
              }}
              value={state.email}
            />
          </div>
          <div className="Input">
            <label className="Label"></label>
            <input
              name="password"
              type="password"
              className="InputElement"
              placeholder="Password"
              onChange={(e) => {
                handleChange(e);
              }}
              value={state.password}
            />
          </div>
          <button className="Button Success">SUBMIT</button>
        </form>
        {btnShow ? (
          <button
            className="Button Danger"
            onClick={() => {
              setbtnShow(false);
            }}
          >
            SIGNIN
          </button>
        ) : (
          <button
            className="Button Danger"
            onClick={() => {
              setbtnShow(true);
            }}
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
