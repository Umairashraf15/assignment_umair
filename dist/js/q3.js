"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//To lower Case
let personName = "Umair Ashraf";
let lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);
//To Upper Case
let upperCaseName = personName.toUpperCase();
console.log(upperCaseName);
//Title Case
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
