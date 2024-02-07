// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const bouquet={
    name:"Spring Delight",
    price:230,
    description:"Flowers of different kinds."
}

let bouquets:Array<typeof bouquet>=[];

bouquets.push(bouquet);
bouquets.push({
name:"Summer bliss",
price:230,
description:"Beautiful arrangement of different kind of flowers."})


const bouquet3={
    name:"Red Hot",
    price:280,
    description:"Beautiful arrangement of red roses."
}
bouquets.push(bouquet3);
console.log(bouquets);


function displayBouquets(bouquets:Array<typeof bouquet>)
{
    for(let i of bouquets){
        console.log(`Title: ${i.name}
        description: ${i.description}
        price: ${i.price}
        _____________\n`);
    }
}
displayBouquets(bouquets);
export{}