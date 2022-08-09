import React from "react";
import { Plus, Minus, Trash } from "../../assets/icons/icons";
import "./Cart.css";

export const Cart = ({
  carItems,
  handleRemoveProduct,
  handleAddProduct,
  handleCartClean,
}) => {
  const totalPrice = carItems.reduce(
    (id, item) => id + item.quantity * item.id,
    0
  );

  return (
    <>
      <div className="cartItems">
        <div className="cartListGlass">
          <h1 className="cartItemsHeader">Cart Items</h1>

          <div className="clearCart">
            {carItems.length >= 1 && (
              <button className="clearCartButton" onClick={handleCartClean}>
                <Trash />
              </button>
            )}
          </div>

          {carItems.length === 0 && (
            <h1 className="cartItemsEmpty"> No items add</h1>
          )}
          <div>
            {carItems.map((item) => (
              <div key={item.id} className="cartItemsList">
                <img src={`/img/${item.name}.png`} className="cartItemsImg" />
                <h2 className="cartItemsName">{item.name}</h2>

                <div className="cartFunction">
                  <button
                    className="cartItemPlus"
                    onClick={() => handleAddProduct(item)}
                  >
                    <Plus />
                  </button>
                  <button
                    className="cartItemMinus"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    <Minus />
                  </button>
                </div>
                <div className="cartItemPrice">
                  <span>
                    {item.quantity}/Kg x ${item.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="cartItemTotalPrice">
            <span>Total: </span>
            <span>$ {totalPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};
