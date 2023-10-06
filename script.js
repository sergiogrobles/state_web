const emailInput = document.getElementById("email");
const emailInputConfirm = document.getElementById("confirmEmail");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

const questionInput = document.getElementById("question");

document.getElementsByClassName('form')[0].addEventListener('submit', function(event) {
    event.preventDefault();

    const invalidColor = "red";
    const validColor = "";

    if (emailInput.value == emailInputConfirm.value) {

        emailInput.value = '';
        emailInputConfirm.value = '';
        firstNameInput.value = '';
        lastNameInput.value = '';
        questionInput.value = '';

        return emailInputConfirm.style.color = validColor;

    } 
    else {
        return emailInputConfirm.style.color = invalidColor;
    }
});
