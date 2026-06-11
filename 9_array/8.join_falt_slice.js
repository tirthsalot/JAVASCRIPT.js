// join method 

let countries = ["portugal","argentina","brazil","france"]

console.log("return new string with each element ",countries.join(" "));
console.log("return new string with each element ",countries.join(""));
console.log("return new string with each element ",countries.join());

//example

let faculties = ["angelina","shivam","prashant","mohit"]

console.log("return new string with each element ",faculties.join());
console.log("return new string with each element ",faculties.join(""));
console.log("return new string with each element ",faculties.join(" "));

//example

let drinks = ["mojeto","colddrink","milkshake","thickshake","coffe","tea","water"]

console.log("return new string with each element ",drinks.join(""));
console.log("return new string with each element ",drinks.join());
console.log("return new string with each element ",drinks.join(" "));

//flat method

const numArray = [1,10,100,1000,100000,1000000]

console.log("flattened number array =>", numArray.flat());

//example

const digits = [1,2,[3,4],[5,6,7,[8,9,10]]];

console.log("more nested falttened number array op =>",digits.flat(Infinity));

// slice method

console.log("faculties elements",faculties);

console.log("slicing faculties array =>",faculties.splice(1,2));

//example

console.log("countries elements",countries);

console.log("slicing countries array =>",countries.splice(1,3));

//example

console.log("drinks elements",drinks);

console.log("slicing drinks array =>",drinks.splice(2,5));


