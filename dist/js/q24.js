"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
const str1 = "Hi";
const str2 = "hi";
console.log(str1 === str2);
console.log(str1 !== str2);
// • Tests using the lower case function
const str3 = "Hello, I am from quarter-1.";
const str4 = "hello, i am from quarter-1.";
console.log(str3.toLowerCase() === str4);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 23;
const num2 = 12;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
const a = 3;
const b = 6;
const c = 9;
console.log(a < b && b < c);
console.log(a > b || b > c);
console.log(a > b && b < c);
console.log(a > b || b > c);
// • Test whether an item is in a array
const cricketItems = ["Bat", "Ball", "Pads", "Helmet"];
console.log(cricketItems.includes("Helmet"));
console.log(cricketItems.includes("Safeguard"));
// • Test whether an item is not in a array
const flowers = ["rose", "tulip", "daffodil", "lilly"];
console.log(!flowers.includes("sunflower"));
console.log(!flowers.includes("daffodil"));
