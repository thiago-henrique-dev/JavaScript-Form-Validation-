const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show error function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small')
    small.innerText = message;
}
//show success
function showSucess(input) {
    formControl = input.parentElement;
    formControl.className = "form-control success"

}

function isValidEmail(email) {
    var re = /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


//Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSucess(username)
    }
    if (email.value === '') {
        showError(email, 'Email is required')

    } else if (isValidEmail(email.value)){
        showError(email, 'Email is not valid')

    } else {
        showSucess(email)
    }
    
    if (password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSucess(password)
    }
    if (password2.value === '') {
        showError(password2, 'Confirm passowrd is required')
    } else {
        showSucess(password2)
    }

})


