var fields = {};
document.addEventListener("DOMContentLoaded", function () {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.mailinglist = document.getElementById('mailinglist');
    fields.question = document.getElementById('question');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function isEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value);
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);

    return valid;
}

class User {
    constructor(firstName, lastName, email, mailinglist, question) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.newsletter = mailinglist;
        this.question = question;
    }
}

function sendContact() {
    if (isValid()) {
        let user = new User(fields.firstName.value, fields.lastName.value, fields.email.value, fields.mailinglist.checked, fields.question.value);

        alert(`${user.firstName} thanks for contacting us.`);
        document.getElementById("myForm").reset();

    } else {
        alert("There was an error. An input field may be missing content.");
    }
}

