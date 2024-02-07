// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.



let guestList:Array<string>=[
    "Ali Akbar",
    "Akhtar Alam",
    "Saddique Kabir",
    "Allama Iqbal",
    "Elon Musk",
    "Robert Oppenheimer"
];

let guestWhoCannotCome:string="Allama Iqbal";
console.log(`${guestWhoCannotCome} can't make it to Dinner.`);


// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let newGuest:string="Imran Khan Niazi";
let indexofguestWhoCannotCome:number =guestList.indexOf(guestWhoCannotCome);


if (indexofguestWhoCannotCome !== -1){
    guestList[indexofguestWhoCannotCome]= newGuest
}

console.log(guestList[3]);
console.log(guestList);





// • Print a second set of invitation messages, one for each person who is still in your list.

console.log("Second Invitation");

guestList.forEach((guest:string) =>{
    console.log(`Dear ${guest}, you are invited to Dinner.`);
    
}
)

export{guestList};