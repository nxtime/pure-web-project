import Element from "../Hooks/Element.js";
import App from "../Layout/index.js";

class CartPageClass {
  constructor() { }
  render() {
    const cartPage = App.page(new Element(App.root, 'div', { id: 'page' }, 'Olá, estou no carrinho').element)

  }
}

const CartPage = new CartPageClass();

export default CartPage;