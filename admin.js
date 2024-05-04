const products = JSON.parse(localStorage.getItem('products')) || [];

const renderAdminProductList = () => {
  const productListHTML = products.map((product) => {
    return `
    <tr>
    <th scope="row">${product.id}</th>
    <td><img src="${product.img}" class="img-fluid" alt="..."></td>
    <td><p>${product.Name}</p></td>
    <td><p>${parseInt(product.Price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}/con</p></td>
    <td><button class="btn btn-danger" data-id="${product.id}">Xóa</button></td>
    </tr>
    `;
  }).join('');
  document.getElementById('productList').innerHTML = productListHTML;
};

renderAdminProductList();

document.getElementById('productList').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-danger')) {
    const id = e.target.getAttribute('data-id');
    const newProducts = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(newProducts));
    renderAdminProductList();
    window.location.reload();
  }
});

// Show the modal when the "Add Product" button is clicked
document.getElementById('addProduct').addEventListener('click', () => {
  document.getElementById('addProductModal').style.display = 'block';
});
window.onclick = function(event){
  if(event.target == document.getElementById('addProductModal')){
    document.getElementById('addProductModal').style.display = 'none';
  }
}

// Add a new product when the form is submitted
document.getElementById('addProductForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const newProduct = {
    id: (products.length + 1).toString(),
    Name: document.getElementById('productName').value,
    img: document.getElementById('productImg').value,
    Price: document.getElementById('productPrice').value,
  };
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  renderAdminProductList();
  document.getElementById('addProductModal').style.display = 'none';
  window.location.reload();
});