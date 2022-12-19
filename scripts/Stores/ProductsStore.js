class ProductsStoreClass {
  constructor() {
    this.products = []

    for (let i = 0; i < 28; i++) {
      this.products.push({
        id: i,
        name: `Product ${i}`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
        quantity: Math.floor(Math.random() * 100),
        price: (Math.floor((Math.random() * 40 * 1000)) / 100).toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }),
        image: `https://picsum.photos/id/${i}/400/400`,
        category: Math.round(Math.random() * 100),
        rating: Math.round(Math.random() * 10),
        review: Math.round(Math.random() * 100)
      })
    }
  }
  // Create a method to remove a certain quantity from a product
  remove(product, quantity) {
    const productIndex = this.products.findIndex(productItem => productItem.id === product.id)
    this.products[productIndex].quantity -= quantity
  }

  // Create a method to add a certain quantity to a product
  add(product, quantity) {
    const productIndex = this.products.findIndex(productItem => productItem.id === product.id)
    this.products[productIndex].quantity += quantity
  }

  // Create a method to find a product by id
  find(id) {
    return this.products.find(product => product.id.toString() === id)
  }

  // Create a method to list all the products
  list() {
    return this.products
  }

  // Create a method to list all the products by category
  listByCategory(category) {
    return this.products.filter(product => product.category === category)
  }
}

const Products = new ProductsStoreClass()

export default Products