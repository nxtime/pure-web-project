import Home from "../Pages/Home.js";
import CartPage from "../Pages/Cart.js";
import ProductsPage from "../Pages/Products.js";
import NotFoundPage from "../Pages/404.js";
import ProductPage from "../Pages/Product.js";

class RouterClass {
  constructor() {
    this.page = '/';
  }

  goto(page = '/') {
    this.page = page;
    document.querySelector('body').classList.add('transition');
    setTimeout(() => {
      document.querySelector('body').classList.remove('transition');
    }, 5000)
    this.render();
  }

  render() {

    if (this.page.toString().includes('/product/')) {
      ProductPage.render(this.page.split('/')[2])
      return
    }

    switch (this.page) {
      case '/':
        Home.render()
        break;
      case '/cart':
        CartPage.render()
        break;
      case '/products':
        ProductsPage.render()
        break;
      default:
        NotFoundPage.render();
    }
  }

}

const Router = new RouterClass();

export default Router