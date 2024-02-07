"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "\t  Umair Ashraf  \n";
console.log("Name with white spaces", personName);
let strippedName = personName.trim();
console.log("Name without whitespaces:", strippedName);
