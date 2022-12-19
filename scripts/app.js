import Header from './Layout/header.js'
import Router from './Navigation/Router.js'

let currentPage = window.location.pathname

const route = () => {
  currentPage = window.location.pathname
  Router.goto(currentPage)
}

new Header(root)

route();

// Creating the header

document.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    e.preventDefault();
    const href = e.target.getAttribute('href')
    if (href) {
      window.history.pushState('', '', href);
      route();
    }
  } else if (e.target.classList.contains('image-link')) {
    e.preventDefault();
    const href = e.target.parentNode.getAttribute('href')
    if (href) {
      window.history.pushState('', '', href);
      route();
    }
  }
})