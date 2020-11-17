var fields = {}; /* This object connects all of the fields. Doing it at the beginning allows it to be accessible globally */
document.addEventListener("DOMContentLoaded", function () { /* This links all of the fields to var fields */
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.mailinglist = document.getElementById('mailinglist');
    fields.question = document.getElementById('question');
})

function isNotEmpty(value) {    /* This is a two part function. The first part checks that the value is not null or undefined. If it is, it returns false and prevents errors in the last part */
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);  /* This part is checking that the value is one or more characters long, so the fields can't be left empty */
}

function isEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(String(email).toLowerCase()); /* This regex checks to see that the email addressed entered is properly formatted */
}

function fieldValidation(field, validationFunction) { /* This function is testing that the field itself exists. */  
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value); /*This is testing the validity of the field value */
    if (!isFieldValid) {
        field.className = 'placeholderRed'; /* If field is not valid, change the field red, well tomato actually */
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() { /* This function combines all the checks and returns the combined value */
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);

    return valid;
}

class User {    /* Created the class User to combine the multiple values together. */
    constructor(firstName, lastName, email, mailinglist, question) {    /* The constructor method will take all the values for the User class */
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.newsletter = mailinglist;
        this.question = question;
    }
}

function sendContact() {    /* This is the main function I call from the HTML button on my form */
    if (isValid()) {
        let user = new User(fields.firstName.value, fields.lastName.value, fields.email.value, fields.mailinglist.checked, fields.question.value);
        /* ^Checking the validity of the above fields^ */
        alert(`${user.firstName} thanks for contacting us.`); /* If all valid and submission is successful, this alert is displayed */
        document.getElementById("myForm").reset(); /* This function clears the form after a successful submission */

    } else {
        alert("There was an error. An input field may be missing content."); /* If a field is not valid, this alert will be displayed and then focus is applied on non-valid field(s) by changing it to the color tomato */
    }
}

