import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const Order = () => {
  const [orderData, getOrderData] = useState(1);
  const [cookie, getCookie] = useCookies("userid");

  var data = [];
  function print(params) {
    // return <h1>{params}</h1>;
    console.log("params");
  }

  // orderData.foreach((item) => {
  //   <div className="Order">
  //     <p>
  //       Ingredients: <span>Bacon {item.bacon}</span>
  //       <span>Cheese {item.cheese}</span>{" "}
  //       <span> Lettuce {item.lettuce}</span>
  //       <span>Meat {item.meat}</span>
  //     </p>
  //     <p>
  //       Price <strong>USD {item.totalPrice}</strong>
  //     </p>
  //   </div>;
  // })
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3001/orders/${cookie.userid}`,
    }).then((res) => {
      getOrderData(res.data);
    });
  }, []);

  return (
    <>
      {orderData === 1 ? (
        <h1>Order is not available</h1>
      ) : (
        orderData.map((item, key) => (
          <div key={key} className="Order">
            <p>
              Ingredients: <span>Bacon {item.bacon}</span>
              <span>Cheese {item.cheese}</span>{" "}
              <span> Lettuce {item.lettuce}</span>
              <span>Meat {item.meat}</span>
            </p>
            <p>
              Price <strong>USD {item.totalPrice}$</strong>
            </p>
          </div>
        ))
      )}
    </>
  );
};

export default Order;
