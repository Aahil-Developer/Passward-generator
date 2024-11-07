console.log("password Generator");


let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowerCase = "abcdefghijklmnopqrstuvwxyz";

let number = "123456789";

// let symbols ="!@#$%^&*()<>:/{}.`~";
let symbols ="#£$€¥&¢_×¹²³¿?@()<}{[]>±≠≈=⁴ⁿʼ`;:‡†‹›‰%÷/„«»”,!"
// #£$€¥&¢_×¹²³¿?@()<}{[]>±≠≈=⁴ⁿʼ`;:‡†‹›‰%\÷/„«»”,!¡

let length = 12;
let passwordBox = document.getElementById("password");

function generator (){
    let password ="";
  
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];

    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
