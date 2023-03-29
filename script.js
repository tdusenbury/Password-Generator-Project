


//Test
function generatePassword() {
  console.log("Test Test Test");
  var passwordLength=prompt("How many characters would you like your password to be?")
  console.log(passwordLength) //passwordLength--this value is assigned once you enter into the console log
}
//make a confirm and console.log it

///make the "make a password" part first

///take the value "passwordLength" and assess it meets acceptable criteria 
//if passwordLength <
//if yes, ask next question


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (This stays at the bottom.)
generateBtn.addEventListener("click", writePassword);

