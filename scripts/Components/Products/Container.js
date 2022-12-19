import Products from "../../Stores/ProductsStore";
import Product from "./Item";

export default class ProductsContainer {
  constructor(options) {
    this.container = options.container;
  }

  render() {
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

export const ProductsGrid = new ProductsContainer();