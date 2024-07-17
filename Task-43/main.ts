// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magiciansNames : string [] = ["Patrick","Jhonson","Bruce","Steve","Robert","Mike"]

function show_magicians(magicians:string[]):void{
for(let magician of magicians){
    console.log(magician)
}
}
function make_great(magicians:string[]):string[]{
 const greatmagicians:string[]=magicians.map(magician =>`The Great ${magician}`);
 return greatmagicians
}
let greatmagiciansName :string[]= make_great(magiciansNames);
console.log(`Orignal Magicians:`);
show_magicians(magiciansNames);

console.log(`\nGreat Magicians:`);
show_magicians(greatmagiciansName)

make_great(magiciansNames);