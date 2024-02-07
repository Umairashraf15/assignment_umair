// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.


let guestList:Array<string>=[
    "Ali Akbar",
    "Akhtar Alam",
    "Saddique Kabir",
    "Allama Iqbal",
    "Elon Musk",
    "Robert Oppenheimer"
];

for (let guest of guestList){
    console.log(`Hello, ${guest}, we have found a bigger Dinning table. `);
    
}


// • Add one new guest to the beginning of your array.

let newGuest:string="Inzmam-ul-Haq";
guestList.unshift(newGuest);

console.log(guestList);




// • Add one new guest to the middle of your array. 
let newGuestInMiddle:string="Mujahid Akram";

let middleIndex:number =Math.floor(guestList.length/2);

guestList.splice(middleIndex, 0, newGuestInMiddle);
console.log(guestList);


// • Use append() to add one new guest to the end of your list. 

let newGuestAtEnd:string="Salim Javed";

guestList.push(newGuestAtEnd);

console.log(guestList);


// • Print a new set of invitation messages, one for each person in your list.

console.log("New Invitation");
for(let guest of guestList){
    console.log(`Dear ${guest}, You have got an Invitation.`);
    
}

export{};