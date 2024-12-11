let body = document.querySelector('body');

function singUpBtn() {
    body.classList = 'sing-up-js';
}

function singInBtn(){
    body.classList = 'sing-in-js';
}

/* <i class="fa-regular fa-eye-slash"></i> */
let firstPassword = document.querySelector('.first-password');
let firistEye = document.querySelector('#first-eye');


firistEye.addEventListener('click', ()=>{
    const type = firstPassword.type === 'password' ? 'text' : 'password';
    firstPassword.type = type;

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
})

