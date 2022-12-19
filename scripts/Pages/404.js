import Element from "../Hooks/Element.js";
import App from "../Layout/index.js";
import Router from "../Navigation/Router.js";

class NotFoundClass {
  constructor() { }
  render() {
    const notFoundPage = App.page(new Element(
      App.root,
      'div',
      {
        id: 'page',
        className: 'flex-center h-auto'
      },
      'Página não encontrada')
      .element)

    notFoundPage.appendChild(new Element(
      notFoundPage,
      'a',
      {
        className: 'btn btn-primary transition-colors',
        href: 'http://localhost:5500/'
      },
      'Voltar ao início',
      {
        type: 'click',
        fn() {
          Router.goto('/')
          window.history.pushState('', '', '/')
        }
      }).element
    )
  }
}

const NotFoundPage = new NotFoundClass();

export default NotFoundPage;