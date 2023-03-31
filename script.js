var generateBtn = document.querySelector("#generate"); //must keep

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*~+={}[]:,./"
}

var customerChoices =""

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
    return"";
  }
 
  var confirmLowerCase = confirm("Would you like lower case letters in your password?");
  var confirmUpperCase = confirm("Would you like upper case letters in your password?")
  var confirmSymbols = confirm("Would you like symbols in you password?");
  var confirmNumbers = confirm("Would you like numbers in your password?")
  console.log(passwordLength, confirmLowerCase, confirmUpperCase,confirmSymbols,confirmNumbers);

 //IF TRUE THEN....
  if (confirmLowerCase === true) {
    console.log("Before ", customerChoices);
    customerChoices = customerChoices + keys.lowerCase;
    console.log("After ", customerChoices);
  }
  if (confirmUpperCase === true) {
    console.log("Before ", customerChoices);
    customerChoices = customerChoices + keys.upperCase;
    console.log("After ", customerChoices);
  }
  if (confirmNumbers === true) {
    console.log("Before ", customerChoices);
    customerChoices = customerChoices + keys.numbers;
    console.log("After ", customerChoices);
  }
  if (confirmSymbols === true) {
    console.log("Before ", customerChoices);
    customerChoices = customerChoices + keys.symbols;
    console.log("After ", customerChoices);
  }
  
  //IF AT LEAST ONE IS NOT CHOSEN THEN....
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols) {
    alert("Please choose at least one of the password parameters.");
  return"";
     }

  //GENERATE THE PASSWORD FROM THE USER OPTIONS
  var password = ""
  for (var i=0; i < passwordLength; i++) {

  var random = Math.floor(Math.random() * customerChoices.length);
    password = password + customerChoices[random];
    console.log(password)
}
  return password;
}

generateBtn.addEventListener("click", writePassword)