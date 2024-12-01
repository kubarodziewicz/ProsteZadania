const products = [
    {name: 'milk', price: 5, category: 'dairy'},
    {name: 'butter', price: 7, category: 'dairy'},
    {name: 'cheese', price: 6, category: 'dairy'},
    {name: 'bananas', price: 9, category: 'fruits and veggies'},
    {name: 'apples', price: 43, category: 'fruits and veggies'},
    {name: 'blueberries', price: 4, category: 'fruits and veggies'},
    {name: 'candies', price: 3, category: 'snacks'},
    {name: 'chips', price: 6, category: 'snacks'},
    {name: 'dog', price: 74, category: 'snacks'},
]

function categoryFilter(userCategory) {
    const matchingProducts = products.filter((product) => product.category == userCategory)
    return matchingProducts.forEach(product => console.log(`name: ${product.name}, price: ${product.price}, category: ${product.category}`))
}

function priceFilter(userMinPrice, userMaxPrice) {
    const matchingProducts = products.filter((product) => (product.price >= userMinPrice && product.price <= userMaxPrice) || (product.price <= userMinPrice && product.price >= userMaxPrice))
    return matchingProducts.forEach(product => console.log(`name: ${product.name}, price: ${product.price}, category: ${product.category}`))
}

categoryFilter('dairy')
console.log("\n")
priceFilter(5,4)