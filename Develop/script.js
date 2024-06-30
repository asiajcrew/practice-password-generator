// Assignment code here

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "&", "*", "(", ")", "-", "_"];

// generatePassword = (random selection from uppercase/ lowercase/ numbers/ specialcharacters arrays).length = passwordLength

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
    } else {
      // don't include uppercase letters in generated password
    }

  // Confirm lowercase letters
  var lowercaseConfirm = window.confirm("Would you like to include LOWERCASE letters in your password?");
    if (lowercaseConfirm) {
      // include lowercase letters
    } else {
      // dont't include lowercase letters
    }

  // Confirm numbers
  var numberConfirm = window.confirm("Would you like to include NUMBERS in your password?")
    if (numberConfirm) {
      // include numbers
    } else {
      // dont include numbers
    }

  // Confirm special characters
  var specialCharactersComfirm = window.confirm("Would you like to include SPECIAL CHARACTERS in your password?");
    if (specialCharactersComfirm) {
      // include special characters
    } else {
      // don't include special characters
    }
    validateSelections();
}

var validateSelections = function() {
  // confirm that user selects at least one option
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
