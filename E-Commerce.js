// Add to Cart Functionality
const cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    console.log(cart);
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
    }
    console.log(cart);
}

// Example Usage
const product = { id: 1, name: 'Laptop', price: 1000 };
addToCart(product);
addToCart(product);
removeFromCart(1);
