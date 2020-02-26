// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  function generatePassword(){
    let passWord="";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numeric = "1234567890";
    let specialChar = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let typeRequested = [];
    let typeIncluded = [];
    
    //get the length of password, will keep asking until get a number between 8-128
    let passWordLength;
    do {
      passWordLength = prompt("Please enter a number between 8 and 128 \nHow many characters would you like to have?");
    } while (passWordLength < 8 || passWordLength >128 || isNaN(passWordLength));

    // get the types of characters to be included
    confirm("Would you like to include uppercase letters?") ? typeRequested.push(upperCase):"";
    confirm("Would you like to include lowercase letters?") ? typeRequested.push(lowerCase):"";
    confirm("Would you like to include numbers?") ? typeRequested.push(numeric):"";
    confirm("Would you like to include special characters?") ? typeRequested.push(specialChar):"";
    
    // alart if no types are choosen 
    if (typeRequested.length == 0) {
      alert("Please choose at least one type of characters.");
    }

    //define password generator function
    function generator() {
      //reset the password and type included if the previous run is not a success
      passWord="";
      typeIncluded = [];

      //generate password using for loop
      for (let i=1; i<=passWordLength;i++) {
        //randomly choose a type from requested, and mark as included
        randomType = typeRequested[Math.floor(Math.random() * typeRequested.length)];
        typeIncluded.includes(randomType) ? "":typeIncluded.push(randomType);

        //randomly choose password from the type above
        passWord += randomType[Math.floor(Math.random()* randomType.length)];
      } 
      return (passWord);
    } 

    // run the generator till all the types requested are included in the password
    while (typeIncluded.length != typeRequested.length) {
      generator();
    } 
    
    return (passWord);
  }
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
