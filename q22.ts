// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

function cricketGame(itemName:string, itemColor:string, itemShape:string){
    return{
        itemName,
        itemColor,
        itemShape,
    };
}

const cricket=[
    cricketGame("Ball","Red","Round"),
    cricketGame("Bat", "White","Rectangle"),
    cricketGame("Pads","white","Rectangle"),
    cricketGame("wickets", "Skin", "Pointed-rectangular"),
    cricketGame("Ground", "Green", "Oval"),
];

//Index Error

const index=7;

console.log(`Things at index ${index}:`, cricket[index]);

//Correcting the Index Error
const correctIndex=2;

console.log(`Things at index ${correctIndex}:`, cricket[correctIndex]);

//Things needed for cricket
cricket.forEach((cricketGame)=>{
    console.log(`Name: ${cricketGame.itemName}, Color: ${cricketGame.itemColor}, Shape: ${cricketGame.itemShape}`);
    
});

export{};