const siteRoot = 'http://localhost:5500'

export const navlinksData = [
  {
    link: {
      href: `${siteRoot}/products`,
    },
    text: 'Produtos',
    onclick: "route()"
  },
  {
    link: {
      href: `${siteRoot}/categories`,
    },
    text: 'Categorias',
    onclick: "route()"
  }
]