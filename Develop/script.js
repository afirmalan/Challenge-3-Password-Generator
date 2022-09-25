// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var number = "0123456789"
var special="!@#$%^&*?"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var finalpwd=""
  var length =  prompt("please enter a number 8 to 128")

  if (length >=8 && length<=128){
    var isLowercase = confirm("Include Lowercase?")
    var isUppercase = confirm("Include Uppercase?")
    var isNumeric = confirm("Include numeric?")
    var isSpecial = confirm("Include special characters?")
      if (isLowercase===true){
        var positionString=Math.floor(Math.random()*26)
        finalpwd = finalpwd + lowercase[positionString]
      }
      if (isUppercase===true){
        var positionStringUppercase = Math.floor(Math.random()*26)
        finalpwd = finalpwd + uppercase[positionStringUppercase]
      }
      if (isNumeric===true){
        var positionStringNum = Math.floor(Math.random()*10)
        finalpwd = finalpwd + number[positionStringNum]
      }
      if (isSpecial===true){
        var positionStringSpecial = Math.floor(Math.random()*9)
        finalpwd = finalpwd + special[positionStringSpecial]
      }
  } else {
    alert("invalid entry")
  }
  return finalpwd
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
