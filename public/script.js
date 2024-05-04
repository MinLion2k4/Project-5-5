const menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
/*----------------- Trandition form -----------------*/
const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});
/*----------------- Kiem tra form dang ki -----------------*/
function checkPasswordMatch() {
    var password = document.getElementById('psw').value;
    var confirmPassword = document.getElementById('re-psw').value;
    var icon = document.querySelector('#rps span.icon ion-icon');

    if (password == confirmPassword) {
        icon.setAttribute('name', 'checkmark');
    } else {
        icon.setAttribute('name', 'close');
    }
}
window.onload = function() {
  let user_records = JSON.parse(localStorage.getItem("users")) || [];
  if (!user_records.some((v) => v.admin == true)) {
    user_records.push({
      "name": "Admin",
      "mail": "admin@example.com",
      "psw": "admin",
      "admin": true
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}

function saveData() {
  let name = document.getElementById('user').value;
  let mail = document.getElementById('mail').value;
  let psw = document.getElementById('psw').value;
  let checkbox = document.getElementById('checkbox');
  if (name == "" || mail == "" || psw == "") {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }
  if (!checkbox.checked) {
    alert("Vui lòng chấp thuận điều khoản sử dụng");
    return;
  }
  let user_records = JSON.parse(localStorage.getItem("users")) || [];
  if (user_records.some((v) => v.mail == mail)) {
    alert("Email đã tồn tại");
  } else {
    alert("Đăng kí thành công");
    user_records.push({
      "name": name,
      "mail": mail,
      "psw": psw,
      "admin": false
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}
// function checkAdmin() {
//   let user_records = JSON.parse(localStorage.getItem("users")) || [];
//   let mail = document.getElementById('lmail').value;
//   let psw = document.getElementById('lpsw').value;
//   let user = user_records.find((v) => v.mail == mail && v.psw == psw);
//   if (user && user.admin) {
//     let nav = document.getElementById('navbar'); // replace with your navbar id
//     let adminLink = document.createElement('a');
//     adminLink.href = '#'; // replace with your admin page link
//     adminLink.textContent = 'Quản Lý';
//     nav.appendChild(adminLink);
//   }
// }

/*----------------- Kiem tra form dang nhap -----------------*/