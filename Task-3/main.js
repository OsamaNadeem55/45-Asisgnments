// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personname = "Osama Bin Nadeem";
// lowercase
var lowercase = personname.toLowerCase();
console.log(lowercase);
// uppercase
var uppercase = personname.toUpperCase();
console.log(uppercase);
// titlecase
var firstletter = personname.charAt(0).toUpperCase();
var restletters = personname.slice(1).toLowerCase();
var titleCase = firstletter + restletters;
console.log(titleCase);
