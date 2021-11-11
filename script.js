const form = document.getElementById('form')
const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkInput()

})
function checkInput() {
    const firstnameValue = firstname.value
    const lastnameValue = lastname.value
    const emailValue = email.value
    const passwordValue = password.value

    if (firstnameValue === "") {
        showError(firstname, 'First Name cannot be empty')
    } else {
        showSuccess(firstname)
    }
    if (lastnameValue === "") {
        showError(lastname, 'Last Name cannot be empty')
    } else {
        showSuccess(lastname)
    }
    if (emailValue === '') {
        showError(email, 'Email cannot be empty')
    } else if (!isValid(email)) {
        showError(email, 'Looks like this is not an email')
    } else {
        showSuccess(email)
    }
    if (passwordValue === "") {
        showError(password, 'Pasword cannot be empty')
    } else if (passwordValue.length <= 7) {
        showError(password, 'Passord is too short')
    } else {
        showSuccess(password)
    }
}

//  fucntion for error messages
function showError(input, message) {
    const inputGroup = input.parentElement
    const span = inputGroup.querySelector("span")

    span.textContent = message
    inputGroup.className = 'input-group error'

}
function showSuccess(input) {
    const inputGroup = input.parentElement
    inputGroup.className = 'input-group success'

}
function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

