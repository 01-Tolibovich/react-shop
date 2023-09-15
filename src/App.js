import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import CartNotification from "./components/CartNotification";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      cartNotification: false,
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Гордеробная",
          img: "garderobnaya-leonor.webp",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Cabinet furniture",
          price: "50.05",
          quantity: 1
        },
        {
          id: 2,
          title: "Прихожая",
          img: "191876105_w640_h640_prihozhie-na-zakaz.webp",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Cabinet furniture",
          price: "50.05",
        },
        {
          id: 3,
          title: "Стул",
          img: "1-12.jpg",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Wooden furniture",
          price: "50.05",
        },
        {
          id: 4,
          title: "Стол",
          img: "90692a04911e2cb9c8cfc9f7cbc41fae.jpeg",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Wooden furniture",
          price: "50.05",
        },
        {
          id: 5,
          title: "Дачное кресло",
          img: "TB2kbYzh3NlpuFjy0FfXXX3CpXa_!!2624870167.jpg",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Wooden furniture",
          price: "50.05",
        },
        {
          id: 6,
          title: "Диван уголок",
          img: "DSC_8130-copy-lewy-male.webp",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Upholstered furniture",
          price: "50.05",
        },
        {
          id: 7,
          title: "Кровать",
          img: "shop_items_catalog_image2110.jpg",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Cabinet furniture",
          price: "50.05",
        },
        {
          id: 8,
          title: "Комод",
          img: "TB2.n7ealfM8KJjSZFOXXXr5XXa_!!1057174674.jpg",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Cabinet furniture",
          price: "50.05",
        },
        {
          id: 9,
          title: "Двухярустный кровать",
          img: "1680032346_na-dache-pro-p-krovat-dvukhyarusnaya-detskaya-derevyannay-47.jpg",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Wooden furniture",
          price: "50.05",
        },
        {
          id: 10,
          title: "Манежка",
          img: "32983.750x0.jpg",
          desc: "Повседневная практика показывает, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями.",
          category: "Wooden furniture",
          price: "50.05",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div>
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          onAdd={this.addToOrder}
        />
        <div className="wrapper">
          <Categories chooseCategory={this.chooseCategory} />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.currentItems}
            onAdd={this.addToOrder}
          />
          {this.state.showFullItem && (
            <ShowFullItem
              item={this.state.fullItem}
              onShowItem={this.onShowItem}
              onAdd={this.addToOrder}
            />
          )}
          {this.state.cartNotification && <CartNotification />}
        </div>
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "All") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {

    // данная переменная предотврощяет дубли товара в карзину
    let isInArrey = false;

    // перебирает массив товаров и проверяет ли id товара с id товара добавленного в карзине если id совпадает то меняет переменную isInArrey false на isInArrey true
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        el.quantity++
        console.log(el.quantity);
        isInArrey = true;
      }
    });

    // Данная условия проверяет если переменная isInArrey = false то в таком случие товар в карзину
    if (!isInArrey) {
      this.setState({ orders: [...this.state.orders, item] });
      console.log(this.state.orders);
      
      // Показывает push уведомление добавленного товара с права в верхнем углу
      this.setState({ cartNotification: true });

      // Скривает push уведомление о добавленном товаре
      setTimeout(() => {
        this.setState({ cartNotification: false });
      }, 3000);
    }
  }
}

export default App;
