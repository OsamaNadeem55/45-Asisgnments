//TASK 24
// Tests for equality and inequality with strings
let name_1 : string = "Osama"
let name_2 : string = "Osama Nadeem"
let name_3 : string = "Mr Osama Nadeem"
if (name_1 == name_3){
    console.log("names are equal")
}
else{
    console.log("names are not equal")
}
if (name_1 != name_2){
    console.log("names are equal")
}
else{
    console.log("names are not equal")
}
// Tests using the lower case function
 if (name_1 != name_3){
     console.log("names are equal")
 }
// NUMERICAL TESTS
let age_1 : number = 20
let age_2 : number = 22
if (age_1 == 20){
    console.log("eligible for taking ride")
}
if (age_1 != 22){
       console.log("eligible for taking ride in amusement park")
 }
if (age_1 <= age_2){     //less 
    console.log("younger")
}
if (age_2 >= age_1){      //greater
    console.log("older")
}
// TEST USING AND & OR OPERATORS
if (age_1 == 20 && age_2 == 22){
    console.log("person is eligible for vote")
}
if (age_1 == 20 || age_2 != 22){
    console.log("person is not eligible for vote")
}
// TEST WHETHER ITEMS IN ARRAY
let Mountains : string [] = ["Mount Everest","K2","Himalayas","Nanga parbat","Mount Elbrus"]
if (Mountains.includes("Mount Everest")){
    console.log("Mount Everest is in mountain list")
}
// TEST whether items not in an array
if (Mountains.includes("Mount Fuji")){
    console.log("Mount Fuji is not includes in an array")
};