import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <figure className='img-overflov'><img src={`./img/${this.props.item.img}`} onClick={() => this.props.onShowItem(this.props.item)}/></figure>
        <div><h2>{this.props.item.title}</h2></div>
        <div><p>{this.props.item.desc}</p></div>
        <div className='prise-block'><b>{this.props.item.price} TJS</b><div onClick={() => this.props.onAdd(this.props.item)} className='add-to-cart'>+</div></div>
      </div>
    )
  }
}

export default Item