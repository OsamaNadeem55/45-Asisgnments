// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var myfriends = ["Javed", "Shahbaz", "Hammad", "Ali"];
console.log("due to some personal reasons Mr.".concat(myfriends[1], " will not come on my dinner"));
myfriends[1] = "Abdullah";
console.log("New list of my friends who are coming to my dinner");
for (var i = 0; i < myfriends.length; i++) {
    console.log("".concat(i + 1, ".").concat(myfriends[i]));
}
