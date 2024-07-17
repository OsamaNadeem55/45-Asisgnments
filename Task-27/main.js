// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Version 1:Green Alien
console.log(" Version 1 : Where align color is green");
var aliens_color = "green";
if (aliens_color === "green") {
    console.log("The Player just earned 5 points.");
}
else if (aliens_color === "yellow") {
    console.log("The Player just earned 10 points.");
}
else if (aliens_color === "red") {
    console.log("The Player just earned 15 points.");
}
else {
    "Unknown alien color";
}
//Version 2 :Yellow Alien
console.log(" Version 2 : Where align color is yellow");
aliens_color = "yellow";
if (aliens_color === "green") {
    console.log("The Player just earned 5 points.");
}
else if (aliens_color === "yellow") {
    console.log("The Player just earned 10 points.");
}
else if (aliens_color === "red") {
    console.log("The Player just earned 15 points.");
}
else {
    "Unknown alien color";
}
//Version 3 :Red Alien
aliens_color = "red";
console.log(" Version 3 : Where align color is red");
if (aliens_color === "green") {
    console.log("Congratulations !The Player just earned 5 points.");
}
else if (aliens_color === "yellow") {
    console.log("Congratulations !The Player just earned 10 points.");
}
else if (aliens_color === "red") {
    console.log("Congratulations !The Player just earned 15 points.");
}
else {
    "Unknown alien color";
}
