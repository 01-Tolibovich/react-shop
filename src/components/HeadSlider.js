import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class HeadSlider extends Component {
  render() {
    const settings = {
      dots: true,
      Infinity: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
    };
    return (
      <div className="head-slides">
        <Slider {...settings}>
          <div>
            <img src="./img/head-slides/1-22.jpg" alt="slide image" />
          </div>
          <div>
            <img src="./img/head-slides/1617013791_33-p-stilnaya-dizainerskaya-mebel-33.jpg" alt="slide image" />
          </div>
          <div>
            <img src="./img/head-slides/screen-5.jpg" alt="slide image" />
          </div>
          <div>
            <img src="./img/head-slides/MODERN-OFFICE-FURNIT.jpg" alt="slide image" />
          </div>
          <div>
            <img src="./img/head-slides/Belosnezhnyj-garnitu.jpg" alt="slide image" />
          </div>
          <div>
            <img src="./img/head-slides/1670002512_71-bigfoto-name-p-promishlennii-dizain-mebeli-75.jpg" alt="slide image" />
          </div>
        </Slider>
      </div>
    );
  }
}
