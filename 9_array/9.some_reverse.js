// some() method

let ages = [1, 2, 3, 12, 15, 60, 65, 80];

let youngage = ages.some(function(x) {
    return x < 60;
});

console.log(youngage);

// example

let age = [1, 2, 3, 12, 15, 60, 65, 80];

let oldage = age.some(function(x) {
    return x > 15;
});

console.log(oldage);

//reverse example

let numArray = [1,10,100,1000,10000,100000];

console.log("numarray", numArray);

console.log("reversing num array",numArray.reverse());

//example

let mobiles = ["Samsung", "Vivo", "Oppo", "iPhone"];

console.log("Before Reverse:", mobiles);

mobiles.reverse();

console.log("After Reverse:", mobiles);

//example

let fruits = ["Apple", "Banana", "Mango", "Orange"];

let reversedFruits = fruits.reverse();

console.log(reversedFruits);

//sort method


let alphabet = ["x", "a", "d", "c", "b","e","f","s","t"];

console.log("sort the alphabet array : ", alphabet.sort());

//number data type
let numArray = [1, 10, 100, 1000, 10000, 100000];

console.log(
  "Sorting number array in ascending order :",
  numArray.sort((a, b) => a - b)
);

console.log(
  "Sorting number array in descending order :",
  numArray.sort((a, b) => b - a)
);
  
  
