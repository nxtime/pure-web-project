import Product from "../Components/Products/Item.js";
import Element from "../Hooks/Element.js";
import App from "../Layout/index.js";
import Products from "../Stores/ProductsStore.js";

class ProductsPageClass {
  constructor() { }
  render() {

    const productsPage = App.page(new Element(App.root, 'div', { id: 'page', className: "default-page" }, 'Olá, estou na página de produtos').element)

    const productsSection = new Element(productsPage, 'div', { className: 'card h-screen products-section' }).element

    const productContainer = new Element(productsSection, 'ul', { className: 'products-container' })
    this.productsItems(productContainer);
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

const ProductsPage = new ProductsPageClass();

export default ProductsPage;