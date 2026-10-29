const cartMessage = document.getElementById('cartMessage');
let cartCount = 0;

document.querySelectorAll('.btn-cart').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartMessage.textContent = `Added to cart! Items in cart: ${cartCount}`;

    const originalText = 'Add to Cart';
    button.textContent = 'Added ✓';

    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1100);
  });
});
