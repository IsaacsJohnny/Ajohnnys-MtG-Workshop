/**** Contact Form ****/

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
    let regex = /\S+@\S+\.\S+/; /* This matches one or more non-space characters, followed by "@", followed by one or more non-space chars, followed by ".", followed by one or more non-space chars */
    return regex.test(String(email).toLowerCase()); /* This regex checks to see that the email addressed entered is properly formatted */
}

function fieldValidation(field, validationFunction) {   
    if (field == null) return false; /* This is testing that field is not null */

    let isFieldValid = validationFunction(field.value); /*This is testing the validity of the field value with the function I passed in */
    if (!isFieldValid) {
        field.className = 'placeholderRed'; /* If field is not valid, change the field red, well tomato actually */
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() { /* This function combines all the checks and returns the combined value. If all the fields are valid, this will return true. */
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);

    return valid;
}

class User {    /* Created the class User to combine the multiple values together. I would send this to future me in order to save input to database. */
    constructor(firstName, lastName, email, mailinglist, question) {    /* The constructor method will take all the values and make a User. */
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.newsletter = mailinglist;
        this.question = question;
    }
}

function sendContact() {    /* This is the main function I call from the HTML button on my form */
    if (isValid()) { /* Checking the validity of all input fields */
        
        let user = new User(fields.firstName.value, fields.lastName.value, fields.email.value, fields.mailinglist.checked, fields.question.value);
        /* I would send future me all the user data from here. */
        alert(`${user.firstName} thanks for contacting us.`); /* If all valid and submission is successful, this alert is displayed */
        document.getElementById("myForm").reset(); /* This function clears the form after a successful submission */

    } else {
        alert("There was an error. An input field may be missing content."); /* If a field is not valid, this alert will be displayed and then focus is applied on non-valid field(s) by changing it to the color tomato */
    }
}

/**** Dice Roller ****/

//--- D20 ---//
function rollD20() {
    var d20Result = document.getElementById("d20Result");
    var d20 = Math.floor(Math.random()*20+1);
      d20Result.innerHTML = d20;
    };
    
    //--- D12 ---//
    function rollD12() {
    var d12Result = document.getElementById("d12Result");
    var d12 = Math.floor(Math.random()*12+1);
      d12Result.innerHTML = d12;
    };
    
    //--- D10 ---//
    function rollD10() {
    var d10Result = document.getElementById("d10Result");
    var d10 = Math.floor(Math.random()*10+1);
      d10Result.innerHTML = d10;
    };
    
    //--- D8 ---//
    function rollD8() {
    var d8Result = document.getElementById("d8Result");
    var d8 = Math.floor(Math.random()*8+1);
      d8Result.innerHTML = d8;
    };
    
    //--- D6 ---//
    function rollD6() {
    var d6Result = document.getElementById("d6Result");
    var d6 = Math.floor(Math.random()*6+1);
      d6Result.innerHTML = d6;
    };
    
    //--- D4 ---//
    function rollD4() {
    var d4Result = document.getElementById("d4Result");
    var d4 = Math.floor(Math.random()*4+1);
      d4Result.innerHTML = d4;
    };