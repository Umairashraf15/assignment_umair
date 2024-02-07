"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.includes("apple")) {
    console.log("I enjoy apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("I like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("I love orange!");
}
if (favorite_fruits.includes("guava")) {
    console.log("I love guava!");
}
if (favorite_fruits.includes("mango")) {
    console.log("I love mango!");
}
