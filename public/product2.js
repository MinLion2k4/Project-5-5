const menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}





let products = localStorage.getItem('products');

if (products) {
  // If products exist in localStorage, parse them and use them
  products = JSON.parse(products);
  renderProducts(products);
} else {
  // If products do not exist in localStorage, fetch them
  fetch('/public/product.json')
    .then(response => response.json())
    .then(data => {
      // Save the fetched products to localStorage for future use
      localStorage.setItem('products', JSON.stringify(data));
      renderProducts(data);
    })
    .catch(error => console.error('Error:', error));
}

function renderProducts(products) {
  const productList = document.getElementById('product-list');
  const html = products.map(product => {
    return `
      <div class="col">
        <div class="card">
          <img src="${product.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.Name}</h5>
            <p class="card-text">Miễn phí giao hàng</p>
            <div class="d-flex justify-content-around mb-3">
              <h3>${parseInt(product.Price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}/con</h3>
              <button class="btn btn-primary" data-product-name="${product.Name}" data-product-id="${product.id}" data-product-image="${product.img}" data-product-price="${product.Price}" onclick="addToCart(event)">Mua Ngay</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  productList.innerHTML = html;
}