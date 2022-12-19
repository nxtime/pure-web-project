export default class Element {
  constructor(root, el = 'div', options, child, events = undefined) {
    this.el = el;
    this.root = root;
    this.options = options;
    this.innerHTML = child;

    if (events) {
      this.events = events;
    }

    this.init()
  }

  init() {
    this.element = this.root.appendChild(document.createElement(this.el));

    if (Object.entries(this.options).length > 0) {
      for (const [key] of Object.entries(this.options)) {
        this.element[key] = this.options[key];
      }
    }

    if (this.innerHTML) {
      this.element.innerHTML += this.innerHTML;
    }

    if (this.events) {
      this.element.addEventListener(this.events.type, () => this.events.fn());
    }
  }

  change(child) {
    if (typeof child !== 'string') {
      this.element.innerHTML = child.innerHTML;
      return
    }


    this.element.innerHTML = child;
  }

  append(child) {
    this.element.appendChild(child);
  }
}