import Cart from "../Components/Cart.js";
import Popup from "../Components/Modal/Popup.js";
import Element from "../Hooks/Element.js";
import App from "../Layout/index.js";
import Products from "../Stores/ProductsStore.js";

class ProductPageClass {
  constructor() { }


  render(productId) {
    console.log(productId)
    const product = Products.find(productId)

    console.log(product)

    const productPage = App.page(new Element(App.root, 'div', { id: 'page', className: 'product-page' }).element)

    const productContainer = new Element(productPage, 'div', { className: 'product-container' })

    this.productImageContainer = new Element(productContainer.element, 'div', { className: 'product-image-container' })
    this.hoverCircle = new Element(this.productImageContainer.element, 'div', { className: 'hover-circle' }, null, {
      type: 'click',
      fn: () => {
        Popup.render()
      }
    })

    this.productImage = new Element(this.productImageContainer.element, 'img', {
      src: product.image,
      className: 'product-image',
      'data-image': product.image
    },
      null,
      {
        type: 'mouseover',
        fn: () => {
          console.log("I'm hovering the image")
          this.productImageContainer.element.addEventListener('mousemove', (e) => {
            // make the hover circle follow the cursor
            this.hoverCircle.element.style.left = e.clientX - 64 + 'px'
            this.hoverCircle.element.style.top = e.clientY - 108 + 'px'

          })
        }
      }
    )

    const productInfo = new Element(productContainer.element, 'div', { className: 'product-info' })
    new Element(productInfo.element, 'div', { className: 'product-category' }, product.category)
    new Element(productInfo.element, 'h2', { className: 'product-name' }, product.name)
    new Element(productInfo.element, 'p', { className: 'product-description' }, product.description)

    const productActions = new Element(productInfo.element, 'div', { className: 'flex-center product-actions' })
    new Element(productActions.element, 'h3', { className: 'product-price' }, product.price)
    new Element(productActions.element, 'h3', { className: 'product-quantity' }, product.quantity)
    new Element(productActions.element, 'button', { className: 'btn btn-primary transition-colors' }, 'Adicionar', {
      type: 'click',
      fn: () => {
        Cart.add(product)
      }
    })

  }
}

const ProductPage = new ProductPageClass();

export default ProductPage;
