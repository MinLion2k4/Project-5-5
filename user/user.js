const cart = [];

function addToCart(event) {
  const productId = event.target.dataset.productId;
  const productName = event.target.dataset.productName;
  const productImage = event.target.dataset.productImage;
  const productPrice = event.target.dataset.productPrice;
  const quantity = 1;

  const product = {
    id: productId,
    name: productName,
    image: productImage,
    price: productPrice,
    quantity: quantity,
  };

  cart.push(product);
  updateCartTable();
}
function deleteProduct(index) {
    cart.splice(index, 1);
    updateCartTable();
}
function updateCartTable() {
    const cartTableBody = document.getElementById('cart-table-body');
    cartTableBody.innerHTML = '';
  
    cart.forEach((product, index) => {
       const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td><img src="${product.image}" width="50" height="50" alt="${product.name}"></td>
    <td>${product.name}</td>
    <td>${product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
    <td><input type="number" value="${product.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
    <td>${(product.price * product.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
    <td><button class="fa fa-trash" onclick="deleteProduct(${index})"></button></td>
  `;
  cartTableBody.appendChild(tableRow);
    });

    displayTotal();
  }
  
  function updateQuantity(index, quantity) {
    cart[index].quantity = quantity;
    updateCartTable();
  }

  function calculateTotal() {
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    return total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  function displayTotal() {
  const totalPriceElement = document.getElementById('total-price');
  const total = calculateTotal();
  totalPriceElement.textContent = total;
}






