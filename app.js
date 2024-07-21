document.addEventListener("DOMContentLoaded", function () {
            
function generatePassword() {
    // Accessing the checkboxes
    let numbers_checkbox = document.getElementById("Numbers-checkbox");
    let specialcharacter_checkbox = document.getElementById("special-character");
    let inputByUser = parseInt(document.getElementById("Length-input").value);                
   
    // sets of different chracters
    const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "12345678910";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:`\",.<>/?`~";
    
    // Validation for input length to ensure that the length is between 1 to 20
    if(isNaN(inputByUser) || inputByUser < 1 || inputByUser > 20) {
        alert("Password's length should be between 1 to 20");
        return;
    }
    
    /* this variable includes the default string of upper and lowerrr case alphabetes which means if any of the checkbox is not checked, the password will be obtain only upper and lower alphabets sets */
    var defaultStringForPassword = lowercaseAlphabet + upperercaseAlphabet;
    
    //now we check if any checkbox is checked add the set of that checkbox into defaultpassword's variable.
    if(numbers_checkbox.checked) {
        defaultStringForPassword += numbers; 
    } 
    if(specialcharacter_checkbox.checked) {
        defaultStringForPassword += specialCharacters;
    }
    // Here the real game starts.
    // We add the loop to create a string of random values
    var resultToShow = "";
    for (var i = 0; i < inputByUser; i++) {
        var generatingRandomString = Math.floor(Math.random() * defaultStringForPassword.length);
        resultToShow += defaultStringForPassword[generatingRandomString];
    }
    
    document.getElementById("password-result").value = resultToShow;
    }
    document.getElementById("submit-btn").addEventListener("click", function(event) {
        event.preventDefault();
        generatePassword();
    });
})