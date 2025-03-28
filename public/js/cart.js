function addToCart(sku) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(sku);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to cart!');
}
