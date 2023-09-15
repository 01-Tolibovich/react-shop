import React, { useState } from "react";
import { FaCartShopping, FaCirclePlus } from "react-icons/fa6";
import Order from "./Order";
import HeadSlider from "./HeadSlider";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Сумма: {new Intl.NumberFormat().format(summa)} TJS
      </p>
    </>
  );
};

const numberInCartIcan = (props) => {
  let quanProdIcon = 0;
  props.orders.forEach((el) => quanProdIcon++);
  return <>{quanProdIcon}</>;
};

const showNothing = () => {
  return <p className="cart-empty">Ваша корзина пуста</p>;
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  let [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className={`logo-and-nav ${openMenu && "open"}`}>
        <span className="logo">Tajik furniture</span>
        <ul
          className={`nav ${openMenu && "open"}`}
          onClick={() => setCartOpen((cartOpen = false))}
        >
          <li><a href="#category">Категории</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Кабинет</a></li>
        </ul>
        <div className="cart-icon" id="cart">
          <div>
            <div className="cart-count">{numberInCartIcan(props)}</div>
            <FaCartShopping
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-cart-button ${cartOpen && "active"}`}
            />
          </div>
          <FaCirclePlus className={`burger-btn ${openMenu && 'open'}`} onClick={() => setOpenMenu((openMenu = !openMenu))} />
        </div>

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div onClick={() => setCartOpen((cartOpen = false))}>
        <HeadSlider />
      </div>
    </header>
  );
}
