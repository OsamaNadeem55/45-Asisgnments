// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var myfriends = ["Hammad", "Salman", "Hubdar", "Riaz", "Azhar"];
console.log("Table is not available i can invite only 2 person\n");
var friend1 = myfriends.pop();
console.log("Sorry Mr.".concat(friend1, " you are not invited!"));
var friend2 = myfriends.pop();
console.log("Sorry Mr.".concat(friend2, " you are not invited!"));
var friend3 = myfriends.pop();
console.log("Sorry Mr.".concat(friend3, " you are not invited!"));
for (var i = 0; i < myfriends.length; i++) {
    console.log("Mr.".concat(myfriends[i], " you are still invited"));
}
myfriends.pop();
myfriends.pop();
console.log(myfriends);
