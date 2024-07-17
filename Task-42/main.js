// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the list of magicians
var magiciansNames = ["Patrick", "Jhonson", "Bruce", "Steve", "Robert", "Mike"];
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Function to make magicians great
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Call makeGreat to modify the list of magicians
makeGreat(magiciansNames);
// Call showMagicians to display the modified list
showMagicians(magiciansNames);
