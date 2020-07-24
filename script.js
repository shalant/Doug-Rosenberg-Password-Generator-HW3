// Assignment Code, Get the first element in the document with class="generate":
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  console.log("writing password!")
  //Steps
  //1. Create a function called getOptions. 
  //This function calls the prompt function and returns an object with the options
  //desired by the user.
  var options = getOptions();
  //2. Send those options to the buildPassword function
  //This function takes those options and builds a password including the desired character
  //types and to the specific length desired.
var password = buildPassword(options);
  console.log(password)
  //3. Send the generated password to the generatePassword function
  //This function puts the password into the HTML
}

function getOptions() {
  var lengthP = prompt("What length do you want?");
  var nums = confirm("Shall we use numbers?");
  var lower = confirm("Shall we use lowercase letters?");
  var upper = confirm("Shall we use uppercase letters?");
  //var specials = confirm("Shall we use special characters?");

//  return {length: length, nums: nums, lower: lower, upper: upper, specials: specials}
return {
  lengthP: lengthP,
  nums: nums,
  lower: lower,
  upper: upper,
}
}

function buildPassword(lengthP) {
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  //var upYours = abc.toUppercase;
  for(var i = 0; i < abc.length; i++) {
    //console.log(abc[i].toUpperCase());
    return abc.push(abc[i].toUpperCase());
  }
  //console.log(upYours);
  var results = "";
  for(var i = 0; i < abc.length; i++) {
    results += abc[Math.floor(Math.random()*abc.length)]
  }

  return results;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



/////////////////////////
//GENERAL STRUCTURE:
//1) user clicks button, prompt "How long is the password, minimum is 8 characters?"
// ??? How to click a button and then issue prompts?
//function myFunction() {

function myFunction() {
  var passwordLength = prompt("How long is the password, minimum 8-128 characters?");
  
  //display password length (!= null means "not null")
  if (passwordLength != null) {
    document.getElementById("password").innerHTML =
    "Password will be " + passwordLength + "characters long";
  }
}

//handle the abc1 to uppercase
//add the uppercase letters to abc array
