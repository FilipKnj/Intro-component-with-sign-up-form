const form = document.querySelector('form');
const inputDivs = document.querySelectorAll('.input-div');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const btn = document.querySelector('button');

btn.addEventListener('click',submitForm);

function submitForm(e) {

    let errors = [];

    if(firstNameInput.value.length == 0 || firstNameInput.value.length == null){
        errors.push(`First Name cannot be empty`);
        inputDivs[0].classList.add('error');
    }
    if(lastNameInput.value.length == 0 || lastNameInput.value.length == null){
        errors.push(`Last Name cannot be empty`);
        inputDivs[1].classList.add('error');
    }
    if(emailInput.value.length == 0 || emailInput.value.length == null){
        errors.push(`Looks like this is not valid email`);
        inputDivs[2].classList.add('error');
    }
    if(passwordInput.value.length == 0 || passwordInput.value.length == null){
        errors.push(`Password cannot be empty`);
        inputDivs[3].classList.add('error');
        console.log(passwordInput.value);
    }

    if(errors.length != 0){
        e.preventDefault();
    }else{
        form.submit();
    }
}