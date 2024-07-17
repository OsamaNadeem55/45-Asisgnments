// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const myfriends: string[]=["Harris","Salman","Hubdar"];
console.log(myfriends);
console.log(`We have 3 more friends to invte on dinner\n`)
// add three more friends
myfriends.unshift("Abdullah");
// at the middle
myfriends.splice(2,0,"Muneeb")
// at the last
myfriends.push("Rehan");


// print all friends along with messege
for(let i=0; i<myfriends.length;i++){
    console.log(`Mr. ${myfriends[i]} you are invited to my dinner`);
}