import App from "../../Layout/index.js";

class PopupClass {
  constructor() {
    // this.popupContent = document.querySelector('.popup__content');
    // this.popupClose = document.querySelector('.popup__close');
    // this.popupClose.addEventListener('click', this.close.bind(this));
  }

  render(content) {
    this.popup = new Element(App.root, 'div', { class: 'popup' }, content);
    this.popupContainter = new Element(this.popup.element, 'div', { class: 'popup' });

    this.popupClose = new Element(this.popupContainter.element, 'div', { class: 'popup__close' }, 'X');
    this.popupContainter.append(content.element);
  }

  open() {
    this.popup.classList.add('popup--open');
  }

  close() {
    this.popup.classList.remove('popup--open');
  }
}

const Popup = new PopupClass();
export default Popup;