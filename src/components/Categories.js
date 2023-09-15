import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: null,
      categories: [
        {
          key: "All",
          name: "Все",
        },
        {
          key: "Cabinet furniture",
          name: "Корпусной мебель",
        },
        {
          key: "Wooden furniture",
          name: "Деревянная мебель",
        },
        {
          key: "Upholstered furniture",
          name: "Мягкий мебель",
        },
      ],
    };
  }

  handleCategoryClick = (key) => {
    this.setState({ activeCategory: key });
    this.props.chooseCategory(key);
  };

  render() {
    return (
      <section className="category-section">
        <h2 id="category">Категории товаров</h2>
        <div className="categories">
          {this.state.categories.map((el) => (
            <div
              key={el.key}
              onClick={() => this.handleCategoryClick(el.key)}
              className={`category ${el.key === this.state.activeCategory ? "active" : ""}`}
            >
              {el.name}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Categories;