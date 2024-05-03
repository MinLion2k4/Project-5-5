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
function saveData(){
    let user = document.getElementById('user').value;
    let mail = document.getElementById('mail').value;
    let psw = document.getElementById('psw').value;
    let checkbox = document.getElementById('checkbox');
    if(user==""||mail==""||psw==""){
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if(!checkbox.checked){
      alert("Vui lòng chấp thuận điều khoản sử dụng");
      return;
    }
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_records.some((v)=>{
      return v.mail==mail;
    })){
      alert("Email đã tồn tại");
    }
    else{
      alert("Đăng kí thành công");
      user_records.push({
        "user":user,
        "mail":mail,
        "psw":psw
      })
      localStorage.setItem("users",JSON.stringify(user_records));
    }
}

/*----------------- Kiem tra form dang nhap -----------------*/