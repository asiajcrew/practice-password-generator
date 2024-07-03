// Assignment code here

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "&", "*", "(", ")", "-", "_", "@", "^", "+", ".", "<", ">", "/", "'", "|", ":"];
var masterListArray = [];
var inputArray = [];

function resetPassword() {
  var password = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  // Select password length
  var passwordLength = window.prompt("How long would you like your password to be? Please enter a number 8- 128");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please choose a number 8 to 128.");
      generatePassword();
    }
  
  // Confirm uppercase letters
  var uppercaseConfirm = window.confirm("Would you like to include UPPERCASE letters in your password?");
    if (uppercaseConfirm) {
      // include uppercase letters in the generated password
      masterListArray = masterListArray.concat(uppercaseLetters);
    }

  // Confirm lowercase letters
  var lowercaseConfirm = window.confirm("Would you like to include LOWERCASE letters in your password?");
    if (lowercaseConfirm) {
      // include lowercase letters
      masterListArray = masterListArray.concat(lowercaseLetters);
    }

  // Confirm numbers
  var numberConfirm = window.confirm("Would you like to include NUMBERS in your password?")
    if (numberConfirm) {
      // include numbers
      masterListArray = masterListArray.concat(numbers);
    }

  // Confirm special characters
  var specialCharactersComfirm = window.confirm("Would you like to include SPECIAL CHARACTERS in your password?");
    if (specialCharactersComfirm) {
      // include special characters
      masterListArray = masterListArray.concat(specialCharacters);
    }

    // iterate through the generatePassword() function until the passwordLength is matched
    for (var i = 0; i < passwordLength; i++) {
      inputArray.push (masterListArray[Math.floor(Math.random() * masterListArray.length)]);
    } 
    return inputArray.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

