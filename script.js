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
var password = buildPassword("this is my string");
  //3. Send the generated password to the generatePassword function
  //This function puts the password into the HTML


  //////////////////////////
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");



  //passwordText.value = password;

}

function getOptions(options) {
  var length = prompt("What length do you want?");
  var nums = confirm("Shall we use numbers?");
  var lower = confirm("Shall we use lowercase letters?");
  var upper = confirm("Shall we use uppercase letters?");
  var specials = confirm("Shall we use special characters?");

  return {length: length, nums: nums, lower: lower, upper: upper, specials: specials}
}

function buildPassword(options) {
  var password = "";
  if(nums) {
   // add a number to the password
   password.push.nums;
   console.log(options);
  }

  if(lowers) {
    password.push.lowers;

  }

  if (uppers) {
    password.push.uppers;

  }

  if (specials) {
    password.push.specials;
  }
  //... do all the options

  return password
}

getOptions(password);
buildPassword(nums, lower, upper, specials);
//generatePassword

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

//2) prompt "Use lowercase?"
  //var lowercase = prompt("Shall we use lowercase?");

  //if (lowercase === true) {
    //do something (look up that toLowercase function???)
  //  var lCase="abcdefghijklmnopqrstuvwxyz"
  //} else {
  //do something
  //}
//   display and store as an array

//3) prompt "Use uppercase?"
  //var uppercase = prompt("Shall we use uppercase?");

  //if (uppercase === true) {
    //do something
  //  var uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //} else {
  //do something
  //}

//   display and store as an array

//4) prompt "Use numbers?"

  //var numbers = prompt("Shall we use numbers?");

  //if (numbers === true) {
    //do something
  //} else {
    //do something
  //}

//   display and store as an array

//5) prompt "Use special characters (%$!)?"
//   display and store as an array

//6) now randomly generate password according to the values
// randomly choose from 4 arrays?
//   display


//one of the arrays has to be the length specified by the user,
//then do a loop with that value
//and run the math.Random thingy for that?

//this ostensibly adds random numbers to an array
//for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.random())}

//how do i prompt the value ARRAY_LENGTH?
