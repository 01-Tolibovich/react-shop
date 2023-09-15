import React, { Component } from "react";
import { FaXmark } from "react-icons/fa6";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item item">
        <div className="full-item-block">
          <FaXmark
            className="close-modal"
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <figure className="img-overflov">
            <img
              src={`./img/${this.props.item.img}`}
              onClick={() => this.props.onShowItem(this.props.item)}
            />
          </figure>
          <div>
            <h2>{this.props.item.title}</h2>
          </div>
          <div>
            <p>{this.props.item.desc}</p>
          </div>
          <div className="prise-block">
            <b>{this.props.item.price} TJS</b>
            <div
              onClick={() => this.props.onAdd(this.props.item)}
              className="add-to-cart"
            >
              +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
