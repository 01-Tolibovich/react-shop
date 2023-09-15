import React, { Component } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

export class Order extends Component {
  render() {
    return (
      <div className="order-item">
        <img src={`./img/${this.props.item.img}`} />
        <div>
          <h2>{this.props.item.title}</h2>
          <b>{this.props.item.price} TJS</b>
        </div>
        <FaDeleteLeft onClick={() => this.props.onDelete(this.props.item.id)} className="delete-from-order"/>
      </div>
    );
  }
}

export default Order;
