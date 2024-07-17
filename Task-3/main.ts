// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personname: string = "Osama Bin Nadeem";

// lowercase
let lowercase: string = personname.toLowerCase();
console.log(lowercase);

// uppercase
let uppercase: string = personname.toUpperCase();
console.log(uppercase);

// titlecase
let firstletter: string = personname.charAt(0).toUpperCase();
let restletters: string = personname.slice(1).toLowerCase();
let titleCase = firstletter + restletters;
console.log(titleCase);