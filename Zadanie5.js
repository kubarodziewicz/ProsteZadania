class Cart {
    constructor() {
        this.products = [
            { name: 'jablka', price: 10, quantity: 2 },
            { name: 'maslo', price: 7, quantity: 1 },
            { name: 'mleko', price: 5, quantity: 3 }
        ]
    }

    addProduct(name, price, quantity) {
        this.products.push({ name, price, quantity })
    }

    removeProduct(name) {
        this.products = this.products.filter(product => product.name != name)
    }
}

const cart = new Cart()
cart.addProduct("jajka", 4, 25)
cart.removeProduct("maslo")
console.log(cart.products)