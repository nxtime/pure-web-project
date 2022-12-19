import Element from "../../Hooks/Element.js";
import Cart from "../Cart.js";

export default class Product {
  constructor(product) {
    this.product = product
  }

  buy(quantity) {
    this.quantity -= quantity;
  }

  restock(quantity) {
    this.quantity += quantity;
  }

  render(li) {
    const imageLink = new Element(li.element, 'a', {
      className: "product-title",
      href: `http://localhost:5500/product/${this.product.id}`
    })

    imageLink.append(new Element(imageLink.element, 'img', {
      className: 'product-image image-link',
      src: this.product.image
    }).element)
    li.append(new Element(li.element, 'a',
      {
        className: "product-title",
        href: `http://localhost:5500/product/${this.product.id}`
      }, this.product.name,).element)
    // li.append(new Element(container.element, 'h5', {}, product.quantity,).element)
    const divAction = new Element(li.element, 'div', { className: "product-actions flex-center" })
    divAction.append(new Element(divAction.element, 'h5', {}, this.product.price,).element)
    divAction.append(
      new Element(divAction.element,
        'button',
        {
          className: "btn btn-primary"
        },
        'Comprar',
        {
          type: 'click',
          fn: () => {
            Cart.add(this.product)
          }
        })
        .element)
  }
}