

function generatePassword(){
  const length = Number(document.getElementById("length").value);
  const includeLowercase = true;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  console.log(includeUppercase);
  console.log(includeNumbers);
  console.log(includeSymbols);

   
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*?~_-+=/~";

  let allowedChars = "";
  let password ="";
  allowedChars +=  includeLowercase? lowercaseChars : "";
  allowedChars +=  includeUppercase? uppercaseChars : "";
  allowedChars +=  includeNumbers? numberChars : "";
  allowedChars +=  includeSymbols? symbolChars : "";

  for(let i = 0; i < length;i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById("password").innerHTML = password;
}

