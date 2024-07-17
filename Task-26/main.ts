// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let aliens_color = "green";
//Version 1 that passes the if condition
if(aliens_color === "green") {
     console.log("The Player just earned 5 points.");
} else {
    console.log("The player just earned 10 points.")
}

//Version 2 that passes the else condition

aliens_color = "red";
if(aliens_color === "green") {
     console.log("The Player just earned 5 points.")
} else{
    console.log("The player just earned 10 points.")
}