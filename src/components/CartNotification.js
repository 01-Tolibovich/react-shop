import React, { Component } from "react";
import { FaAnglesUp } from "react-icons/fa6";

export class CartNotification extends Component {
  render() {
    return (
      <div className="cart-notification">
        <a href="#cart">Товар добавлен в корзину</a>
        <FaAnglesUp />
      </div>
    );
  }
}

export default CartNotification;
