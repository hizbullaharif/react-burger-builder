import React from "react";

const Burger = ({ isIngrediendsAdded, ingredients }) => {
  return (
    <>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {isIngrediendsAdded && <p>No Ingredients Added</p>}
        {/* Lettuce */}
        {Array(ingredients.lettuce)
          .fill(null)
          .map((value, index) => (
            <div key={index} className="Lettuce"></div>
          ))}
        {/* Bacon */}
        {Array(ingredients.bacon)
          .fill(null)
          .map((value, index) => (
            <div key={index} className="Bacon"></div>
          ))}
        {/* Cheese */}
        {Array(ingredients.cheese)
          .fill(null)
          .map((value, index) => (
            <div key={index} className="Cheese"></div>
          ))}
        {/* Meat */}
        {Array(ingredients.meat)
          .fill(null)
          .map((value, index) => (
            <div key={index} className="Meat"></div>
          ))}

        <div className="BurgerIngredient__BreadBottom__2z9NQ"></div>
      </div>
    </>
  );
};

export default Burger;
