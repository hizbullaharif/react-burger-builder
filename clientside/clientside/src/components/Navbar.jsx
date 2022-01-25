import React, { useState, useEffect } from "react";
import logo from "../resources/images/burger-logo.b8503d26.png";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const Navbar = () => {
  const [cookie, setCookies, removeCookie] = useCookies(["token", "userid"]);
  const [userAvail, setUserAvail] = useState(false);

  useEffect(() => {
    if (cookie.token == null && cookie.userid == null) {
      setUserAvail(false);
    } else {
      setUserAvail(true);
    }
  }, [userAvail, cookie]);

  const handleLogout = () => {
    removeCookie("userid");
    removeCookie("token");
    setUserAvail(false);
  };
  return (
    <header className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Burger Builder</Link>
          </li>
          {userAvail ? (
            <>
              <li>
                <Link to="/order">Order</Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleLogout()}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
