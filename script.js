const form = document.getElementById("form")
const firstName = document.getElementById("fName")
const lastName = document.getElementById("lName")
const email = document.getElementById("email")
// const password = document.getElementById("password")
const errorMessage = document.querySelector('span')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    checkInput()

})
function checkInput() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;

    if (firstNameValue === "") {
        errorMessage.textContent = "first name cannot be empty"
        firstName.style.borderColor = "#d44646";
    } else {
        firstName.style.borderColor = "green"
    }
    if (lastNameValue === "") {
        errorMessage.textContent = "last Name cannot be empty"
    } else {
        lastName.style.borderColor = "green"
    }
    if (emailValue === "") {
        errorMessage.textContent = "Looks like this is not email"
    } else {
        

    }
}
