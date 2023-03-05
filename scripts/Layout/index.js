class AppClass {
  constructor() {
    this.currentPage = null;
    const animation = document.body.appendChild(document.createElement('div'));
    animation.appendChild(document.createElement('div'));
    animation.id = 'animation';
    this.root = document.body.appendChild(document.createElement('div'));
    this.root.id = 'root';
    this.init();
  }

  page(page) {
    if (this.currentPage !== null && this.currentPage !== page) {
      this.root.removeChild(this.currentPage);
    } else if (this.currentPage !== null && this.currentPage.id === page.id) return page;

    this.currentPage = this.root.appendChild(page);

    return this.currentPage;
  }

  getCursorPosition(e) {
    return { x: e.clientX, y: e.clientY };
  }

  init() {
    console.log('Server has started!')

    document.addEventListener('mousemove', (e) => this.getCursorPosition(e))
  }
}

const App = new AppClass()
export default App;