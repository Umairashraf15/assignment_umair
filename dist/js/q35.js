"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
const animals = ["dog", "cat", "goat"];
for (const animal of animals) {
    console.log(animal);
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
console.log("\nPrinting a statement:");
for (const animal of animals) {
    if (animal === "dog") {
        console.log(`A ${animal} is a great pet.`);
    }
    else if (animal === "cat") {
        console.log(`A ${animal} could be a animal to relieve your stress.`);
    }
    else if (animal === "goat") {
        console.log(`A ${animal} is a useful pet for milk and also meat.`);
    }
}
//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\n");
console.log("Any of these animals would make a great pet!");
