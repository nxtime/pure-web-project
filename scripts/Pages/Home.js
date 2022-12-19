import Element from "../Hooks/Element.js";
import App from "../Layout/index.js";
import Product from '../Components/Products/Item.js'
import Products from "../Stores/ProductsStore.js";

class HomePageClass {
  constructor() { }
  render() {
    const homePage = App.page(new Element(App.root, 'div', { id: 'page', className: "flex-center" }).element)

    const bannerSection = new Element(homePage, 'div', { className: 'flex-center h-auto home-page' }).element

    const card = new Element(bannerSection, 'div', { className: 'card flex-center' }).element
    this.cardItems(card)

    const productsSection = new Element(homePage, 'div', { className: 'card h-screen products-section' }).element

    new Element(productsSection, 'h2', {}, 'Produtos populares')
    const productContainer = new Element(productsSection, 'ul', { className: 'products-container' })
    this.productsItems(productContainer);

  }

  cardItems(card) {
    new Element(
      card,
      'h2',
      {},
      'Estou na home page',
    )

    new Element(
      card,
      'button',
      {
        type: 'button',
        className: 'btn btn-primary transition-colors'
      },
      'Outro teste',
    )
  }

  productsItems(container) {
    let index = 0
    for (const product of Products.list()) {
      if (index === 10) break;
      const productItem = new Product(product)
      const li = new Element(container.element, 'li', { className: 'product-item flex-center' })
      productItem.render(li)
      index++
    }
  }
}

const HomePage = new HomePageClass();

export default HomePage;