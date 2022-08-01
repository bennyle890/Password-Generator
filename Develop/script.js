// Assignment code here


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

// Letters for password
var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var spCharacters = ['"', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"']

function generatePassword() {
  var passwordLength = prompt('How many characters long should your password be? Password length should be between 8 and 128 characters.')

if (passwordLength >=8 && passwordLength <= 128) {
  var confLowers = confirm('Should your password contain lowercase letters?');
  var confUppers = confirm('Should your password contain uppercase letters?');
  var confNumbers = confirm('Should your password contain numbers?');
  var confSpCharacters = confirm('Should your password contain special characters?');

  var passwordContains = [];

  if (confLowers) {
    passwordContains.push(lowers);
  }
  if (confUppers) {
    passwordContains.push(uppers);
  }
  if (confNumbers) {
    passwordContains.push(numbers);
  }
  if (confSpCharacters) {
    passwordContains.push(spCharacters);
  }

  console.log(passwordContains);

  var result = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomArray = passwordContains[Math.floor(Math.random() * passwordContains.length)]
    var randomCharacter = randomArray[Math.floor(Math.random() * randomArray.length)]
    result += randomCharacter;
  }

  return result;

  } else {
    window.alert('Please try again with a valid password length.');
  }
}