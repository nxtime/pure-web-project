import Element from "../Hooks/Element.js";

class CartClass {
  constructor() {
    this.products = []
    this.menu = false;
  }

  add(product) {
    this.products.push(product)
    this.menuContainerRenderer('adding', product.id)
    this.cart.change('Carrinho (' + this.products.length + ')')
  }

  remove(product) {
    const index = this.products.indexOf(product)
    if (index > -1) {
      this.products.splice(index, 1)
    }
    this.menuContainerRenderer('removing', product.id)
    this.cart.change('Carrinho (' + this.products.length + ')')
  }

  menuContainerRenderer(type = 'adding', id) {
    if (this.products.length === 0) {
      this.menuContainer.element.innerHTML = '<li class="cart-menu-item" >Carrinho Vazio</li>'
      return
    } else if (this.products.length === 1) {
      this.menuContainer.element.innerHTML = ''
    }

    if (type === 'removing') {
      this.menuContainer.element.innerHTML = ''
    }

    this.products.forEach((product, index) => {

      if (type === 'adding' && product.id !== id || index > 2) {
        return
      }
      const li = new Element(
        this.menuContainer.element,
        'li',
        {
          className: 'flex-center cart-menu-item '
        },
      )
      li.append(new Element(li.element, 'img', { src: product.image }).element)
      li.append(new Element(li.element, 'h5', {}, product.name,).element)
      // li.append(new Element(container.element, 'h5', {}, product.quantity,).element)
      const divAction = new Element(li.element, 'div', { className: "cart-actions flex-center" })
      divAction.append(new Element(divAction.element, 'h5', {}, product.price,).element)
      divAction.append(new Element(divAction.element, 'button', { className: "btn btn-error transition-colors" }, 'Remover', {
        type: 'click',
        fn: () => {
          this.remove(product)
        }
      }).element)
    })

    // Render 

    if (this.moreItems && type === 'adding') {
      this.moreItems.element.innerHTML = `Mais ${this.products.length - 3} itens...`
      return
    }

    if (this.products.length > 3) {
      this.moreItems = new Element(this.menuContainer.element, 'li', { className: 'cart-menu-item info' }, `Mais ${this.products.length - 3} itens...`)
    }
  }

  render(container) {
    const cartContainer = new Element(container.element, 'div', { className: "cart-container" })

    this.menuContainer = new Element(cartContainer.element, 'ul', { className: `cart-menu hidden` })

    this.cart = new Element(
      cartContainer.element,
      'button',
      {
        className: "btn btn-primary-dark transition-colors",
      },
      `Carrinho (${this.products.length})`,
      {
        type: 'click',
        fn: () => {
          if (this.menuContainer.element.classList.contains('hidden')) {
            this.menuContainer.element.classList.remove('hidden')
            this.menuContainerRenderer('adding')
          } else {
            this.menuContainer.element.classList.add('hidden')
            this.menuContainerRenderer('adding')
          }
        }
      }
    )
  }
}

const Cart = new CartClass()

export default Cart;