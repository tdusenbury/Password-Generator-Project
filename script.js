// Assignment Code
//var generateBtn = document.querySelector("#generate"); //must keep
// Write password to the #password input
//function writePassword() { //must keep
 // var password = generatePassword(); // must keep
  //var passwordText = document.querySelector("#password"); //must keep

  //passwordText.value = password;  //must keep
//}
// Add event listener to generate button (This stays at the bottom.)
//generateBtn.addEventListener("click", writePassword); //must keep
//}
//==================================================================
var generateBtn = document.querySelector("#generate"); //must keep

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*~+={}[]:,./"
}

var superString =""

function writePassword() { //must keep
  var password = generatePassword(); // must keep
  var passwordText = document.querySelector("#password"); //must keep

  passwordText.value = password;  //must keep;
}

function generatePassword() {
  console.log();
  //USER QUESTIONS
  var passwordLength=prompt("How many characters in your password?");
  if (passwordLength <8 || passwordLength >128) {
    alert("Please choose a number between 8 and 128.")
    return;
  }
  var confirmLowerCase = confirm("Would you like lower case letters in your password?");
  var confirmUpperCase = confirm("Would you like upper case letters in your password?")
  var confirmSymbols = confirm("Would you like symbols in you password?");
  var confirmNumbers = confirm("Would you like numbers in your password?")
  console.log(passwordLength, confirmLowerCase, confirmUpperCase,confirmSymbols,confirmNumbers);

//  // if (confirmLowerCase!= && confirmUpperCase!= && confirmNumbers!= && confirmSymbols!= ) {
//     alert("Please choose at least one of the password parameters.");
//     return;
//    }

  if (confirmLowerCase === true) {
    console.log("Before ", superString);
    superString = superString + keys.lowerCase;
    console.log("After ", superString);
  }
  if (confirmUpperCase === true) {
    console.log("Before ", superString);
    superString = superString + keys.upperCase;
    console.log("After ", superString);
  }
  if (confirmNumbers === true) {
    console.log("Before ", superString);
    superString = superString + keys.numbers;
    console.log("After ", superString);
  }
  if (confirmSymbols === true) {
    console.log("Before ", superString);
    superString = superString + keys.symbols;
    console.log("After ", superString);
  }
    
  var password = ""
  for (var i=0; i < passwordLength; i++) {

  var random = Math.floor(Math.random() * superString.length);
    password = password + superString[random];
    console.log(password)
}
  return password;
}

generateBtn.addEventListener("click", writePassword)