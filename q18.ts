// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let Places:string[]=["Vietnam","Berlin","Malam Jabba","Hiroshima","Cape Town"];

// • Print your array in its original order.
console.log("\n Original Array");

console.log(Places);

// • Print your array in alphabetical order without modifying the actual list.

console.log("\n Arranging in alphabetical order");
console.log([...Places].sort());


// • Show that your array is still in its original order by printing it.

console.log("\n Original Array");
console.log(Places);


// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\n Arranging in reverse alphabetical order");
console.log([...Places].sort().reverse());


// • Show that your array is still in its original order by printing it again.

console.log("\n Original order of Array");
console.log(Places);

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log("\n Arranging in reverse order");
Places.reverse();
console.log(Places);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("\n Arranging in original order");
Places.reverse();
console.log(Places);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("\n changing to alphabetical order");
Places.sort();
console.log(Places);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("\n changing to reverse alphabetical order");

Places.sort().reverse();
console.log(Places);