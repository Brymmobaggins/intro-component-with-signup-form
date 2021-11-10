const form = document.getElementById("form")
const firstname = document.getElementById("fName")
const lastname = document.getElementById("lName")
const email = document.getElementById("mail")
const password = document.getElementById("password")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    checkInput()
})
function checkInput() {
    let firstnameValue = firstname.value;
    let lastnameValue = lastname.value;
    let emailValue = email.value;
    let passwordValue = password.value

    if (firstnameValue === "") {
        showError(firstname, 'First Name cannot be empty')
    } else {
        removeError(firstname)
    }
    if (lastnameValue === "") {
        showError(lastname, 'Last Name cannot be empty')
    } else {
        removeError(lastname)
    }
    if (emailValue === "") {
        showError(email, 'Email cannot be empty')
    } else if (!isValid(email)){
    removeError(email,' Looks like is not an Email')
    }
    if (passwordValue === "") {
        showError(password, 'Password cannot be empty')
    } else if (passwordValue.length <= 8) {
        showError(password, 'Password is too short')
    } else {
        removeError(password)
    }

}

function showError(input, message) {
    let inputElement = input.parentElement // .input-group
    const span = inputElement.querySelector("span")
    // add error inside the span
    span.textContent = message
    // add error inside the class
    inputElement.className = 'input-group error'
    // formControl.classList.add('error')

}
function removeError(input) {
    let inputElement = input.parentElement
    inputElement.className = 'remove error'

}
function isValid(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}