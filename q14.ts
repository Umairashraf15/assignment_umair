// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList:Array<string>=[
    "Ali Akbar",
    "Akhtar Alam",
    "Saddique Kabir",
    "Allama Iqbal",
    "Elon Musk",
    "Robert Oppenheimer"
];

guestList.forEach(
    (guestName)=>{
        console.log(`Dear ${guestName}, you are invited to dinner please join us.`);
        
    }
)
export{};