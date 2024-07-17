// TASK 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function makeCar(manufacturer:string,model:string,...properties:[string,any][]):any{
    let car :any ={
        manufacturer,
        model,

    };
for(let [key,value]of properties){
car [key]= value
}
return car
}
let myCar:string|number=makeCar("Honda","Gli",["Color","Black"],["Optional feature","Sunroof"],["Model no",2024]);
console.log(myCar);

//      ALL ASSIGNMENTS HAS BEEN COMPLETED !!