let body = document.querySelector('body');

function singUpBtn() {
    body.classList = 'sing-up-js';
}

function singInBtn(){
    body.classList = 'sing-in-js';
}

/* <i class="fa-regular fa-eye-slash"></i> */
let firstPassword = document.querySelector('#first-column-password');
let firistEye = document.querySelector('#first-column-eye');


firistEye.addEventListener('click',(event)=>{
    const firstColumnPasswodrType = firstPassword.type === 'password' ? 'text' : 'password';
    firstPassword.type = firstColumnPasswodrType;

    event.target.classList.toggle("fa-eye");
    event.target.classList.toggle("fa-eye-slash");
});



let secondPassword = document.querySelector('#second-column-password');
let secondEye = document.querySelector('#second-column-eye');

secondEye.addEventListener('click', function(){
    const secondColumnPasswodrType = secondPassword.type === 'password' ? 'text' : 'password';
    secondPassword.type = secondColumnPasswodrType;

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
})