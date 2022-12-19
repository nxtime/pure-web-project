import Element from '../Hooks/Element.js'
import { navlinksData } from '../Data/navlinks.js'
import Cart from '../Components/Cart.js'

const siteRoot = 'http://localhost:5500'

export default class Header {
  constructor(parent = document.body) {
    this.parent = parent
    this.init()
  }

  init() {
    this.headerDiv = new Element(this.parent, 'div', { className: 'header-div' })
    this.header = new Element(this.headerDiv.element, 'header', { className: 'header' })
    this.logo = new Element(this.header.element, 'a', { className: 'logo', href: `${siteRoot}` })
    this.logo.append(new Element(this.logo.element, 'img',
      {
        src: 'https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png',
        className: 'image-link',
        alt: 'Logo'
      }).element)

    Cart.render(this.header)

    this.navlinks = new Element(this.header.element, 'ul', { className: 'navlinks' })

    navlinksData.map((link) => {
      const li = new Element(this.navlinks.element, 'li', { className: 'nav-item' })
      li.append(new Element(this.navlinks.element, 'a', link.link, link.text).element)
    })
  }

}
