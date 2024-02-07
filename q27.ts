// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

let alien_color:string = "green";

if(alien_color === "green"){
    console.log("Congratulations! You have just got 5 points.");
}else if(alien_color === "yellow"){
    console.log("Congratulations! You have just got 10 points."); 
}else if(alien_color === "red"){
    console.log("Congratulations! You have just got 15 points.");
}else {
    console.log("Unknown alien error.");
}

// • If the alien is yellow, print a message that the player earned 10 points.
alien_color = "yellow";

if(alien_color === "green"){
    console.log("Congratulations! You have just got 5 points.");
}else if(alien_color === "yellow"){
    console.log("Congratulations! You have just got 10 points."); 
}else if(alien_color === "red"){
    console.log("Congratulations! You have just got 15 points.");
}else {
    console.log("Unknown alien error.");
}
// • If the alien is red, print a message that the player earned 15 points.

alien_color = "red";

if(alien_color === "green"){
    console.log("Congratulations! You have just got 5 points.");
}else if(alien_color === "yellow"){
    console.log("Congratulations! You have just got 10 points."); 
}else if(alien_color === "red"){
    console.log("Congratulations! You have just got 15 points.");
}else {
    console.log("Unknown alien error.");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

